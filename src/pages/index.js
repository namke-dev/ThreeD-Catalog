import { DeskModel } from "@/components/DeskModel";
import ModelContainer from "@/components/ModelContainer";
import BackgroundScene from "@/components/BackgroundScene";
import { UniqueSofa } from "../../public/models/unique-sofa-design/UniqueSofa";
import { Sofa2 } from "@/components/Sofa2";
import { Float } from "@react-three/drei";

export default function App() {
  return (
    <div className="App bg-[#ffffff] flex flex-col">
      {/* <div className="flex flex-grow h-[10vh] w-auto flex-1 bg-red-100"></div>
      <div className="h-[90vh] flex flex-row"> */}
      <div className="w-full h-full">
        <ModelContainer>
          <BackgroundScene />
          <Float
            rotationIntensity={0.2}
            floatIntensity={0.3}
            speed={5}
            position={[0, 0.3, 0]}
          >
            {/* <Sofa2 /> */}
            <DeskModel />
            {/* <UniqueSofa /> */}
          </Float>
        </ModelContainer>
      </div>
      {/* <div className="w-1/3 h-full bg-blue-200"></div> */}
    </div>
    // </div>
  );
}
