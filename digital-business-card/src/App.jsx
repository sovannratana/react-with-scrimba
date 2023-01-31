import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Image from "./components/Image";

function App() {
  return (
    <div className="app bg-[#23252C] mx-auto">
      <Image />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
