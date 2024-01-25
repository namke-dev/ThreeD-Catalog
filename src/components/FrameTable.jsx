import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FrameTable(props) {
  const { nodes, materials } = useGLTF("/models/frame-table/scene.gltf");
  return (
    <group {...props} dispose={null} scale={0.012}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.wire_225088199}
        position={[0, 19, 0]}
        scale={49.166}
      >
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/frame-table/scene.gltf");
