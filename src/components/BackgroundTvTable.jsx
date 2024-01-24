import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function BackgroundTvTable(props) {
  const { nodes } = useGLTF("models/tv-table/scene.gltf");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
          shadows
        >
          <meshStandardMaterial color="white" />{" "}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/tv-table/scene.gltf");
