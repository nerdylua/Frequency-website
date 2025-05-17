import Project from "@/components/projects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future Projects | Frequency",
  description: "Explore our upcoming projects across various technology domains including AI/ML, Web Development, Mobile Development, and Cloud & DevOps.",
  // other metadata
};

const FutureProjectsPage = () => {
  return (
    <>
      <Project />
    </>
  );
};

export default FutureProjectsPage;