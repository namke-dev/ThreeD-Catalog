import Experience from "@/components/Experience";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <div className="App h-[100vh] w-[100vw]">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}
