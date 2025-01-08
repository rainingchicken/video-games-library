"use server";

export const fetchGames = async (page: number) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}`
  );
  const data = await response.json();
  const gameData = data.results;
  return gameData;
};
