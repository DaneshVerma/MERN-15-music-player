import { songs } from "../data/data";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../feature/playerSlice";

const Songlist = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex w-full h-6/12 backdrop-blur-lg flex-wrap overflow-auto justify-center p-5 mx-auto mt-2 gap-4'>
      {songs.map((song, idx) => {
        return (
          <div
            onClick={() => dispatch(setCurrentSong(song))}
            key={idx}
            className='mb-4 shrink-0 p-4 h-fit rounded-lg shadow-md'
          >
            <img
              className='w-42  rounded-md mb-2'
              src={song.img}
              alt={song.title}
            />
            <h2 className="text-2xl font-bold text-white text-shadow-gray-900 capitalize">{song.title}</h2>
            <h3 className="text-base font-stretch-90% text-white capitalize">{song.artist}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Songlist;
