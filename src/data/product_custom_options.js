import { DeskModel } from "@/components/models/showcases/DeskModel";
import { Sofa2 } from "@/components/models/showcases/Sofa2";

export const product_custom_options = {
  Color: ["black", "white", "blue", "red", "cream"],
  Material: ["fabric", "wood", "metal"],
  "Background Color": ["white", "blue", "orange", "green", "purple"],
  "Furniture Color": ["white", "blue", "orange", "green", "purple"],
};

export const furniture_category = {
  dinner_table: "Dinner Table",
  office_desk: "Office Desk",
  chair: "Chair",
  sofa: "Sofa",
  storage: "Storage",
  cabinet: "Cabinet",
};

export const list_product_img_url = {
  pro2: "/images/cabinet1.png",
  pro3: "/images/cabinet2.png",
  pro4: "/images/chair1.png",
  pro5: "/images/chair2.png",
  pro6: "/images/cabinet1.png",
  pro7: "/images/cabinet2.png",
  pro8: "/images/chair1.png",
  pro9: "/images/chair2.png",
};

export const LIST_FURNITURE = [
  {
    name: "desk",
    label: "Desk Model",
    img_url: "/images/cabinet1.png",
    component: <DeskModel />,
  },
  {
    name: "sofa",
    label: "Sofa2",
    img_url: "/images/cabinet2.png",
    component: <Sofa2 />,
  },
  {
    name: "chair1",
    label: "Chair",
    img_url: "/images/chair1.png",
    component: <DeskModel />,
  },
  {
    name: "chair2",
    label: "Chair 2",
    img_url: "/images/chair2.png",
    component: <Sofa2 />,
  },

  // ... add other model options
];
