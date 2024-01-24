import Cube from "@/components/Cube";
import { DeskModel } from "@/components/DeskModel";
import ModelContainer from "@/components/ModelContainer";
import { Sofa2 } from "@/components/Sofa2";

export default function App() {
  return (
    <div className="App bg-[#ffffff] flex flex-col">
      <div className="flex flex-grow h-1/4 w-auto flex-1 bg-red-100"></div>
      <div className="h-3/4 flex flex-row">
        <div className="w-2/3">
          <ModelContainer>
            {/* <Cube /> */}
            {/* <DeskModel /> */}
            <Sofa2 />
          </ModelContainer>
        </div>
        <div className="w-1/3 h-full bg-blue-200"></div>
      </div>
    </div>
  );
}
