import { fetchScreenshots, fetchSpecificGame } from "@/app/action";
import AvailablePlatforms from "@/components/VideoGamesDetails/AvailablePlatforms";
import AvailableStores from "@/components/VideoGamesDetails/AvailableStores";
import Description from "@/components/VideoGamesDetails/Description";
import Developers from "@/components/VideoGamesDetails/Developers";
import Hero from "@/components/VideoGamesDetails/Hero";
import NavBar from "@/components/VideoGamesDetails/NavBar";
import ScreenshotCarousel, {
  ScreenshotsProps,
} from "@/components/VideoGamesDetails/ScreenshotCarousel";
import React from "react";

export interface GameProp {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: [
    {
      metascore: number;
      url: string;
      platform: {
        platform: number;
        name: string;
        slug: string;
      };
    }
  ];
  released: string;
  tba: boolean;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: [
    {
      id: number;
      title: string;
      count: number;
      percent: number;
    }
  ];
  reactions: {};
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  alternative_names: [number];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: any;
  reviews_count: number;
  suggestions_count: number;
  updated: string;
  saturated_color: string;
  dominant_color: string;
  platforms: [
    {
      platform: {
        id: number;
        name: string;
        slug: string;
        image: any;
        year_end: any;
        games_count: number;
        image_background: string;
        released_at: string;
      };
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
  parent_platforms: [
    {
      platform: {
        id: number;
        name: string;
        slug: string;
      };
    }
  ];
  genres: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  stores: [
    {
      id: number;
      store: {
        id: number;
        name: string;
        slug: string;
        domain: string;
        games_count: number;
        image_background: string;
      };
    }
  ];
  developers: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  tags: [
    {
      id: number;
      name: string;
      slug: string;
      language: string;
      games_count: number;
      image_background: string;
    }
  ];
  publishers: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  clip: any;
  description_raw: string;
}

export interface Prop {
  game?: GameProp;
  images?: [ScreenshotsProps];
  gameTitle?: string;
}

type Props = {
  params: { slug: string };
};
const GameDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const gameData = await fetchSpecificGame(slug);
  const [videos, images, gameTitle] = await fetchScreenshots(slug);

  return (
    <div>
      {gameData && <Hero game={gameData} />}
      <NavBar />
      {images && gameTitle && (
        <ScreenshotCarousel
          videos={videos}
          images={images}
          gameTitle={gameTitle}
        />
      )}
      {gameData && <Description game={gameData} />}
      {gameData && <Developers game={gameData} />}
      {gameData && <AvailableStores game={gameData} />}
      {gameData && <AvailablePlatforms game={gameData} />}
    </div>
  );
};

export default GameDetails;
