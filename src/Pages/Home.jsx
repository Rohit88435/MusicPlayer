import React, { useContext, useEffect, useState } from "react";
import Nav from "../Component/Nav";
import { songsData } from "../songs";
import musicImg from "../assets/musicanim.webp";
import { GiPreviousButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { dataContext } from "../Context/UserContext";
import { FaPause } from "react-icons/fa6";
import { useRef } from "react";
import Card from "../Component/Card";
import { IoIosArrowDown } from "react-icons/io";
import Player from "../Component/player";

function Home() {
  let [arrow, setArrow] = useState(false);

  let {
    audioRef,
    playSong,
    pauseSong,
    index,
    setIndex,
    playing,
    nextSong,
    previousSong,
    setPlaying,
  } = useContext(dataContext);

  let [range, setRange] = useState(0);

  let progress = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;

      let progressPercentage = (currentTime / duration) * 100 || 0;
      setRange(progressPercentage);
      if (progress.current) {
        progress.current.style.width = `${progressPercentage}%`;
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
  });
  function handleRange(e) {
    let newRange = e.target.value;
    setRange(newRange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newRange) / 100;
  }
  return (
    <div className="w-full h-screen bg-black relative flex">
      <IoIosArrowDown
        className="absolute text-white top-[20px]  cursor-pointer left-[10%] text-[30px] md:hidden"
        onClick={() => {
          setArrow((prev) => !prev);
        }}
      />

      {!arrow ? (
        <>
          <div className=" w-full md:w-[50%]  h-full   flex justify-start flex-col items-center p-[20px] md:pt-[120px] gap-5">
            <h1 className="text-white font-semibold text-[20px]">
              Now Playing
            </h1>
            <div className=" w-[80%] max-w-[250px] h-[240px] object-fill rounded-md overflow-hidden relative  ">
              <img
                src={songsData[index].image}
                alt=""
                className="w-[100%] h-[100%]"
              />
              {playing ? (
                <div className="w-full h-full bg-black absolute top-0 opacity-[0.5]  flex justify-center items-center  ">
                  <img src={musicImg} alt="" className="w-[50%]" />
                </div>
              ) : null}
            </div>
            <div>
              <div className="text-white text-[30px] font-semibold">
                {songsData[index].name}
              </div>
              <div className="text-slate-500 text-[18px] text-center  font-semibold">
                {songsData[index].singer}
              </div>
            </div>
            <div className="w-[50%] flex justify-center relative items-center">
              <input
                type="range"
                name=""
                id="range"
                value={range}
                className=" w-[100%] appearance-none  h-[7px] rounded-md overflow cursor-pointer bg-gray-600 "
                onClick={handleRange}
              />
              <div
                className={`bg-white  h-[100%] absolute left-0 rounded-md `}
                ref={progress}
              ></div>
            </div>
            <div className=" text-white flex justify-around items-center gap-7">
              <GiPreviousButton
                className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 "
                onClick={() => {
                  previousSong();
                }}
              />
              {!playing ? (
                <div
                  className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center shadow-2xl hover:bg-gray-400 transition-all cursor-pointer "
                  onClick={() => {
                    playSong();
                  }}
                >
                  <FaPlay className="w-[20px] h-[20px] text-center text-black" />
                </div>
              ) : (
                <div
                  className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center shadow-2xl hover:bg-gray-400 transition-all cursor-pointer"
                  onClick={() => {
                    pauseSong();
                  }}
                >
                  <FaPause className="w-[22px] h-[22px] text-center text-black" />
                </div>
              )}

              <GiNextButton
                className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400"
                onClick={() => {
                  nextSong();
                }}
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] h-full relative hidden   items-center md:flex  gap-4 overflow-auto flex-col pt-[70px] pb-[180px] ">
            {songsData.map((item) => (
              <Card
                name={item.name}
                image={item.image}
                singer={item.singer}
                songIndex={item.id - 1}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="w-[100%] md:w-[50%] h-full relative   items-center flex  gap-4 overflow-auto flex-col pt-[70px] pb-[180px] ">
          <Player />
          {songsData.map((item) => (
            <Card
              name={item.name}
              image={item.image}
              singer={item.singer}
              songIndex={item.id - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
