import { OrbitControls } from "@react-three/drei";
import React from "react";

export default function CustomCameraControls() {
  const minDistance = 5;
  const maxDistance = 8;
  return (
    <OrbitControls
      makeDefault
      enablePan={false}
      enableZoom={true}
      zoomSpeed={0.3}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2.3}
      minAzimuthAngle={Math.PI / 6}
      maxAzimuthAngle={Math.PI / 1.3}
      rotateSpeed={0.3}
    />
  );
}
