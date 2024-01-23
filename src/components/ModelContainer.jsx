import Cube from "@/components/Cube";
import {
  AccumulativeShadows,
  CameraControls,
  Environment,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ModelContainer() {
  return (
    <Canvas
      shadows
      camera={{ position: [30, 0, -3], fov: 35, near: 1, far: 50 }}
    >
      <Environment preset="city" />

      <color attach="background" args={["#c6e5db"]} />
      <CameraControls
        truckSpeed={0}
        dollySpeed={0}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
      <Cube />

      {/** Soft shadows */}
      <AccumulativeShadows
        temporal
        frames={100}
        color="lightblue"
        colorBlend={2}
        opacity={0.7}
        scale={60}
        position={[0, -3.5, 0]}
      >
        <RandomizedLight
          amount={1}
          radius={10}
          ambient={0}
          intensity={4}
          position={[-5, 10, -5]}
          size={30}
        />
      </AccumulativeShadows>
    </Canvas>
  );
}
