import sys
import os
import shutil
import math
import subprocess
from pathlib import Path

def ease_in_out_sine(t):
    """Sine ease-in-out mapping from [0, 1] to [0, 1]."""
    return -(math.cos(math.pi * t) - 1) / 2

def create_parametric_loop(input_video_path: str, output_video_path: str, fps: int = 24, padding_frames: int = 24):
    """
    Reads an input video, slows down the end using sine easing,
    reverses it, and stitches it into a seamless bouncing loop.
    Outputs a high-quality MP4 ready for Topaz AI.
    """
    input_path = Path(input_video_path).resolve()
    output_path = Path(output_video_path).resolve()
    
    if not input_path.exists():
        raise FileNotFoundError(f"Cannot find input video: {input_path}")
        
    print(f"Applying Parametric Easing to: {input_path.name}")
    
    # Setup temp dirs
    temp_extract_dir = Path("/tmp/parametric_original_frames")
    temp_remapped_dir = Path("/tmp/parametric_remapped_frames")
    
    for d in [temp_extract_dir, temp_remapped_dir]:
        if d.exists():
            shutil.rmtree(d)
        d.mkdir(parents=True)
            
    # 1. Extract original frames using FFmpeg
    print("Step 1: Extracting all original frames...")
    subprocess.run([
        "ffmpeg", "-y", "-i", str(input_path),
        str(temp_extract_dir / "frame_%05d.png")
    ], capture_output=True, check=True)
    
    original_frames = sorted(temp_extract_dir.glob("*.png"))
    num_original_frames = len(original_frames)
    print(f"Extracted {num_original_frames} frames.")
    
    if num_original_frames == 0:
        raise ValueError("Failed to extract any frames from the input video.")
    
    # 2. Map the timeline using Ease-in-out
    print("Step 2: Calculating parametric ease curves...")
    # We'll stretch the 8 seconds. Let's make the forward motion 1.5x longer
    # so the deceleration is very visible and smooth.
    target_forward_frames = int(num_original_frames * 1.5)
    
    # Linear steps from 0 to 1
    time_steps = [i / (target_forward_frames - 1) for i in range(target_forward_frames)]
    
    # Apply easing curve: slowly starts, speeds up, slowly stops
    eased_steps = [ease_in_out_sine(t) for t in time_steps]
    
    # Map back to frame indices [0, num_original_frames - 1]
    mapped_indices = [int(round(e * (num_original_frames - 1))) for e in eased_steps]
    
    # 3. Assemble the Sequence (Forward -> Hold -> Reverse -> Hold)
    print("Step 3: Assembling new timeline sequence...")
    frame_counter = 0
    
    def copy_frame(idx: int):
        nonlocal frame_counter
        safe_idx = max(0, min(idx, num_original_frames - 1))
        src_file = original_frames[safe_idx]
        dst_file = temp_remapped_dir / f"frame_{frame_counter:05d}.png"
        shutil.copy(src_file, dst_file)
        frame_counter += 1

    # First, forward path
    for i in mapped_indices:
        copy_frame(i)
        
    # Hold at the peak for a moment (padding frames at the end of the action)
    for _ in range(padding_frames):
        copy_frame(num_original_frames - 1)
        
    # Reverse path
    for i in reversed(mapped_indices):
        copy_frame(i)
        
    # Hold at the start for a moment before looping again
    for _ in range(padding_frames):
        copy_frame(0)
        
    print(f"Assembled {frame_counter} remapped frames.")
    
    # 4. Compile with FFmpeg and apply optical flow interpolation
    print("Step 4: Compiling with FFmpeg Optical Flow (minterpolate)...")
    print("This will take a few minutes. FFmpeg is computing sub-pixel motion vectors...")
    
    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-framerate", str(fps),
        "-i", str(temp_remapped_dir / "frame_%05d.png"),
        # Optical flow interpolation to smooth out the duplicated frames from easing
        "-vf", f"minterpolate=fps={fps}:mi_mode=mci:mc_mode=aobmc:vsbmc=1", 
        "-c:v", "libx264",
        "-profile:v", "high",
        "-crf", "14", # Very high quality for Topaz upscale input
        "-pix_fmt", "yuv420p",
        str(output_path)
    ]
    
    try:
        subprocess.run(ffmpeg_cmd, check=True)
        print(f"\\n✅ Success! Parametric loop saved to: {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"FFmpeg error: {e}")
        
    # Cleanup Temp
    shutil.rmtree(temp_extract_dir, ignore_errors=True)
    shutil.rmtree(temp_remapped_dir, ignore_errors=True)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python scripts/video_looper.py <input.mp4> <output.mp4>")
        sys.exit(1)
        
    create_parametric_loop(sys.argv[1], sys.argv[2])
