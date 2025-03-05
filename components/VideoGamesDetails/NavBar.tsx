import React from "react";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 ">
      <Navbar fluid rounded className="flex h-full bg-opacity-90">
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href={`#screenshots-section`}>Screenshots</NavbarLink>
          <NavbarLink href={`#description-section`}>Description</NavbarLink>
          <NavbarLink href={`#developers-section`}>Developers</NavbarLink>
          <NavbarLink href={`#availableStores-section`}>Stores</NavbarLink>
          <NavbarLink href={`#availablePlatforms-section`}>
            Platforms
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
