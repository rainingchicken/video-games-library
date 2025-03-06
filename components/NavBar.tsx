import React from "react";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export interface navLinksProp {
  link: string;
  text: string;
}

export interface Prop {
  navLinks: Array<navLinksProp>;
}

const NavBar = ({ navLinks }: Prop) => {
  return (
    <div className="sticky top-0 z-10 ">
      <Navbar fluid rounded className="flex h-full bg-opacity-90">
        <NavbarToggle />
        <NavbarCollapse>
          {navLinks &&
            navLinks.map((link) => (
              <NavbarLink key={link.text} href={link.link}>
                {link.text}
              </NavbarLink>
            ))}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
