import React from "react";
import BackgroundPlant2 from "./BackgroundPlant2";
import { BackgroundPlant1 } from "./BackgroundPlant1";
import { BackgroudTableAndChair } from "./BackgroudTableAndChair";
import { BackgroundTvTable } from "./BackgroundTvTable";
import BackgroudTv from "./BackgroundTv";
import { MeshTransmissionMaterial } from "@react-three/drei";
import BambooChair from "./Bamboo-chair";
import { ModernLight } from "./ModernLight";

export default function BackgroundScene() {
  return (
    <group position={[-1.5, 0, 0]}>
      <BackgroundPlant2 position={[-1.9, -0.5, -2.5]} />
      <BackgroundPlant1
        scale={10}
        position={[-0.5, -0.5, 3.3]}
        rotation={[0, Math.PI / 9, 0]}
      />
      <BackgroundPlant1 scale={8} position={[-1.9, -0.5, 2.2]} />
      <BackgroudTableAndChair
        scale={0.25}
        position={[-0.8, -0.5, 2.6]}
        rotation={[0, -Math.PI / 1.7, 0]}
      />
      <BackgroundPlant2 position={[-0.8, 0.12, 2.6]} scale={0.7} />
      <BackgroundTvTable
        scale={0.6}
        position={[-2, -0.15, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <BackgroudTv
        scale={1.2}
        position={[-2, 0.22, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <BambooChair
        position={[-0.7, 0.1, -2.2]}
        rotation={[0, -Math.PI / 5, 0]}
      />
      <ModernLight
        position={[-1.8, -0.5, -1.4]}
        rotation={[0, -Math.PI / 1.5, 0]}
      />
      <mesh position={[-3, 1.5, 0]}>
        <boxGeometry args={[0.1, 4, 8]} />
        <MeshTransmissionMaterial color={"lightblue"} />
      </mesh>
    </group>
  );
}
