import Image from "next/image";

export interface GameProp {
  id: string;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

interface Prop {
  game: GameProp;
  index: number;
}

function VideoGameCard({ game }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {game.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {game.platform}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base text-white font-bold">{game.genre}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base font-bold text-[#FFAD49]">
              {game.developer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGameCard;
