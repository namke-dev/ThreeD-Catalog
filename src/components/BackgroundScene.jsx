import React from "react";
import BackgroundPlant2 from "./BackgroundPlant2";
import { BackgroundPlant1 } from "./BackgroundPlant1";
import { BackgroudTableAndChair } from "./BackgroudTableAndChair";
import { BackgroundTvTable } from "./BackgroundTvTable";
import BackgroudTv from "./BackgroundTv";
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function BackgroundScene() {
  return (
    <group>
      <BackgroundPlant2 position={[-1.8, -0.5, 1.5]} />
      <BackgroundPlant2 position={[-1.9, -0.5, -2.2]} />
      <BackgroundPlant1
        scale={10}
        position={[-1.9, -0.5, -2.2]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <BackgroundPlant1 scale={8} position={[-1.9, -0.5, +2.2]} />
      <BackgroudTableAndChair
        scale={0.25}
        position={[-0.8, -0.5, 2.6]}
        rotation={[0, -Math.PI / 1.7, 0]}
      />
      <BackgroundPlant2 position={[-0.8, 0.12, 2.6]} scale={0.7} />
      <BackgroundTvTable
        scale={0.5}
        position={[-2.6, -0.2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <BackgroudTv
        scale={1}
        position={[-2.6, 0.1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh position={[-3.5, 1.5, 0]}>
        <boxGeometry args={[0.1, 4, 20]} />
        <MeshTransmissionMaterial color={"lightblue"} />
      </mesh>
    </group>
  );
}
