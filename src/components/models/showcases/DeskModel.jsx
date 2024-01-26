import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function DeskModel(props) {
  const { nodes } = useGLTF("/models/desk/scene.gltf");

  const textureLegsProps = useTexture({
    map: "/models/desk/textures/ESTRUTUR_diffuse.jpeg",
  });

  const textureTopProps = useTexture({
    map: "/models/desk/textures/ACABAMEN_diffuse.jpeg",
  });
  // textureTopProps.map.wrapS = THREE.RepeatWrapping;
  // textureTopProps.map.wrapT = THREE.RepeatWrapping;
  // textureTopProps.map.repeat.set(2, 2);

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
          geometry={nodes.Object_7.geometry}
        >
          <meshStandardMaterial {...textureTopProps} />
        </mesh>
        <mesh
          castShadow
          shadows
          receiveShadow
          geometry={nodes.Object_5.geometry}
        >
          <meshStandardMaterial {...textureLegsProps} />
        </mesh>
        <mesh
          castShadow
          shadows
          receiveShadow
          geometry={nodes.Object_6.geometry}
        >
          <meshStandardMaterial {...textureLegsProps} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/desk/scene.gltf");
