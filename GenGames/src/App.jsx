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
      <div className="flex flex-col justify-center bg-[url('./back.jpg')]" >

        <div className="flex flex-row justify-between rounded-xl mb-4 mr-12 ml-12">
          <img src="./logo.png"></img>
          <div className="flex flex-wrap">
            <button
              className={` text-xs sm:text-xl m-2 font-mono text-cor5 ${
                genre === null ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick(null)}
            >
              <img src="./not.png"></img>
            </button>
            <button
              className={` text-xs sm:text-xl m-2 font-mono text-cor5 ${
                genre === "massively-multiplayer" ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick("massively-multiplayer")}
            >
             <img src="./multi.png"></img>
            </button>
            <button
              className={` text-xs sm:text-xl m-2 font-mono text-cor5 ${
                genre == "action" ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick("action")}
            >
              <img src="./action.png"></img>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center rounded-xl mb-4 mr-12 ml-12">
          <div className="rounded-xl m-2">
            <p className="text-xs sm:text-6xl m-2 text-cor5">
            <img src="./welcome.png"></img>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {games.map((game, index) => (
            <div className="relative flex flex-col items-center border-4 border-black mb-8 mx-4 bg-cor5 rounded-2xl" key={index}>
              <h2 className="text-xs sm:text-xl font-mono text-cor4">{game.name}</h2>
              <div>
                <img className="w-60 h-42 sm:w-128 md:h-80 rounded-xl shadow-xl border-y-4 border-black saturate-0 brightness-75" src={game.image} alt={game.name} />
                <p className=" absolute top-6 right-4 sm:top-10 text-2xl font-mono font-bold drop-shadow-2xl text-amber-100">
                  <FaStar className="inline text-4xl pb-1.5 m-1 text-cor2" />
                  {game.rating}
                </p>
                <p className="absolute bottom-1 left-4 sm:bottom-2 text-xl sm:text-2xl font-mono font-bold drop-shadow-2xl text-amber-100">
                  <FaCalendarAlt className="inline text-4xl pb-2 m-1 text-cor2" /> 
                  {game.released}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center">
        <a href="https://www.joaopedropn.com.br/"><img src="./me.png"></img></a>
        </div>

      </div>
    </div>
  );
}

export default App
