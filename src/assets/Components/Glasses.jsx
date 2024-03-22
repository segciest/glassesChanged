import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { glassChanged as updateGlassChanged } from "./../../redux/slice/glasses.js";
// let data = [];
import {
  glassChanged,
  titleChanged,
  infoChanged,
} from "../../redux/slice/glasses";
const Glasses = () => {
  let [data, setData] = useState([]);
  //   Thay đổi dữ liệu qua dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: "GET",
      url: "/src/data/dataGlasses.json",
    })
      .then((res) => {
        console.log(res);
        setData(res["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className=" container grid grid-cols-6 grid-rows-2 gap-5 mt-5">
        {data.map((item, index) => {
          return (
            <button
              onClick={() => {
                dispatch(glassChanged(`${item.id}`));
                dispatch(titleChanged(`${item.name}`));
                dispatch(infoChanged(`${item.desc}`));
              }}
              key={index}
              className=" bg-[#bfdbfe] rounded-2xl px-2 py-1 hover:bg-[#93c5fd]"
            >
              <img src={`/src/data/${item.url}`} alt="" />
              Giá tiền: ${item.price}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Glasses;
