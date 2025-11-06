import PlayerBox from "./components/PlayerBox.jsx";
import Songlist from "./components/Songlist.jsx";
import { useSelector } from "react-redux";
const App = () => {
  const { currentSong } = useSelector((state) => state.player);
  return (
    <div
      className='w-full h-full pt-10 bg-cover bg-center flex flex-col justify-between gap-10'
      style={{ backgroundImage: `url(${currentSong?.img})` }}
    >
      <PlayerBox />
      <Songlist />
    </div>
  );
};

export default App;
