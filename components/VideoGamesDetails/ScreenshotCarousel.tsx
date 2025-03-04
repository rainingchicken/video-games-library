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
}

const ScreenshotCarousel = ({ images }: Prop) => {
  return <div>ScreenshotCarousel</div>;
};

export default ScreenshotCarousel;
