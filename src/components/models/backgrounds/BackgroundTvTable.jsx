import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { furniture_color } from "@/helpers/light-color-helper";

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
          receiveShadow
        >
          <meshStandardMaterial color={furniture_color} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/tv-table/scene.gltf");
