import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sofa2(props) {
  const { nodes, materials } = useGLTF("/models/sofa2/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.5, -0.5, 1.3]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          shadows
          geometry={nodes.Object_4.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          castShadow
          shadows
          geometry={nodes.Object_5.geometry}
          material={materials.ESTRUTUR}
        />
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
