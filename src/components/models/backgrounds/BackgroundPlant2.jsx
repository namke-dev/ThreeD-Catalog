import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { furniture_color } from "@/helpers/light-color-helper";

export default function BackgroundPlant2(props) {
  const { nodes } = useGLTF("models/plant2/indoor plant_02.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0.781, -Math.PI]}>
        <group scale={0.2}>
          <mesh
            geometry={nodes.indoor_plant_02_1.geometry}
            castShadow
            shadows
            receiveShadow
          >
            <meshStandardMaterial color={furniture_color} />
          </mesh>
          <mesh
            geometry={nodes.indoor_plant_02_2.geometry}
            castShadow
            shadows
            receiveShadow
          >
            <meshStandardMaterial color={furniture_color} />
          </mesh>
          <mesh
            geometry={nodes.indoor_plant_02_3.geometry}
            castShadow
            shadows
            receiveShadow
          >
            <meshStandardMaterial color={furniture_color} />
          </mesh>
          <mesh
            geometry={nodes.indoor_plant_02_4.geometry}
            castShadow
            shadows
            receiveShadow
          >
            <meshStandardMaterial color={furniture_color} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/plant2/indoor plant_02.gltf");
