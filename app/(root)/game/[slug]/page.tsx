import React from "react";

type Props = {
  params: { slug: string };
};
const GameDetails = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>ID: {slug}</div>;
};

export default GameDetails;
