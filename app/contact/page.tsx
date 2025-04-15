import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Frequency",
  description: "This is Contact Page for Frequency club",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="blah blah blah"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
