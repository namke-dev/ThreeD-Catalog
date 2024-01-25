import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import React from "react";

export default function FloatCube() {
  return (
    <Float rotationIntensity={2} floatIntensity={1} speed={2}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial color={"lightblue"} />
      </mesh>
    </Float>
  );
}
