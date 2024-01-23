import Experience from "@/components/Experience";
import {
  AccumulativeShadows,
  CameraControls,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function App() {
  return (
    <div className="App h-[100vh] w-[100vw]">
      <Canvas
        shadows
        camera={{ position: [30, 0, -3], fov: 35, near: 1, far: 50 }}
      >
        <color attach="background" args={["#c6e5db"]} />
        <CameraControls
          truckSpeed={0}
          dollySpeed={0}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        <Experience />
        {/** Soft shadows */}
        <AccumulativeShadows
          temporal
          frames={100}
          color="lightblue"
          colorBlend={2}
          opacity={0.7}
          scale={60}
          position={[0, -5, 0]}
        >
          <RandomizedLight
            amount={4}
            radius={15}
            ambient={0.5}
            intensity={4}
            position={[-5, 10, -5]}
            size={20}
          />
        </AccumulativeShadows>
      </Canvas>
    </div>
  );
}
