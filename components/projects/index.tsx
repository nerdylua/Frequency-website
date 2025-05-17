import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Explore cutting-edge AI projects including computer vision, natural language processing, and predictive analytics.",
      image: "/images/projects/ai-ml.jpg",
      features: [
        "Computer Vision Applications",
        "Natural Language Processing",
        "Predictive Analytics",
        "Deep Learning Models",
        "AI-Powered Automation"
      ]
    },
    {
      id: 2,
      title: "Web Development",
      description: "Modern web applications using the latest technologies and frameworks for optimal performance and user experience.",
      image: "/images/projects/web-dev.jpg",
      features: [
        "Full-Stack Applications",
        "Progressive Web Apps",
        "Real-time Applications",
        "E-commerce Solutions",
        "API Development"
      ]
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      image: "/images/projects/mobile-dev.jpg",
      features: [
        "Cross-platform Development",
        "Native Mobile Apps",
        "Mobile UI/UX Design",
        "App Performance Optimization",
        "Mobile Security"
      ]
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      description: "Scalable cloud solutions and automated deployment pipelines for efficient software delivery.",
      image: "/images/projects/cloud-devops.jpg",
      features: [
        "Cloud Architecture",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Cloud Security"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Future Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark">
            Explore our upcoming projects across various technology domains. Join us in building the future of technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              data-wow-delay=".1s"
            >
              <div className="relative block aspect-[37/22] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-body-color dark:text-body-color-dark">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
  