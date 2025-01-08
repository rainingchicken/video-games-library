import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface GameProp {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
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
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;

    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: any;
  reviews_count: number;
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
        requirements_en: {
          minimum: string;
          recommended: string;
        };
        requirements_ru: any;
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
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  short_screenshots: [
    {
      id: number;
      image: string;
    }
  ];
}

interface Prop {
  game: GameProp;
  index: number;
}

const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
function VideoGameCard({ game, index }: Prop) {
  return (
    <MotionDiv
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={game.background_image}
          alt={game.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {game.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {game.genres[0].name}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base text-white font-bold">
              {game.tags[0].name}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base font-bold text-[#FFAD49]">{game.rating}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default VideoGameCard;
