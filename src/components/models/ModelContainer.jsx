import { Canvas } from "@react-three/fiber";
import BackgroundScene from "@/components/models/BackgroundScene";
import { Float } from "@react-three/drei";
import CustomCameraControls from "./CustomCameraControl";
import { page_background, room_area } from "@/helpers/light-color-helper";

import BackgroundRoom from "@/components/models/backgrounds/BackgroundRoom";
import CustomLight from "@/components/models/backgrounds/CustomLight";

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
      {/* Setup */}
      <color attach="background" args={[page_background]} />
      <CustomCameraControls />

      <BackgroundScene />
      <CustomLight />

      {/* Model */}
      <BackgroundRoom />
      <Float
        rotationIntensity={0.2}
        floatIntensity={0.5}
        speed={5}
        position={[0, 0.1, 0]}
      >
        {children}
      </Float>
    </Canvas>
  );
}
