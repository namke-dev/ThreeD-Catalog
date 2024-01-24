import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DeskModel(props) {
  const { nodes, materials } = useGLTF("/models/desk/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.5, -0.5, 1.3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          shadows
          geometry={nodes.Object_7.geometry}
          material={materials.ACABAMEN}
        />
        <mesh
          castShadow
          shadows
          geometry={nodes.Object_5.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          castShadow
          shadows
          geometry={nodes.Object_6.geometry}
          material={materials.Foregrou}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/desk/scene.gltf");
