import { FooterDivider, FooterIcon } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <FooterDivider />
      <div className="mt-4 flex flex-col items-center space-x-6 sm:mt-0 sm:justify-center">
        <FooterIcon
          href="https://github.com/rainingchicken/video-games-library"
          icon={BsGithub}
          target="_blank"
        />
        <p>
          <Link href={"https://api.rawg.io/docs/"}>
            Thanks to RAWG for Video Game Dataset
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
