const API_KEY = "af68bf60f1c94b1eabd4a047e220136a";

// Função auxiliar para verificar as dimensões da imagem
async function checkImageDimensions(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Verifica se a imagem tem as dimensões 1920x1080
      resolve(img.width === 1920 && img.height === 1080);
    };
    img.onerror = reject;
    img.src = url;
  });
}


const getFormattedGames = async () => {
  const URL = `https://api.rawg.io/api/games?dates=2024-01-01,2025-12-25&key=${API_KEY}`;

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
            platforms: game.platforms,
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
  const URL = `https://api.rawg.io/api/games?dates=2024-01-01,2025-12-25&key=${API_KEY}&genres=${genre}`;

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