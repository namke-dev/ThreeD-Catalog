/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 indoor plant_02.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function IndoorPlant(props) {
  const { nodes, materials } = useGLTF("models/plant2/indoor plant_02.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0.781, -Math.PI]}>
        <group scale={0.2}>
          <mesh
            geometry={nodes.indoor_plant_02_1.geometry}
            material={materials.IDP_root}
            castShadow
            shadows
          />
          <mesh
            geometry={nodes.indoor_plant_02_2.geometry}
            material={materials.IDP_ground}
            castShadow
            shadows
          />
          <mesh
            geometry={nodes.indoor_plant_02_3.geometry}
            material={materials.IDP_leaves}
            castShadow
            shadows
          />
          <mesh
            geometry={nodes.indoor_plant_02_4.geometry}
            material={materials.IDP_Pot}
            castShadow
            shadows
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/plant2/indoor plant_02.gltf");
