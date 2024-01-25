import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
        far: 30,
      }}
    >
      <ambientLight intensity={0.2} color={"blue"} />
      {/* <color attach="background" args={["#c6e5db"]} /> */}
      <color attach="background" args={["#ffffff"]} />

      <Environment preset="city" intensity={0} />
      <CustomCameraControls />
      <CustomBackdrop />

      {children}
    </Canvas>
  );
}
