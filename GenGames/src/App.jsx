import { getFormattedGames, getGamesByGenre } from "./Games"
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
      <div className="flex flex-col justify-center bg-slate-800">

        <div className="flex flex-row justify-between m-12 mb-12 mt-4 ">
          <h1 className="text-4xl sm:text-8xl font-serif mb-8 text-lime-500">GNG</h1>
          <div>
            <button
              className={` text-xl sm:text-2xl m-2 mt-10  font-mono text-orange-100 ${
                genre === null ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick(null)}
            >
              Not Released,
            </button>
            <button
              className={` text-xl sm:text-2xl m-2  font-mono text-orange-100 ${
                genre === "massively-multiplayer" ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick("massively-multiplayer")}
            >
              Massive Multiplayer,
            </button>
            <button
              className={` text-xl sm:text-2xl m-2 font-mono text-orange-100 ${
                genre == "action" ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick("action")}
            >
              Action
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {games.map((game, index) => (
            <div className="relative flex flex-col items-center mb-8 mx-4" key={index}>
              <h2 className="text-xs sm:text-2xl font-mono text-amber-100">{game.name}</h2>
              <div>
                <img className="w-80 h-62 sm:w-128 md:h-80 rounded-xl shadow-xl saturate-0 brightness-75 hover:saturate-100 duration-200" src={game.image} alt={game.name} />
                <p className=" absolute top-6 right-4 sm:top-10 text-2xl font-mono font-bold drop-shadow-2xl text-amber-100 hover:text-neutral-500">
                  <FaStar className="inline text-4xl pb-1.5 m-1 text-amber-400" />
                  {game.rating}
                </p>
                <p className="absolute bottom-1 left-4 sm:bottom-2 text-xl sm:text-2xl font-mono font-bold drop-shadow-2xl text-amber-100 hover:text-neutral-500">
                  <FaCalendarAlt className="inline text-4xl pb-2 m-1 text-lime-400" /> 
                  {game.released}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App
