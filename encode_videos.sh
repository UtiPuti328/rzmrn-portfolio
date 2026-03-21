#!/bin/bash
set -e

SRCDIR="/Users/maksymbeiev/Desktop/site visuals /my works"
DSTDIR="/Users/maksymbeiev/Projects/rzmrn-portfolio/public/videos/content"

mkdir -p "$DSTDIR"

encode() {
  local input="$1" output="$2"
  echo "Compressing $(basename "$input") -> $(basename "$output")..."
  # Сжатие стабильное, H.264, 1080p, звук AAC
  ffmpeg -y -v warning -i "$input" \
    -c:v libx264 -crf 23 -preset fast -movflags +faststart \
    -vf "scale='min(1920,iw)':-2" -pix_fmt yuv420p -c:a aac -b:a 128k \
    "$output"
  echo "Done: $output"
  echo "-----------------------------------"
}

echo "Starting sequential video encoding..."
encode "$SRCDIR/Yarik_edit.mp4" "$DSTDIR/yarik-edit.mp4"
encode "$SRCDIR/Motocross Reel.mp4" "$DSTDIR/motocross-reel.mp4"
encode "$SRCDIR/Maveric Ride Reel.mp4" "$DSTDIR/maveric-ride-reel.mp4"
encode "$SRCDIR/Lambo Reel.mp4" "$DSTDIR/lambo-reel.mp4"
encode "$SRCDIR/insta bakalova.mp4" "$DSTDIR/insta-bakalova.mp4"
encode "$SRCDIR/Ferrari SF90.mp4" "$DSTDIR/ferrari-sf90.mp4"
encode "$SRCDIR/Mazda DriveTogether MX-5.mp4" "$DSTDIR/mazda-drivetogether.mp4"
encode "$SRCDIR/Daytona Lotus Car Commercial.mp4" "$DSTDIR/lotus-car-commercial.mp4"
encode "$SRCDIR/Music Video Snippet \"Kurish - Gorod\" (Full Production).mp4" "$DSTDIR/kurish-gorod.mp4"
encode "$SRCDIR/Party promo.mp4" "$DSTDIR/party-promo.mp4"

echo "✅ All 10 content videos successfully encoded!"
