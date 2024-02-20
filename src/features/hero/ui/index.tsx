import Container from "@/components/container/Container";
import TitleHeader from "@/components/title/TitleHeader";
import React from "react";
import GuestCarousel from "./components/GuestCarousel";
import RundownCarousel from "./components/RundownCarousel";
import HeroSession from "./components/HeroSession";

const Hero = () => {
  return (
    <div className=" pt-28  h-full">
      <HeroSession />

      <div className=" mt-32">
        <Container>
          <TitleHeader text="GUEST STARS" size="large" />
        </Container>
        <GuestCarousel />
      </div>

      <div className=" mt-32">
        <Container>
          <TitleHeader text="RUNDOWN" size="large" />
        </Container>
        <RundownCarousel />
      </div>
    </div>
  );
};

export default Hero;
