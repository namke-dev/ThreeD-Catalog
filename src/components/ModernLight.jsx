import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModernLight(props) {
  const { nodes, materials } = useGLTF("/models/modern-light/scene.gltf");
  return (
    <group {...props} dispose={null} scale={0.01}>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.wire_027177027}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Lamp_Base.geometry}
        material={materials.wire_000000000}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Lamp_Head.geometry}
        material={materials.wire_027177027}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/modern-light/scene.gltf");
