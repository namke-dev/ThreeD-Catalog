import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Sofa2(props) {
  const { nodes, materials } = useGLTF("/models/sofa2/scene.gltf");
  const textureProps = useTexture({
    map: "/models/sofa2/textures/ESTRUTUR_diffuse.jpeg",
  });
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.5, -0.5, 1.3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh castShadow shadows geometry={nodes.Object_4.geometry}>
          <meshStandardMaterial {...textureProps} />
        </mesh>
        <mesh castShadow shadows geometry={nodes.Object_5.geometry}>
          <meshStandardMaterial {...textureProps} />
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

useGLTF.preload("/models/sofa2/scene.gltf");
