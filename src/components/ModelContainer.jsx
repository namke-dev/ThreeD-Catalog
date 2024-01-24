import { CameraControls, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { CustomBackdrop } from "./Backdrop";
import CustomCameraControls from "./CustomCameraControl";

export default function ModelContainer({ children }) {
  return (
    <Canvas
      shadows
      camera={{
        position: [6, 0, 0],
        fov: 35,
        near: 3,
        far: 10,
      }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* <color attach="background" args={["#c6e5db"]} /> */}
      <color attach="background" args={["#eeeeee"]} />
      <CustomCameraControls />
      <CustomBackdrop />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
