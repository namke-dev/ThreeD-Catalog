import React from "react";
import Plant2 from "./Plant2";
import { Plant1 } from "./Plant1";

export default function BackgroundScene() {
  return (
    <group>
      <Plant2 position={[-1.8, -0.5, 1.5]} />
      <Plant2 position={[-1.9, -0.5, -2.2]} />
      <Plant1
        scale={10}
        position={[-1.9, -0.5, -2.2]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plant1 scale={8} position={[-1.9, -0.5, +2.2]} />
    </group>
  );
}
