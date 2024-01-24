import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function DeskModel(props) {
  const { nodes } = useGLTF("/models/desk/scene.gltf");

  const textureLegsProps = useTexture({
    map: "/models/desk/textures/ESTRUTUR_diffuse.jpeg",
  });

  const textureTopProps = useTexture({
    map: "/models/desk/textures/ACABAMEN_diffuse.jpeg",
  });

  textureTopProps.map.repeat.set(2, 2);
  textureTopProps.map.wrapS = textureTopProps.map.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.5, -0.5, 1.3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh castShadow shadows geometry={nodes.Object_7.geometry}>
          <meshStandardMaterial {...textureTopProps} />
        </mesh>
        <mesh castShadow shadows geometry={nodes.Object_5.geometry}>
          <meshStandardMaterial {...textureLegsProps} />
        </mesh>
        <mesh castShadow shadows geometry={nodes.Object_6.geometry}>
          <meshStandardMaterial {...textureLegsProps} />
        </mesh>
      </group>
      {/* <group>
        <mesh castShadow shadows>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color="orange" />
        </mesh>
      </group> */}
    </group>
  );
}

useGLTF.preload("/models/desk/scene.gltf");
