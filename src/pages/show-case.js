import ShowcaseLayout from "@/components/layouts/ShowcaseLayout";
import ModelContainer from "@/components/models/ModelContainer";
import { DeskModel } from "@/components/models/showcases/DeskModel";
import { Sofa2 } from "@/components/models/showcases/Sofa2";
import { Leva } from "leva";

export default function Showcase() {
  return (
    <div className="App bg-[#ffffff] flex flex-col select-none">
      <div className="w-full h-full">
        <ShowcaseLayout />
        <div className="cursor-move w-full h-full">
          <ModelContainer>
            {/* <DeskModel /> */}
            <Sofa2 />
          </ModelContainer>
          <Leva collapsed hidden />
        </div>
      </div>
    </div>
  );
}
