import { CameraControls, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { CustomBackdrop } from "./Backdrop";

export default function ModelContainer({ children }) {
  return (
    <Canvas
      shadows
      camera={{
        position: [5, 0, 0],
        fov: 35,
        near: 3,
        far: 10,
      }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* <color attach="background" args={["#c6e5db"]} /> */}
      <color attach="background" args={["#eeeeee"]} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.4}
      />
      <CustomBackdrop />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
