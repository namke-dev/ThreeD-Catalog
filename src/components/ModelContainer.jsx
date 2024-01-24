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
        enableZoom={flase}
        makeDefault
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.3}
        minAzimuthAngle={Math.PI / 6}
        maxAzimuthAngle={Math.PI / 1.3}
        rotateSpeed={0.3}
      />
      <CustomBackdrop />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
