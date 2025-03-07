import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <Spinner
        color="black"
        aria-label="Loading content"
        className="text-center "
        size="xl"
      />
      <div className="m-10"> Loading...</div>
    </div>
  );
}
