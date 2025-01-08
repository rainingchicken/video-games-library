import VideoGameCard, { GameProp } from "@/components/VideoGameCard";
import LoadMore from "../components/LoadMore";

async function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Games</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: GameProp, index) => (
          <VideoGameCard key={item.id} game={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
