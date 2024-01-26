import React from "react";
import BackgroundPlant2 from "./BackgroundPlant2";
import { BackgroundPlant1 } from "./BackgroundPlant1";
import { BackgroudPlantTable } from "./BackgroundPlantTable";
import { BackgroundTvTable } from "./BackgroundTvTable";
import BackgroudTv from "./BackgroundTv";
import BambooChair from "./Bamboo-chair";
import { ModernLight } from "./ModernLight";
import { EliasChest } from "./EliasChest";
import WallShelve from "./WallShelve";
import { FrameTable } from "./FrameTable";

export default function BackgroundScene() {
  return (
    <group position={[-1.5, 0, 0]}>
      <BackgroundPlant1
        scale={8}
        position={[-1.9, -0.5, 1.9]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <BackgroudPlantTable
        scale={0.25}
        position={[-1.2, -0.5, 2.8]}
        rotation={[0, -Math.PI / 1.5, 0]}
      />
      <BackgroundPlant2 position={[-1.2, 0.12, 2.8]} scale={0.6} />
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
      <BambooChair position={[-0.1, 0, -2.6]} rotation={[0, -Math.PI / 4, 0]} />
      <ModernLight
        position={[-1, -0.5, -2]}
        rotation={[0, -Math.PI / 1.5, 0]}
      />
      <EliasChest
        position={[-1.8, -0.5, -1.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <WallShelve position={[-2.6, 0.8, 2]} rotation={[0, Math.PI / 2, 0]} />
      <FrameTable position={[-2, -0.5, -3]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}
