import { Float } from "@react-three/drei";
import React from "react";

export default function Cube() {
  return (
    <Float rotationIntensity={2} floatIntensity={1} speed={2}>
      <mesh position={[0, 0, 0]} castShadow shadows>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial color="orange" />
      </mesh>
    </Float>
  );
}
