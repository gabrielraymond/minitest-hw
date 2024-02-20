import React from "react";
import Logo from "../navbar/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../button/Button";

const footerData = [
  {
    id: 1,
    title: "Discover",
    menu: [
      {
        id: 1,
        title: "Guest Stars",
        url: "/guests",
      },
      {
        id: 2,
        title: "Tenants",
        url: "/tenants",
      },
      {
        id: 3,
        title: "Tenant Registration",
        url: "/exhibit",
      },
      {
        id: 4,
        title: "Promote Your Brand",
        url: "/bran-promotion",
      },
      {
        id: 5,
        title: "Gallery",
        url: "/gallery",
      },
      {
        id: 6,
        title: "Get Your Ticket",
        url: "/ticket",
      },
    ],
  },
  {
    id: 2,
    title: "Resources",
    menu: [
      {
        id: 1,
        title: "FAQ",
        url: "/faw",
      },
      {
        id: 2,
        title: "Event Guidelines",
        url: "/event-guidelines",
      },
      {
        id: 3,
        title: "Safety & Weapon Policy",
        url: "/safety-and-weapon-policy",
      },
      {
        id: 4,
        title: "Anti-Harassment Policy",
        url: "/anti-harassment-policy",
      },
    ],
  },
  {
    id: 3,
    title: "Support",
    menu: [
      {
        id: 1,
        title: "Report an Incident",
        url: "/report incident",
      },
      {
        id: 2,
        title: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    id: 4,
    title: "Legal",
    menu: [
      {
        id: 1,
        title: "Terms of Service",
        url: "/terms",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/privacy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer bg-gray-950 text-white">
      <div className="">
        <div className=" ">
          <div className="grid grid-cols-12 gap-x-8 p-24">
            <div className=" col-span-3">
              <Logo size="large" />
            </div>
            {footerData.map((item: any) => (
              <div className=" col-span-2" key={item.id}>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <ul className="flex flex-col  mt-4 text-sm text-[rgba(255,255,255,0.8)] ">
                  {item.menu.map((menu: any) => (
                    <li className="my-2 hover:text-white" key={menu.id}>
                      <Link href={menu.url}>{menu.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 justify-center items-center pb-10">
            <div className="text-white flex">
              <Button style="contactIcon">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white w-6 h-6 group-hover:text-[#ee2a7b]"
                />
              </Button>
              <Button style="contactIcon">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white w-6 h-6 group-hover:text-[#316FF6]"
                />
              </Button>
              <Button style="contactIcon">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-white w-6 h-6 group-hover:text-[#000000]"
                />
              </Button>
              <Button style="contactIcon">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white w-6 h-6 group-hover:text-[#FF0000]"
                />
              </Button>
            </div>
            <p className=" text-xs text-[rgba(255,255,255,0.6)]">
              Copyright © 2024 Indonesia Comic Con. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
