import { fetchSpecificGame } from "@/app/action";
import React from "react";

type Props = {
  params: { slug: string };
};
const GameDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await fetchSpecificGame(slug);
  return <div>{data}</div>;
};

export default GameDetails;
