import EventSectionOne from "@/components/about/index";
import EventSectionTwo from "@/components/about/index2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Frequency",
  description: "This is About Page for Frequency club",
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