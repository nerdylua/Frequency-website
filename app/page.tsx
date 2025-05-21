import EventsOne from "@/components/Events_achievements/Events";
import EventsTwo from "@/components/Events_achievements/Achievements";
import ScrollUp from "@/components/Common/ScrollUp";
import Register from "@/components/Register";
import About from "@/components/about";
import Hero from "@/components/Hero";
import Photo from "@/components/about/index2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequency",
  description: "This is Home for Frequency",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Photo />
      <EventsOne />
      <EventsTwo />
      <Register />
    </>
  );
}
