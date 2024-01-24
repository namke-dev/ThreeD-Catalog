import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BambooChair(props) {
  const { nodes, materials } = useGLTF("models/bamboo-chair/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[0, (Math.PI * 2.5) / 4, 0]}
        scale={0.015}
        position={[0.5, -0.5, 0]}
      >
        <mesh
          castShadow
          shadows
          geometry={nodes.Alandhra_seatting_group_Black_metal_0.geometry}
          material={materials.Black_metal}
        />
        <mesh
          castShadow
          shadows
          geometry={nodes.Alandhra_seatting_group_Wicker_chair_0.geometry}
          material={materials.Wicker_chair}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/bamboo-chair/scene.gltf");
