import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Sofa2(props) {
  const { nodes } = useGLTF("/models/sofa2/scene.gltf");

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.5, -0.5, 1.3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          shadows
          receiveShadow
          geometry={nodes.Object_4.geometry}
        >
          <meshPhysicalMaterial color={"#497285"} />
        </mesh>
        <mesh
          castShadow
          shadows
          receiveShadow
          geometry={nodes.Object_5.geometry}
        >
          <meshPhysicalMaterial color={"#497285"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/sofa2/scene.gltf");
