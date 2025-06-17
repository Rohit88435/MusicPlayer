import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../songs";

export const dataContext = createContext();
function UserContext({ children }) {
  let audioRef = useRef(new Audio());

  let [index, setIndex] = useState(0);
  let [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.src = songsData[index].song;
    audioRef.current.load();
    if (playing) {
      playSong();
    }
  }, [index]);

  function playSong() {
    setPlaying(true);
    audioRef.current.play();
  }
  function pauseSong() {
    setPlaying(false);
    audioRef.current.pause();
  }

  function nextSong() {
    setIndex((prev) => (prev + 1) % songsData.length);
  }
  function previousSong() {
    setIndex((prev) => {
      if (prev == -0) {
        return songsData.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  let value = {
    audioRef,
    playSong,
    pauseSong,
    playing,
    setPlaying,
    nextSong,
    index,
    setIndex,
    previousSong,
  };
  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
