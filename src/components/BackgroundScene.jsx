import React from "react";
import IndoorPlant from "./IndoorPlant";

export default function BackgroundScene() {
  return (
    <group>
      <IndoorPlant position={[-1.8, -0.5, 2.5]} />
      <IndoorPlant position={[-1.9, -0.5, -2.2]} />
    </group>
  );
}
