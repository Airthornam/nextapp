import React from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Nav = () => {
  return (
    <>
      <div className="bg-white h-100 hidden md:block border-solid  border-b-[2px] border-herobg">
        <div className="container mx-auto flex  flex-row justify-between items-center">
          <div className="w-1/2 space-x-0 flex flex-row justify-between px-5 py-2">
            <p>
              <span className="text-secondary uppercase  font-bold">Email:</span> aetortech@gmail.com
            </p>
            <p>
              <span className="text-secondary uppercase font-bold">Phone:</span> +233 248 141 505
            </p>
          </div>
          <div className="space-x-3">
            <Link href="/">
              <FacebookOutlinedIcon className="cursor-pointer w-5 h-10 text-lightblue" />
            </Link>
            <Link href="/">
              <TwitterIcon className="cursor-pointer w-5 h-10 text-herobg" />
            </Link>
            <Link href="/">
              <InstagramIcon className="cursor-pointer w-5 h-10 text-red" />
            </Link>
          </div>
        </div>
      </div>
      <header className="bg-white z-10 text-herobg body-font sticky top-0">
        <div className="container mx-auto flex flex-wrap py-2 px-0 md:px-5  flex-row items-center justify-between">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-herobg p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">AETOR-TECH</span>
            </a>
          </Link>
          <nav className="hidden md:block md:ml-auto flex-wrap items-center text-base justify-between">
            <Link href="/">
              <a className="mr-5 uppercase hover:text-secondary">Home</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 uppercase hover:text-secondary">About</a>
            </Link>
            <Link href="/services">
              <a className="mr-5 uppercase hover:text-secondary">Services</a>
            </Link>
            <Link href="/portfolio">
              <a className="mr-5  uppercase hover:text-secondary">Portfolio</a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 uppercase hover:text-secondary">Contact</a>
            </Link>
          </nav>
          <div className="md:hidden -mt-2">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
