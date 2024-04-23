"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "./ui/Button";
import Berrynet from "@/components/svg/berrynet";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navlink } from "../constants/";
import { HamburgerMenu } from "@/components/design/Header";
import MenuSvg from "@/components/svg/menu";
export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between  border-b border-n-1/20 lg:bg-n-13/90 lg:backdrop-blur-sm px-6 py-4 ${
          openNavigation ? "bg-n-13" : "bg-n-13/90 backdrop-blur-sm"
        }`}
      >
        <Link href={"/"}>
          <Image
            className="fill-white"
            src={"berrynet-01.svg"}
            width={140}
            height={30}
            alt="logo"
          />
        </Link>
        <motion.nav
          initial={{ opacity: "0" }}
          animate={{ opacity: "100%" }}
          className={`${openNavigation ? "flex" : "hidden"} fixed top-14 left-0 right-0 bottom-0 bg-n-12 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row max-sm:gap-6">
            {navlink.map((link) => (
              <Link
                className={`relative uppercase text-sm font-semibold px-4 py-2 hover:text-yellow-500 rounded-xl transition-color ease-linear duration-300`}
                key={link.key}
                href={link.pathname}
                onClick={handleClick}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </motion.nav>
        <div className="flex items-center">
          <ButtonLink
            className="hidden lg:flex text-sm gradient"
            href={"/"}
            icon={<Rocket />}
            text="SUBSCRIBE NOW!"
          />
          <button
            className="lg:hidden md:flex p-2 border border-yellow-500 rounded-md"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </header>
    </>
  );
}
