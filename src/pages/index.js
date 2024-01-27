import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/layouts/Navbar";
import Showcase from "./show-case";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Showcase />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </BrowserRouter>
  );
}
