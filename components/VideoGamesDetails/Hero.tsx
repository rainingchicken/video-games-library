import React from "react";
import Image from "next/image";
import { GameProp } from "@/app/(root)/game/[slug]/page";

export interface Prop {
  game: GameProp;
}

const Hero = ({ game }: Prop) => {
  return (
    <div className="h-lvh ">
      <Image
        src={game.background_image}
        alt={game.name}
        fill
        className="rounded-xl"
        style={{
          opacity: 0.15,
        }}
      />
      <h1 className="text-8xl font-bold text-center ">{game.name}</h1>
      <div className="flex flex-wrap text-center m-8 justify-center text-black text-xl">
        {game.genres &&
          game.genres.map((genre) => (
            <div
              className="border bg-white rounded-xl p-2 m-2 mt-1 mb-1"
              key={genre.id}
            >
              {genre.name}
            </div>
          ))}
      </div>
      <div className="flex flex-wrap text-center m-8 justify-center">
        {game.tags &&
          game.tags.map((tag) => (
            <div className="border rounded-xl p-2 m-2 mt-1 mb-1" key={tag.id}>
              {tag.name}
            </div>
          ))}
      </div>
      <h2 className="font-bold text-center flex m-auto justify-around ">
        <div>
          {game.metacritic && (
            <div>
              <div className="text-7xl">{game.metacritic}</div>
              <div className="text-3xl">Metacritic Score</div>
            </div>
          )}
        </div>
        <div>
          <div className="text-7xl">{game.rating}</div>
          <div className="text-3xl">Rating</div>
        </div>
      </h2>
      <h2 className="text-center">ESRB Rating: {game.esrb_rating.name}</h2>
    </div>
  );
};

export default Hero;
