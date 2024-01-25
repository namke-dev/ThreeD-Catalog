import React from "react";
import BackgroundPlant2 from "./BackgroundPlant2";
import { BackgroundPlant1 } from "./BackgroundPlant1";
import { BackgroudPlant } from "./BackgroudPlant";
import { BackgroundTvTable } from "./BackgroundTvTable";
import BackgroudTv from "./BackgroundTv";
import { MeshReflectorMaterial } from "@react-three/drei";
import BambooChair from "./Bamboo-chair";
import { ModernLight } from "./ModernLight";
import { EliasChest } from "./EliasChest";
import WallShelve from "./WallShelve";
import { FrameTable } from "./FrameTable";

export default function BackgroundScene() {
  return (
    <group position={[-1.5, 0, 0]}>
      <mesh position={[-3, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 4]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mixBlur={0.5}
          mixStrength={0.3}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#eeeeee"
          metalness={0}
        />
      </mesh>
      <BackgroundPlant1
        scale={8}
        position={[-1.9, -0.5, 1.9]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <BackgroudPlant
        scale={0.25}
        position={[-1.2, -0.5, 2.2]}
        rotation={[0, -Math.PI / 1.7, 0]}
      />{" "}
      <BackgroundPlant2 position={[-1.2, 0.12, 2.2]} scale={0.7} />
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
      <BambooChair position={[0, 0, 2.5]} rotation={[0, Math.PI / 3, 0]} />
      <ModernLight
        position={[-1.32, -0.5, -2]}
        rotation={[0, -Math.PI / 1.5, 0]}
      />
      <EliasChest
        position={[-1.8, -0.5, -1.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <WallShelve position={[-2.6, 1, 2]} rotation={[0, Math.PI / 2, 0]} />
      <FrameTable position={[-2, -0.5, -2.7]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}
