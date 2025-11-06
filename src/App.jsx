import PlayerBox from "./components/PlayerBox.jsx";
import Songlist from "./components/Songlist.jsx";
const App = () => {
  return (
    <div className='w-full h-full pt-20 bg-gray-200 '>
      <PlayerBox />
      <Songlist />
    </div>
  );
};

export default App;
