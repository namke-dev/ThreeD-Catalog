import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CustomBackdrop } from "./Backdrop";
import CustomCameraControls from "./CustomCameraControl";

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
      <Environment preset="city" />
      {/* <color attach="background" args={["#c6e5db"]} /> */}
      <color attach="background" args={["#e0e0e0"]} />

      <CustomCameraControls />
      <CustomBackdrop />
      <ambientLight intensity={0.1} color={"pink"} />
      {children}
    </Canvas>
  );
}
