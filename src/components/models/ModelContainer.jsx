import { Canvas } from "@react-three/fiber";
import BackgroundScene from "@/components/models/BackgroundScene";
import { Float } from "@react-three/drei";
import CustomCameraControls from "./CustomCameraControl";
import { page_background, room_area } from "@/helpers/light-color-helper";

import BackgroundRoom from "@/components/models/BackgroundRoom";
import Windows from "@/components/models/Windows";
import { CustomBackdrop } from "./Backdrop";

export default function ModelContainer({ children }) {
  return (
    <Canvas
      shadows
      camera={{
        position: [5, 1.5, 0],
        fov: 35,
        near: 3,
        far: room_area * 1.42,
      }}
    >
      <color attach="background" args={[page_background]} />
      <CustomCameraControls />
      {/* <CustomBackdrop /> */}
      <BackgroundScene />
      <BackgroundRoom />
      <Windows />
      <Float
        rotationIntensity={0.2}
        floatIntensity={0.5}
        speed={5}
        position={[0, 0.3, 0]}
      >
        {children}
      </Float>
    </Canvas>
  );
}
