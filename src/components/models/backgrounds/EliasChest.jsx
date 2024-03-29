import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { furniture_color } from "@/helpers/light-color-helper";

export function EliasChest(props) {
  const { nodes } = useGLTF("/models/elias-chest/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.WHITE.geometry} shadows castShadow receiveShadow>
          <meshStandardMaterial color={furniture_color} />
        </mesh>
        <mesh geometry={nodes.STEEL.geometry} shadows castShadow receiveShadow>
          <meshStandardMaterial color={furniture_color} />
        </mesh>
        <mesh geometry={nodes.PINE.geometry} shadows castShadow receiveShadow>
          <meshStandardMaterial color={furniture_color} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/elias-chest/scene.gltf");
