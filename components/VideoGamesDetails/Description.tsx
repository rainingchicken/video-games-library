import { GameProp } from "@/app/(root)/game/[slug]/page";
import React from "react";
import ExtraGameDetailsTable from "./ExtraGameDetailsTable";

export interface Prop {
  game: GameProp;
}

const Description = ({ game }: Prop) => {
  return (
    <div id="description-section" className="m-10">
      <h1 className="text-5xl text-center font-bold">Description</h1>
      <div className="flex">
        <article
          className="w-3/4 m-10"
          dangerouslySetInnerHTML={{ __html: game.description }}
        ></article>
        <ExtraGameDetailsTable game={game} />
      </div>
    </div>
  );
};

export default Description;
