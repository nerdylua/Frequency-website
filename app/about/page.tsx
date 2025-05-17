import AboutOne from "@/components/about/index";
import AboutTwo from "@/components/about/index2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Frequency",
  description: "This is About Page for Frequency club",
};

const EventsPage = () => {
  return (
    <>
    <AboutOne />
    <AboutTwo />
    </>
  );
};

export default EventsPage;