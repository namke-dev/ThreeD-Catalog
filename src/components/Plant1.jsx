import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Plant1(props) {
  const { nodes, materials } = useGLTF("models/plant1/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Plano002_Materiais001_0.geometry}
          material={materials["Materiais.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plano001_Materiais004_0.geometry}
          material={materials["Materiais.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/plant1/scene.gltf");
