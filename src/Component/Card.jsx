import React, { useContext } from "react";
import { songsData } from "../songs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { dataContext } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/PlaylistSlice";
import { likeSong, removeLike } from "../redux/LikeSlice";

function Card({ name, image, singer, songIndex }) {
  let { index, setIndex, playSong } = useContext(dataContext);

  let dispatch = useDispatch();
  let gana = useSelector((state) => state.playlist);
  let songExistInPlaylist = gana.some((song) => song.songIndex == songIndex);

  let liked = useSelector((state) => state.like);
  let sonExistInLike = liked.some((song) => song.songIndex == songIndex);
  return (
    <div className="w-[90%] h-[70px]  md:h-[120px]  flex rounded-lg bg-gray-800 p-[5px] md:p-[10px] hover:bg-gray-700">
      <div
        className=" flex justify-start cursor-pointer items-center gap-[20px] w-[80%] h-full  "
        onClick={() => {
          setIndex(songIndex);
          playSong();
        }}
      >
        <div>
          <img
            src={image}
            alt=""
            className="w-[60px] max-h-[60px] md:w-[100px] md:max-h-[100px] rounded-lg"
          />
        </div>
        <div className="  text-[15px] md:text-[20px]">
          <div className="text-white text-[1.1em] font-semibold ">{name}</div>
          <div className="text-gray-400 text-[0.7em] font-semibold ">
            {singer}
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-center gap-[20px] w-[20%] h-full  text-[15px] md:text-[20px]">
        {!songExistInPlaylist && (
          <div
            onClick={() => {
              dispatch(
                addSong({
                  name: name,
                  image: image,
                  singer: singer,
                  songIndex: songIndex,
                })
              );
            }}
          >
            <MdOutlinePlaylistAdd className="text-white text-[1.3em] cursor-pointer" />
          </div>
        )}
        {songExistInPlaylist && (
          <div
            onClick={() => {
              dispatch(removeSong(songIndex));
            }}
          >
            <MdOutlinePlaylistAddCheck className="text-white text-[1.3em] cursor-pointer" />
          </div>
        )}

        {!sonExistInLike && (
          <>
            <div
              onClick={() => {
                dispatch(
                  likeSong({
                    name: name,
                    image: image,
                    singer: singer,
                    songIndex: songIndex,
                  })
                );
              }}
            >
              <FaRegHeart className="text-white text-[1em] cursor-pointer" />
            </div>
          </>
        )}
        {sonExistInLike && (
          <>
            <div
              onClick={() => {
                dispatch(removeLike(songIndex));
              }}
            >
              <FaHeart className="text-white text-[1em] cursor-pointer" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
