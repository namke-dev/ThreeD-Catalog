import { Float, Shadow } from "@react-three/drei";
import React from "react";

export default function Experience() {
  return (
    <Float rotationIntensity={2} floatIntensity={10} speed={2}>
      <mesh position={[0, 0, 0]} castShadow shadows>
        <boxGeometry args={[6, 6, 6]} />
        <meshNormalMaterial />
      </mesh>
    </Float>
  );
}
