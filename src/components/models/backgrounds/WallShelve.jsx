import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { furniture_color } from "@/helpers/light-color-helper";

export default function WallShelve(props) {
  const { nodes } = useGLTF("/models/wall-shelve/scene.gltf");
  return (
    <group {...props} dispose={null} scale={0.012}>
      <mesh
        geometry={nodes.Object_6.geometry}
        position={[0, 19, 0]}
        scale={49.166}
        castShadow
        shadows
        receiveShadow
      >
        <meshStandardMaterial color={furniture_color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/wall-shelve/scene.gltf");
