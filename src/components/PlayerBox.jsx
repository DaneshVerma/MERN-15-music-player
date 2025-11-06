import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { next, pause, play, prev } from "../feature/playerSlice";

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
    <div className='w-6/12 backdrop-blur-md mx-auto h-4/12 flex justify-center items-center rounded-lg shadow-lg'>
      <audio ref={audioRef} src={currentSong?.songUrl}></audio>
      <div className='w-6/12 p-4'>
        <img
          className='rounded-md w-fit object-cover'
          src={currentSong?.img}
          alt={currentSong?.title}
        />
      </div>
      <div className='w-6/12 flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-2xl capitalize font-bold text-white text-shadow-2xs'>
          {currentSong?.title}
        </h2>
        <h3 className='text-base capitalize font-stretch-90% text-white'>
          {currentSong?.artist}
        </h3>
        <div className='flex gap-3'>
          <button onClick={() => dispatch(prev())} className='cursor-pointer px-2 rounded bg-emerald-600 text-white'>
            Prev
          </button>
          <button
            onClick={handleToggle}
            className=' cursor-pointer px-2 rounded bg-emerald-600 text-white'
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={()=> dispatch(next())} className=' cursor-pointer px-2 rounded bg-emerald-600 text-white'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerBox;
