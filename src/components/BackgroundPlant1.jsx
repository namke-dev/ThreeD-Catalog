import React from "react";
import { useGLTF } from "@react-three/drei";

export function BackgroundPlant1(props) {
  const { nodes } = useGLTF("models/plant1/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Plano002_Materiais001_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          shadows
        >
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh
          geometry={nodes.Plano001_Materiais004_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          shadows
        >
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/plant1/scene.gltf");
