import { useState } from "react";
import data from './data';
import Games from './Components/Games';
import './App.css';

function App() {
  const [games,setGames] = useState(data);

  function removeGames(id){
    const newGames = games.filter( games => games.id!==id)
    setGames(newGames);
  }

  if(games.length===0)
  {
    return(
      <div className="refresh">
        <h2>No Games Left</h2>
        <button className="btn-white" onClick={()=> setGames(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='app'>
      <Games games={games} removeGames={removeGames} />
    </div>
  );
}

export default App;
