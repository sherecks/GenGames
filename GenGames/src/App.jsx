import { getFormattedGames, getGamesByGenre} from "./Games"
import { useEffect, useState } from "react";
import { FaStar, FaCalendarAlt } from 'react-icons/fa';

function App() {
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState(null);

  // Dados Jogos !!!
  useEffect(() => {
    const fetchGamesData = async () => {
      let data = [];
      if (genre === null) {
        data = await getFormattedGames();
      } else {
        data = await getGamesByGenre(genre);
      }
      setGames(data);
    };
    fetchGamesData();
  }, [genre]);

  // Botão !!!
  const handleGenreClick = async (selectedGenre) => {
    setGenre(selectedGenre);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center bg-[url('./back.jpg')]" >

        <div className="flex flex-wrap justify-between rounded-xl mr-12 ml-12">
          <img className="w-132" src="./logo.png"></img>
          <div className="flex flex-wrap">
            <button
              className={`m-2 ${
                genre === null ? "opacity-100" : "opacity-100"
              }`}
              onClick={() => handleGenreClick(null)}
            >
              <img className="w-60" src="./not.png"></img>
            </button>
            <button
              className={`m-2${
                genre === "massively-multiplayer" ? "opacity-100" : "opacity-100"
              }`}
              onClick={() => handleGenreClick("massively-multiplayer")}
            >
             <img className="w-60" src="./multi.png"></img>
            </button>
            <button
              className={`m-2  ${
                genre == "action" ? "opacity-100" : "opacity-100"
              }`}
              onClick={() => handleGenreClick("action")}
            >
              <img className="w-60" src="./action.png"></img>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mx-0">
          <div>
            <p className="m-2">
            <img src="./welcome.png"></img>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {games.map((game, index) => (
            <div className="relative flex flex-col items-center mb-8 mx-4" key={index}>
              <h2 className="text-sm sm:text-xl m-4 font-mono text-cor2">{game.name}</h2>
              <div>
                <img className="w-60 h-42 sm:w-128 md:h-80 rounded-xl shadow-xl border-4 border-black saturate-0 brightness-75" src={game.image} alt={game.name} />
                <p className=" absolute top-16 right-4 sm:top-16 text-sm sm:text-2xl font-mono font-bold drop-shadow-2xl text-amber-100">
                  <FaStar className="inline text-sm sm:text-2xl pb-1.5 m-1 text-cor2" />
                  {game.rating}
                </p>
                <p className="absolute bottom-1 left-4 sm:bottom-2 text-sm sm:text-2xl font-mono font-bold drop-shadow-2xl text-amber-100">
                  <FaCalendarAlt className="inline text-sm sm:text-2xl pb-1 m-1 text-cor2" /> 
                  {game.released}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center">
        <a target="_blank" href="https://www.joaopedropn.com.br/"><img src="./me.png"></img></a>
        </div>
      </div>
    </div>
  );
}

export default App
