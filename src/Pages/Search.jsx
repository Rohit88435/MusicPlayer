import React, { useEffect, useState } from "react";
import Player from "../Component/player";
import { IoIosSearch } from "react-icons/io";
import { songsData } from "../songs";
import Card from "../Component/Card";
import { IoIosMusicalNote } from "react-icons/io";
function Search() {
  let [input, setInput] = useState("");
  let [newlist, setNewlist] = useState([]);
  useEffect(() => {
    let n = songsData.filter(
      (song) =>
        song.name.toLowerCase().includes(input) ||
        song.singer.toLowerCase().includes(input)
    );
    setNewlist(n);
  }, [input]);
  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-start items-center  pt-[20px] gap-4 flex-col md:pt-[100px]">
      <Player />
      <form
        action=""
        className="w-[90%] md:w-[60%] h-[60px] flex justify-center items-center gap-5 rounded-[40px] bg-gray-800 overflow-hidden p-[20px] md:p-[0]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <IoIosSearch className="text-gray-200 text-[18px]" />
        <input
          type="text"
          value={input}
          className="w-[90%] h-full bg-gray-800 outline-none border-0 text-white p-[10px] text-[18px]"
          placeholder="Search songs ..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
      {input ? (
        <div className="w-[100%] md:w-[90%]  h-[75%] md:h-[90%] flex flex-col justify-start p-[10px] overflow-auto items-center gap-5">
          {newlist.map((song) => (
            <Card
              name={song.name}
              image={song.image}
              singer={song.singer}
              songIndex={song.id - 1}
              t
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full text-[30px] text-gray-500 font-semibold">
          Search Songs <IoIosMusicalNote />
        </div>
      )}
    </div>
  );
}

export default Search;
