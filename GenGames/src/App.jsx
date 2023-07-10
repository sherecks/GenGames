import { getFormattedGames, getGamesByGenre, fetchGameDescription } from "./Games"
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

  // Teste !!!
  useEffect(() => {
    const fetchGameDescriptions = async () => {
      const gamesWithDescriptions = await Promise.all(
        games.map(async (game) => {
          const description = await fetchGameDescription(game.id);
          return {
            ...game,
            description,
          };
        })
      );
      setGames(gamesWithDescriptions);
    };
    fetchGameDescriptions();
  }, [games]);

  return (
    <div>
      <div className="flex flex-col justify-center bg-cor1">

        <div className="flex flex-row justify-between rounded-xl mb-4 mr-8 ml-8 bg-cor4 m-4">
          <h1 className="text-4xl sm:text-7xl font-mono m-1 ml-2 text-cor2 self-center">GNG</h1>
          <div className="flex flex-wrap">
            <button
              className={` text-xs sm:text-xl m-2 font-mono text-cor5 ${
                genre === null ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick(null)}
            >
              Not Released,
            </button>
            <button
              className={` text-xs sm:text-xl m-2 font-mono text-cor5 ${
                genre === "massively-multiplayer" ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick("massively-multiplayer")}
            >
              Multiplayer,
            </button>
            <button
              className={` text-xs sm:text-xl m-2 font-mono text-cor5 ${
                genre == "action" ? "text-opacity-100" : "text-opacity-50"
              }`}
              onClick={() => handleGenreClick("action")}
            >
              Action
            </button>
          </div>
        </div>

        <div className="flex justify-center rounded-xl mb-4 mr-12 ml-12 bg-cor4">
          <p className="text-xs sm:text-2xl m-2 font-mono text-cor5">
            Welcome to our website! Discover the world of gaming with us.
            We bring you exclusive content showcasing upcoming releases and
            the best games of the year in the action and massively multiplayer
            genres.
          </p>
          <div className="rounded-xl m-2 bg-cor3">
            <p className="text-xs sm:text-xl m-2 font-mono text-cor5">
              Dive into the excitement of exploring unreleased games
              and uncovering hidden gems that will keep you entertained for hours.
              Whether you're a hardcore gamer or just getting started, our platform is
              your ultimate destination for gaming news, reviews, and recommendations.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {games.map((game, index) => (
            <div className="relative flex flex-col items-center mb-8 mx-4 bg-cor4 rounded-xl"  key={index}>
              <h2 className="text-xs sm:text-2xl font-mono text-cor5">{game.name}</h2>
              <div>
                <img className="w-80 h-62 sm:w-128 md:h-80 rounded-xl shadow-xl saturate-0 brightness-75 hover:saturate-100 duration-200" src={game.image} alt={game.name} />
                <p className=" absolute top-6 right-4 sm:top-10 text-2xl font-mono font-bold drop-shadow-2xl text-amber-100 hover:text-neutral-500">
                  <FaStar className="inline text-4xl pb-1.5 m-1 text-cor2" />
                  {game.rating}
                </p>
                <p className="absolute bottom-1 left-4 sm:bottom-2 text-xl sm:text-2xl font-mono font-bold drop-shadow-2xl text-amber-100 hover:text-neutral-500">
                  <FaCalendarAlt className="inline text-4xl pb-2 m-1 text-cor2" /> 
                  {game.released}
                </p>
              </div>
              <p className="text-xs sm:text-lg font-mono text-cor5">{game.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center">
          <p className="text-xl sm:text-2xl m-2  font-mono text-orange-100">Design by <a href="https://www.joaopedropn.com.br/">João Pedro</a> </p>
        </div>

      </div>
    </div>
  );
}

export default App
