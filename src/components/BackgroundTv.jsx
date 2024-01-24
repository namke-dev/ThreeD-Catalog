import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BackgroudTv(props) {
  const { nodes } = useGLTF("models/tv/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.225}>
        <mesh geometry={nodes.Tv1_0.geometry} castShadow shadows>
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.Tv1_1.geometry} castShadow shadows>
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh geometry={nodes.Tv1_2.geometry} castShadow shadows>
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/tv/scene.gltf");