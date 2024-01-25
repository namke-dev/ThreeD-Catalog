import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModernLight(props) {
  const { nodes } = useGLTF("/models/modern-light/scene.gltf");
  return (
    <group {...props} dispose={null} scale={0.01}>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh geometry={nodes.Lamp_Base.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh geometry={nodes.Lamp_Head.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/modern-light/scene.gltf");
