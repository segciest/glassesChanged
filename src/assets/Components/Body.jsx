import React from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const { glass, title, info } = useSelector((state) => state.glasses);
  return (
    <div className="flex justify-evenly mt-16 relative">
      <div className="border-2 relative">
        <img className="h-96" src="./src/data/glassesImage/model.jpg" alt="" />
        <span className="absolute top-[19%] left-0 scale-50">
          <img
            className="opacity-40"
            src={`/src/data/glassesImage/v${glass}.png`}
            alt=""
          />
        </span>
        <div className="absolute bottom-0 left-0 px-3 bg-[#6ee7b7]">
          <h3 className="font-bold text-[#f43f5e]">{title}</h3>
          <p>{info}</p>
        </div>
      </div>
      <div className="border-2">
        <img className="h-96" src="./src/data/glassesImage/model.jpg" alt="" />
      </div>
    </div>
  );
};

export default Body;
