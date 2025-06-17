import React, { useContext } from "react";
import { dataContext } from "../Context/UserContext";
import { songsData } from "../songs";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

function Player() {
  let { index, setIndex, playSong, playing, pauseSong } =
    useContext(dataContext);

  return (
    <div className="w-[100%] md:w-[60%] h-[90px] fixed flex bottom-[55px] md:bottom-0 rounded-t-[30px] shadow-lg bg-white md:items-center ">
      <div className=" flex justify-start cursor-pointer items-start gap-[20px] w-[80%] h-[100%] pl-[30px] pt-[10px]">
        <div>
          <img
            src={songsData[index].image}
            alt=""
            className="w-[60px] max-h-[60px] md:w-[100px] md:max-h-[80px] rounded-lg"
          />
        </div>
        <div className="  text-[15px] md:text-[20px]">
          <div className="text-black text-[1.1em] font-semibold ">
            {songsData[index].name}
          </div>
          <div className="text-gray-800 text-[0.7em] font-semibold ">
            {songsData[index].singer}
          </div>
        </div>
      </div>
      <div className="w-[20%] h-[100%] md:flex justify-center items-center pt-[10px] md:pt-0">
        {!playing ? (
          <div
            className="w-[50px] h-[50px] rounded-full bg-gray-800 flex justify-center items-center shadow-2xl hover:bg-gray-400 transition-all cursor-pointer "
            onClick={() => {
              playSong();
            }}
          >
            <FaPlay className="w-[20px] h-[20px] text-center text-white" />
          </div>
        ) : (
          <div
            className="w-[50px] h-[50px] rounded-full bg-gray-800 flex justify-center items-center shadow-2xl hover:bg-gray-400 transition-all cursor-pointer"
            onClick={() => {
              pauseSong();
            }}
          >
            <FaPause className="w-[22px] h-[22px] text-center text-white" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Player;
