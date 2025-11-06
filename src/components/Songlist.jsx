import { songs } from "../data/data";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../feature/playerSlice";

const Songlist = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex w-8/12 mx-auto flex-wrap mt-10 gap-4'>
      {songs.map((song) => {
        return (
          <div onClick={()=>dispatch(setCurrentSong(song))} key={song.id} className='mb-4 p-4 bg-white rounded-lg shadow-md'>
            <img
              className='w-32 h-32 rounded-md mb-2'
              src={song.img}
              alt={song.title}
            />
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Songlist;
