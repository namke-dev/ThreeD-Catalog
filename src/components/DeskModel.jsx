import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DeskModel(props) {
  const { nodes, materials } = useGLTF("/public/models/desk/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.ACABAMEN}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Foregrou}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/desk/scene.gltf");
