import { GameProp } from "@/app/(root)/game/[slug]/page";
import Image from "next/image";
import React from "react";

export interface Prop {
  game: GameProp;
}

const AvailablePlatforms = ({ game }: Prop) => {
  return (
    <div id="availablePlatforms-section">
      <h1 className="text-5xl text-center font-bold m-10">
        Available Platforms
      </h1>
      <div className="justify-center m-auto w-screen ">
        {game.platforms &&
          game.platforms.map((platform) => (
            <div key={platform.platform.id}>
              <h1 className="text-center text-7xl m-2">
                {platform.platform.name}
              </h1>
              <div className="flex justify-center max-w-3xl m-auto">
                <p className="m-5">{platform.requirements.minimum}</p>
                <p className="m-5">{platform.requirements.recommended}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AvailablePlatforms;
