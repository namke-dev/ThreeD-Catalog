import OverlayLayout from "@/components/layouts/OverlayLayout";
import ModelContainer from "@/components/models/ModelContainer";
import { DeskModel } from "@/components/models/showcases/DeskModel";

export default function App() {
  return (
    <div className="App bg-[#ffffff] flex flex-col">
      <div className="w-full h-full">
        <ModelContainer>
          <DeskModel />
        </ModelContainer>
        <OverlayLayout />
      </div>
    </div>
  );
}
