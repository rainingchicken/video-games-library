"use server";

import VideoGameCard, { GameProp } from "@/components/VideoGameCard";

export const fetchGames = async (page: number) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}`
  );
  const data = await response.json();
  const gameData = data.results;
  return (
    gameData &&
    gameData.map((item: GameProp, index: number) => (
      <VideoGameCard key={item.id} game={item} index={index} />
    ))
  );
};
