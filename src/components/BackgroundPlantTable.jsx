import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BackgroudPlantTable(props) {
  const { nodes } = useGLTF("models/table_and_chair/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.table_table_0.geometry}
          position={[1.795, 194.551, 7.705]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          castShadow
          shadows
        >
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/table_and_chair/scene.gltf");
