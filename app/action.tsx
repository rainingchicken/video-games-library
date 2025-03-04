"use server";

import VideoGameCard, { GameProp } from "@/components/Home/VideoGameCard";
import ScreenshotCarousel from "@/components/VideoGamesDetails/ScreenshotCarousel";
import VideoGamesDetails from "@/components/VideoGamesDetails/VideoGamesDetails";

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

export const fetchSpecificGame = async (slug: string) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${slug}?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data && <VideoGamesDetails game={data} />;
};

export const fetchScreenshots = async (slug: string) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${slug}/screenshots?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  const images = data.results;
  return data && <ScreenshotCarousel images={images} />;
};
