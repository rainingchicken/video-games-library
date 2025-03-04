import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Link href={`#description`}></Link>
      <Link href={`#platform`}></Link>
      <Link href={`#store`}></Link>
      <Link href={`#developers`}></Link>
      <Link href={`#publishers`}></Link>
    </div>
  );
};

export default NavBar;
