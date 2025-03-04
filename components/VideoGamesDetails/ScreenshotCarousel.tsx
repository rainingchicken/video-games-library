import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export interface ScreenshotsProps {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

export interface Prop {
  images: [ScreenshotsProps];
  gameTitle: string;
}

const ScreenshotCarousel = ({ images, gameTitle }: Prop) => {
  return (
    <div className="m-10">
      <h1 className="text-5xl">Screenshots</h1>
      <div className="m-10 h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slide={false}>
          {images &&
            images.map((image) => (
              <Image
                key={image.id}
                src={image.image}
                alt={`screenshot image of ${gameTitle}`}
                width={image.width}
                height={image.height}
              />
            ))}
        </Carousel>
      </div>{" "}
    </div>
  );
};

export default ScreenshotCarousel;
