import Cube from "@/components/Cube";
import { DeskModel } from "@/components/DeskModel";
import ModelContainer from "@/components/ModelContainer";
import { Sofa2 } from "@/components/Sofa2";

export default function App() {
  return (
    <div className="App bg-[#ffffff] flex flex-col">
      <div className="flex flex-grow h-[10vh] w-auto flex-1 bg-red-100"></div>
      <div className="h-[90vh] flex flex-row">
        <div className="w-full">
          <ModelContainer>
            <DeskModel />
            {/* <Sofa2 /> */}
          </ModelContainer>
        </div>
        {/* <div className="w-1/3 h-full bg-blue-200"></div> */}
      </div>
    </div>
  );
}
