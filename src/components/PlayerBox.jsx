import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../feature/playerSlice";

const PlayerBox = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);
  const handleToggle = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  return (
    <div className='w-6/12 mx-auto h-6/12 bg-amber-300 flex justify-center items-center gap-4 rounded-lg shadow-lg'>
      <audio ref={audioRef} src={currentSong?.songUrl}></audio>
      <div className='w-6/12'>
        <img
          className='rounded-md'
          src={currentSong?.img}
          alt={currentSong?.title}
        />
      </div>
      <div>
        <h2>{currentSong?.title}</h2>
        <h3>{currentSong?.artist}</h3>
        <div className='flex gap-3'>
          <button className='border-2 border-black cursor-pointer px-2 rounded bg-emerald-600 text-white'>
            Prev
          </button>
          <button
            onClick={handleToggle}
            className='border-2 border-black cursor-pointer px-2 rounded bg-emerald-600 text-white'
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button className='border-2 border-black cursor-pointer px-2 rounded bg-emerald-600 text-white'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerBox;
