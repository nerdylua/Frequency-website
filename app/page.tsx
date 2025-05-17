import EventsOne from "@/components/Events_achievements/EventsAchievements1";
import EventsTwo from "@/components/Events_achievements/EventsAchievements2";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import About from "@/components/about";
import Hero from "@/components/Hero";
import Photo from "@/components/about/index2";
import Projects from "@/components/projects/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequency",
  description: "This is Home for Frequency",
  // other metadata
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
      <Projects />
      <Contact />
    </>
  );
}
