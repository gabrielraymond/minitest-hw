"use client";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";
import { usePathname } from "next/navigation";

const NavItem = ({ title, url }: any) => {
  const pathname = usePathname();
  return (
    <li className="relative ">
      <Link href={url} className={`flex justify-center ${pathname !== url ? " text-[rgba(255,255,255,0.6)]" : ""}`}>
        <Button style="transparent" size="navItem">{title}</Button>
        <div
          className={`${
            pathname === url ? "" : "hidden"
          } absolute w-5 bg-wibu-50 bottom-1 h-[2px] text-center`}
        ></div>
      </Link>
    </li>
  );
};

export default NavItem;
