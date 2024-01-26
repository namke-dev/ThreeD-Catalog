import { DeskModel } from "@/components/models/DeskModel";
import ModelContainer from "@/components/models/ModelContainer";
import BackgroundScene from "@/components/models/BackgroundScene";
import { UniqueSofa } from "../../public/models/unique-sofa-design/UniqueSofa";
import { Sofa2 } from "@/components/models/Sofa2";
import { Float } from "@react-three/drei";
import BackgroundRoom from "@/components/models/BackgroundRoom";
import OverlayLayout from "@/components/layouts/OverlayLayout";
import Windows from "@/components/models/Windows";

export default function App() {
  return (
    <div className="App bg-[#ffffff] flex flex-col">
      <div className="w-full h-full">
        <ModelContainer>
          <BackgroundScene />
          <BackgroundRoom />
          <Windows />
          <Float
            rotationIntensity={0.2}
            floatIntensity={0.5}
            speed={5}
            position={[0, 0.3, 0]}
          >
            <DeskModel />
          </Float>
        </ModelContainer>
        <OverlayLayout />
      </div>
    </div>
  );
}
