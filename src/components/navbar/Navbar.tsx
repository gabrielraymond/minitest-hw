// "use client";
import React from "react";
import Logo from "./Logo";
import Button from "../button/Button";
import NavItem from "./NavItem";
import Container from "../container/Container";

const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Guests",
    url: "/guests",
  },
  {
    id: 3,
    title: "Rundown",
    url: "/rundown",
  },
  {
    id: 4,
    title: "Tenants",
    url: "/tenants",
  },
  {
    id: 5,
    title: "Promo",
    url: "/promo",
  },
  {
    id: 6,
    title: "Gallery",
    url: "/gallery",
  },
];

const Navbar = () => {
  return (
    <div className="fixed bg-[rgba(0,0,0,0.9)] w-full h-24 z-50 ">
      <div className="mx-auto top-0 h-full flex text-white justify-between items-center w-full   sm:max-w-xl md:max-w-3xl lg:max-w-[1024px] responsive-lg:max-w-[1280px] responsive-xl:max-w-[1500px] responsive-2xl:max-w-[1800px] px-4 responsive-2xl:px-12">
        <div>
          <Logo />
        </div>
        <div>
          <div>
            <ul className="flex">
              {menu.map((item: any) => (
                <NavItem title={item.title} url={item.url} key={item.id} />
              ))}
              <li className="relative ">
                <div className="flex justify-center">
                  <Button style="transparent" size="navItem">
                    <div className="flex gap-2 items-center text-[rgba(255,255,255,0.6)]">
                      <span>More</span>
                      <div className="border-r-2 border-b-2 rotate-45 w-2 h-2"></div>
                    </div>
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button>Get your ticket</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
