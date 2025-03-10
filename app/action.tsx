"use server";

import VideoGameCard, { GameProp } from "@/components/Home/VideoGameCard";

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
  return data;
};

export const fetchScreenshots = async (slug: string) => {
  const responseImages = await fetch(
    `https://api.rawg.io/api/games/${slug}/screenshots?key=${process.env.API_KEY}`
  );
  const responseVideos = await fetch(
    `https://api.rawg.io/api/games/${slug}/movies?key=${process.env.API_KEY}`
  );
  const dataImages = await responseImages.json();
  const dataVideos = await responseVideos.json();
  const images = dataImages.results;
  const videos = dataVideos.results;
  const gameTitle = slug.split("-").join(" ");
  return [videos, images, gameTitle];
};

export const searchGames = async (searchTerm: string, page: number) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${searchTerm}&page=${page}&ordering=-added`
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
