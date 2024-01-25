import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function EliasChest(props) {
  const { nodes, materials } = useGLTF("/models/elias-chest/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.WHITE.geometry}
          material={materials.WHITE}
          shadows
          castShadow
        >
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.STEEL.geometry} shadows castShadow>
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.PINE.geometry} shadows castShadow>
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/elias-chest/scene.gltf");
