import React from "react";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Searchbar from "./Searchbar";

export interface navLinksProp {
  link: string;
  text: string;
}

export interface Prop {
  navLinks: Array<navLinksProp>;
}

const MainNavBar = () => {
  return (
    <div className="top-0 z-20 ">
      <Navbar fluid rounded className="flex h-full bg-opacity-90">
        <NavbarToggle />
        <NavbarCollapse>
          <Searchbar />
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default MainNavBar;
