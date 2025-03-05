import { Prop } from "@/app/(root)/game/[slug]/page";
import Image from "next/image";
import React from "react";

const Developers = ({ game }: Prop) => {
  return (
    <div id="developers-section" className="justify-center">
      <h1 className="text-5xl text-center font-bold m-10">Developers</h1>
      <div className="justify-center flex">
        {game &&
          game.developers.map((developer) => (
            <div
              key={developer.id}
              className="flex flex-col items-center pb-10"
            >
              <Image
                className="rounded-full w-64 h-64 object-cover m-5"
                alt={`${developer.name} company image`}
                src={developer.image_background}
                width={1920}
                height={1080}
              />
              <h5 className="mb-1 text-2xl font-medium">{developer.name}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Developers;
