import { searchGames } from "@/app/action";
import LoadMore from "@/components/Home/LoadMore";
import React from "react";

export interface Prop {
  searchInput: string;
}

type Props = {
  params: { searchTerm: string };
};

const SearchPage = async ({ params }: Props) => {
  const { searchTerm } = await params;
  const data = await searchGames(searchTerm, 1);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Search Results</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
};

export default SearchPage;
