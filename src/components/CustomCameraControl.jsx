import { OrbitControls } from "@react-three/drei";
import React from "react";

export default function CustomCameraControls() {
  const minDistance = 4.2;
  const maxDistance = 6;
  return (
    <OrbitControls
      makeDefault
      enablePan={false}
      enableZoom={true}
      zoomSpeed={0.3}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2.53}
      minAzimuthAngle={Math.PI / 6}
      maxAzimuthAngle={Math.PI / 1.3}
      rotateSpeed={0.3}
    />
  );
}
