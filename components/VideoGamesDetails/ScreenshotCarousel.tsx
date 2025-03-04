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

export interface VideoProps {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export interface Prop {
  videos: [VideoProps];
  images: [ScreenshotsProps];
  gameTitle: string;
}

const ScreenshotCarousel = ({ videos, images, gameTitle }: Prop) => {
  return (
    <div className="m-10">
      <h1 className="text-5xl text-center font-bold">
        Trailers and Screenshots
      </h1>
      <div className="m-10 h-lvh ">
        <Carousel slide={false}>
          {videos &&
            videos.map((video) => (
              <video
                key={video.id}
                controls
                preload="none"
                aria-label="Video player"
              >
                <source src={video.data.max} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
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
