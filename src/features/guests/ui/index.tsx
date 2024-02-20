import Container from "@/components/container/Container";
import GuestCard from "@/components/guestCard/GuestCard";
import TitleHeader from "@/components/title/TitleHeader";
import React from "react";

const GuestsPage = () => {
  return (
    <Container>
      <div className=" pt-36  h-full">
        <TitleHeader text="Guests" />
        <div className=" mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GuestsPage;
