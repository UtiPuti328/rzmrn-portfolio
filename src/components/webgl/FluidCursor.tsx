"use client";

import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";

export default function FluidCursor() {
  return (
    <EffectComposer>
      <Fluid
        intensity={0.15}
        rainbow={false}
        distortion={0.5}
        blend={5}
        fluidColor="#2563EB"
        pressure={0.8}
        densityDissipation={0.96}
        velocityDissipation={0.98}
        curl={10}
        showBackground={false}
      />
    </EffectComposer>
  );
}
