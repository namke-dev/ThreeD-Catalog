import { Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CustomBackdrop } from "./Backdrop";
import CustomCameraControls from "./CustomCameraControl";
import {
  ambient_light,
  ambient_light_intensity,
  page_background,
  room_area,
} from "@/helpers/light-color-helper";

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

      {children}
    </Canvas>
  );
}
