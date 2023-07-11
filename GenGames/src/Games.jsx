const API_KEY = "a11f25e2e65a4d03ad84e1aeafcfce44";


const getFormattedGames = async () => {
  const URL = `https://api.rawg.io/api/games?dates=2023-07-01,2023-12-25&key=${API_KEY}`;

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

export { getGamesByGenre };
export { getFormattedGames };