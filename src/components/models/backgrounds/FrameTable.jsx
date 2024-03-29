import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { furniture_color } from "@/helpers/light-color-helper";

export function FrameTable(props) {
  const { nodes } = useGLTF("/models/frame-table/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group position={[0, 0, 90]}>
          <group position={[0, -16.617, 83.591]}>
            <mesh
              geometry={nodes.STEEL.geometry}
              castShadow
              shadows
              receiveShadow
            >
              <meshStandardMaterial color={furniture_color} />
            </mesh>
            <mesh
              geometry={nodes.STEEL_BLACK.geometry}
              castShadow
              shadows
              receiveShadow
            >
              <meshStandardMaterial color={furniture_color} />
            </mesh>
            <mesh
              geometry={nodes.OAK.geometry}
              castShadow
              shadows
              receiveShadow
            >
              <meshStandardMaterial color={furniture_color} />
            </mesh>
            <mesh
              geometry={nodes.WALNUT.geometry}
              castShadow
              shadows
              receiveShadow
            >
              <meshStandardMaterial color={furniture_color} />
            </mesh>
          </group>
        </group>
        <mesh position={[0, -15, 0]} castShadow shadows receiveShadow>
          <boxGeometry args={[94, 40, 2]} />
          <meshStandardMaterial color={furniture_color} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/frame-table/scene.gltf");
