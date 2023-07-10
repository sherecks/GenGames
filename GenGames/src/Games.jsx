const API_KEY = "497df8946f4e4c7d8a3bf04a81e50f13";


const getFormattedGames = async () => {
  const URL = `https://api.rawg.io/api/games?dates=2023-07-01,2026-12-25&key=${API_KEY}`;

  try {
      const response = await fetch(URL);
      const data = await response.json();
  
      // Formatando os dados dos jogos!!!
      const formattedGames = data.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          rating: game.rating,
          image: game.background_image,
          released: game.released,
        };
      });
  
      console.log(formattedGames);
      return formattedGames;
  } catch (error) {
      console.log('Ocorreu um erro ao buscar os jogos:', error);
      return null;
  }
};

const getGamesByGenre = async (genre) => {
  const URL = `https://api.rawg.io/api/games?dates=2023-01-01,2023-12-25&key=${API_KEY}&genres=${genre}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    // Formatando os dados dos jogos por Genero!!!
    const gamesByGenre = data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        rating: game.rating,
        image: game.background_image,
        released: game.released,
      };
    });

    console.log(gamesByGenre)
    return gamesByGenre;
  } catch (error) {
    console.log('Ocorreu um erro ao buscar os jogos por gênero:', error);
    return null;
  }
};

const fetchGameDescription = async (gameId) => {
  const URL = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.description_raw;
  } catch (error) {
    console.log('Ocorreu um erro ao buscar a descrição do jogo:', error);
    return null;
  }
};

export { fetchGameDescription };
export { getGamesByGenre };
export { getFormattedGames };