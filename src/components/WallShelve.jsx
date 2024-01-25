import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WallShelve(props) {
  const { nodes } = useGLTF("/models/wall-shelve/scene.gltf");
  return (
    <group {...props} dispose={null} scale={0.012}>
      <mesh
        geometry={nodes.Object_6.geometry}
        position={[0, 19, 0]}
        scale={49.166}
      >
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/wall-shelve/scene.gltf");
