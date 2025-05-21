import EventSectionOne from "@/components/Events_achievements/Events";
import EventSectionTwo from "@/components/Events_achievements/Achievements";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Page | Frequency",
  description: "This is Events and Achievements Page for Frequency club",
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
