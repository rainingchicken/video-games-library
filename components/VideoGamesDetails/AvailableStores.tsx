import { GameProp } from "@/app/(root)/game/[slug]/page";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

export interface Prop {
  game: GameProp;
}

const AvailableStores = ({ game }: Prop) => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl text-center font-bold">Available Stores</h1>
      <div className="flex justify-center mt-10">
        <Link className="mr-2" href={game.website}>
          <Button outline color="dark">
            Official Store
          </Button>
        </Link>
        {game &&
          game.stores.map((store) => (
            <Link
              className="mr-2"
              key={store.id}
              href={`https://${store.store.domain}`}
            >
              <Button outline color="dark">
                {store.store.name}
              </Button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AvailableStores;
