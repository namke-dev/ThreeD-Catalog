import React, { useState } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, SoftShadows } from "@react-three/drei";
import { easing } from "maath";

import {
  ambient_light,
  ambient_light_intensity,
  directional_light_intensity,
} from "@/helpers/light-color-helper";

import { useControls } from "leva";

export default function CustomLight() {
  const { impl, soft_shadow, samples, ...config } = useControls({
    soft_shadow: true,
    size: { value: 25, min: 0, max: 100, step: 0.1 },
    focus: { value: 1, min: 0, max: 2, step: 0.1 },
    samples: { value: 6, min: 6, max: 40, step: 1 },
  });
  return (
    <>
      <color attach="background" args={["#d0d0d0"]} />
      <fog attach="fog" args={["#d0d0d0", 8, 35]} />
      <ambientLight intensity={0.55} />
      <Light />
      {soft_shadow && <SoftShadows {...config} samples={samples} />}

      <Sphere scale={0.45} position={[0, 5, -7]} />
      <Sphere position={[2, 4, -7]} scale={0.45} />
      <Sphere position={[-2, 2, -6]} scale={0.4} />
    </>
  );
}

function Sphere({
  color = "lightblue",
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
