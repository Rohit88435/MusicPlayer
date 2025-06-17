import React from "react";
import Player from "../Component/player";
import { useSelector } from "react-redux";
import Card from "../Component/Card";

function Liked() {
  let songs = useSelector((state) => state.like);
  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-start items-center  pt-[20px] gap-4 flex-col md:pt-[100px]">
      <Player />

      {!songs.length < 1 ? (
        <>
          <h1 className="text-white text-[25px] font-semibold">Liked Songs</h1>
          <div className="w-[100%] md:w-[90%]  h-[75%] md:h-[90%] flex flex-col justify-start p-[10px] overflow-auto items-center gap-5">
            {songs.map((song) => (
              <Card
                name={song.name}
                image={song.image}
                singer={song.singer}
                songIndex={song.songIndex}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full text-[30px] text-gray-500 font-semibold">
          No Liked Songs
        </div>
      )}
    </div>
  );
}

export default Liked;
