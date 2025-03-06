import { TextInput } from "flowbite-react";
import React from "react";

const Searchbar = () => {
  return (
    <div className="group relative">
      <TextInput
        type="text"
        placeholder="Search"
        className="focus:!border-t-gray-900 group-hover:border-2 group-hover:!border-gray-900"
        readOnly
      />
      <div className="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4"></div>
    </div>
  );
};

export default Searchbar;
