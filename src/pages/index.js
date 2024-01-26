import OverlayLayout from "@/components/layouts/OverlayLayout";
import ModelContainer from "@/components/models/ModelContainer";
import { DeskModel } from "@/components/models/showcases/DeskModel";
import { Sofa2 } from "@/components/models/showcases/Sofa2";

export default function App() {
  return (
    <div className="App bg-[#ffffff] flex flex-col select-none">
      <div className="w-full h-full">
        <div className="cursor-move w-full h-full">
          <ModelContainer>
            <DeskModel />
            {/* <Sofa2 /> */}
          </ModelContainer>
        </div>
        <OverlayLayout />
      </div>
    </div>
  );
}
