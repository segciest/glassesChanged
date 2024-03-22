import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Components/Header";
import Body from "./assets/Components/Body";
import Glasses from "./assets/Components/Glasses";
// import background from "./../public/image/glassesImage/background.jpg";

function App() {
  return (
    <>
      <div className="overlay h-full w-full bg-slate-400">
        <div
          className="bg-gray-500 h-screen w-full"
          style={{
            backgroundImage: 'url("./src/data/glassesImage/background.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Header />
          <Body />
          <Glasses />
        </div>
      </div>
    </>
  );
}

export default App;
