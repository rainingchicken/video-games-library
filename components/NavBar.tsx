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
  isMainNavBar?: boolean;
}

const NavBar = ({ navLinks, isMainNavBar }: Prop) => {
  return (
    <div className={`${isMainNavBar ? "relative" : "sticky"} top-0 z-10 `}>
      <Navbar fluid rounded className="flex h-full bg-opacity-90 align-middle">
        <NavbarToggle />
        <NavbarCollapse>
          {navLinks &&
            navLinks.map((link) => (
              <NavbarLink key={link.text} href={link.link}>
                <span className="whitespace-nowrap text-3xl ">{link.text}</span>
              </NavbarLink>
            ))}
          {isMainNavBar && <Searchbar />}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
