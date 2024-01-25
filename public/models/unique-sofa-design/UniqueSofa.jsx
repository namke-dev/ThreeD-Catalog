import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function UniqueSofa(props) {
  const { nodes } = useGLTF("/models/unique-sofa-design/scene.gltf");
  return (
    <group
      {...props}
      dispose={null}
      position={[0.5, -0.5, -0.5]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <group scale={0.005}>
        <group
          position={[-71.585, 56.47, -85.766]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Cube002_Furniture_Fabric_sjfvdgbc_0.geometry}
            shadows
            castShadow
          >
            <meshStandardMaterial color="lightblue" />
          </mesh>
          <mesh
            geometry={nodes.Cube002_Furniture_Fabric_sjfvdgbc_0_1.geometry}
            shadows
            castShadow
          >
            <meshStandardMaterial color="pink" />
          </mesh>
        </group>
        <mesh
          geometry={nodes.Cube004_Material007_0.geometry}
          position={[-107.677, 0, -115.873]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          shadows
          castShadow
        >
          <meshStandardMaterial color="pink" />
        </mesh>
        <mesh
          geometry={nodes.Cube005_Furniture_Fabric_sjfvdgbc_0.geometry}
          position={[-71.585, 56.47, -85.766]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          shadows
          castShadow
        >
          <meshStandardMaterial color="pink" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/unique-sofa-design/scene.gltf");
