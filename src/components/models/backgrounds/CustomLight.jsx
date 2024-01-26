import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sky } from "@react-three/drei";

import { easing } from "maath";
import {
  ambient_light,
  ambient_light_intensity,
  directional_light_intensity,
} from "@/helpers/light-color-helper";

export default function CustomLight() {
  return (
    <>
      <color attach="background" args={["#d0d0d0"]} />
      <fog attach="fog" args={["#d0d0d0", 8, 35]} />
      <ambientLight intensity={0.55} />
      <Light />
      <Sphere scale={0.9} />
      <Sphere position={[2, 4, -8]} scale={0.9} />
      <Sphere position={[-2, 2, -8]} scale={0.8} />
    </>
  );
}

function Sphere({
  color = "hotpink",
  floatIntensity = 15,
  position = [0, 5, -8],
  scale = 1,
}) {
  return (
    <Float floatIntensity={floatIntensity} speed={0.2}>
      <mesh castShadow position={position} scale={scale}>
        <sphereGeometry />
        <meshBasicMaterial color={color} roughness={1} />
      </mesh>
    </Float>
  );
}

function Light() {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      ref.current.rotation,
      [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0],
      0.2,
      delta
    );
  });
  return (
    <group ref={ref}>
      <ambientLight intensity={ambient_light_intensity} color={ambient_light} />
      {/* <Sky inclination={0.52} scale={20} /> */}
      <directionalLight
        position={[5, 5, -8]}
        intensity={directional_light_intensity}
        castShadow
        shadow-mapSize={1024 * 4}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]}
        />
      </directionalLight>
    </group>
  );
}
