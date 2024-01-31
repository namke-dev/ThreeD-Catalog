import Navbar from "@/components/layouts/Navbar";
import ShowcaseLayout from "@/components/layouts/ShowcaseLayout";
import ModelContainer from "@/components/models/ModelContainer";
import { DeskModel } from "@/components/models/showcases/DeskModel";
import { Leva } from "leva";

export default function Showcase() {
  return (
    <div className="App bg-[#ffffff] flex flex-col select-none">
      <div className="w-full h-full">
        <div className="cursor-move w-full h-full">
          <Navbar />
          <ModelContainer>
            <DeskModel />
          </ModelContainer>
          <Leva collapsed hidden />
        </div>
        <ShowcaseLayout />
      </div>
    </div>
  );
}
