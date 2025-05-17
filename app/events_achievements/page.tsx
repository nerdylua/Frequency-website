import EventSectionOne from "@/components/Events_achievements/EventsAchievements1";
import EventSectionTwo from "@/components/Events_achievements/EventsAchievements2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Page | Frequency",
  description: "This is Events and Achievements Page for Frequency club",
  // other metadata
};

const EventsPage = () => {
  return (
    <>
      <EventSectionOne />
      <EventSectionTwo />
    </>
  );
};

export default EventsPage;
