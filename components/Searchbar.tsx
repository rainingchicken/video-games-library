"use client";

import { Button, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Searchbar = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    router.push(`/search/${input}`);
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Search"
        className=""
        onChange={handleChange}
      />
      <Button type="submit" color="dark" className="ml-2">
        SEARCH
      </Button>
    </form>
  );
};

export default Searchbar;
