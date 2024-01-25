import { Environment, MeshReflectorMaterial } from "@react-three/drei";
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
      <color attach="background" args={["#eeeeee"]} />
      <ambientLight intensity={0.2} color={"#c6e5db"} />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[9, 9]} />
        <meshPhysicalMaterial color={"#c6e5db"} />
      </mesh> */}
      {/* <color attach="background" args={["#c6e5db"]} /> */}
      <Environment preset="city" intensity={0} />
      <CustomCameraControls />
      <CustomBackdrop />

      {children}
    </Canvas>
  );
}
