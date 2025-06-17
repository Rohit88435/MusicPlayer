import React from "react";
import Player from "../Component/player";
import { useSelector } from "react-redux";
import Card from "../Component/Card";

function PlayList() {
  let song = useSelector((state) => state.playlist);

  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-start items-center  pt-[20px] gap-4 flex-col md:pt-[100px]">
      <Player />
      {!song.length < 1 ? (
        <>
          <h1 className="text-white text-[25px] font-semibold">Playlist</h1>
          <div className="w-[100%] md:w-[90%]  h-[75%] md:h-[90%] flex flex-col justify-start p-[10px] overflow-auto items-center gap-5">
            {song.map((songs) => (
              <Card
                name={songs.name}
                image={songs.image}
                singer={songs.singer}
                songIndex={songs.songIndex}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full text-[30px] text-gray-500 font-semibold">
          No Songs in playlist
        </div>
      )}
    </div>
  );
}

export default PlayList;
