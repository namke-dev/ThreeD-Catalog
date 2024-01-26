import OverlayLayout from "@/components/layouts/OverlayLayout";
import { DeskModel } from "@/components/models/DeskModel";
import ModelContainer from "@/components/models/ModelContainer";

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
