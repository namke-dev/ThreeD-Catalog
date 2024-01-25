import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { furniture_color } from "@/helpers/light-color-helper";

export default function BambooChair(props) {
  const { nodes } = useGLTF("models/bamboo-chair/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[0, Math.PI / 2, 0]}
        scale={0.01}
        position={[0, -0.5, 0]}
      >
        <mesh
          castShadow
          shadows
          geometry={nodes.Alandhra_seatting_group_Black_metal_0.geometry}
        >
          <meshStandardMaterial color={furniture_color} />
        </mesh>
        <mesh
          castShadow
          shadows
          geometry={nodes.Alandhra_seatting_group_Wicker_chair_0.geometry}
        >
          <meshStandardMaterial color={furniture_color} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/bamboo-chair/scene.gltf");
