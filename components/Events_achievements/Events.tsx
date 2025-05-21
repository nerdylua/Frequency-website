import Image from "next/image";

const clubActivities = [
  {
    img: "/images/activities/hack-the-night.jpg",
    alt: "Hack the Night",
    title: "Hack the Night",
    desc: "An overnight hackathon for creative minds.",
  },
  {
    img: "/images/activities/workshop.png",
    alt: "Tech Workshop",
    title: "Tech Workshop",
    desc: "Hands-on sessions on trending tech.",
  },
  {
    img: "/images/activities/ai-showdown.png",
    alt: "ChatGPT vs Bard",
    title: "ChatGPT vs Bard",
    desc: "AI debate and demo night.",
  },
  {
    img: "/images/activities/coding-marathon.jpg",
    alt: "Softwareaholic S1",
    title: "Softwareaholic S1",
    desc: "Pilot episode on softwareaholics.",
  },
  {
    img: "/images/activities/recruitment.jpg",
    alt: "Recruitment Drive",
    title: "Recruitment Drive",
    desc: "Annual event for aspiring engineers.",
  },
  {
    img: "/images/activities/quiz-night.png",
    alt: "Hardware ACE 0",
    title: "Hardware ACE 0",
    desc: "Workshop on Hardware Technologies.",
  },
];

const ClubActivitiesGallery = () => (
  <section className="w-full bg-[#181C25] dark:bg-[#181C25] bg-white py-16 md:py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-white dark:text-white text-gray-800 mb-12 text-center">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10">
        {clubActivities.map((activity, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg bg-white/10 hover:scale-105 transition-transform duration-200 flex flex-col dark:bg-white/10 bg-gray-100/50"
          >
            <div className="relative w-full h-64">
              <Image
                src={activity.img}
                alt={activity.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white dark:text-white text-gray-800">{activity.title}</h3>
              <p className="text-gray-200 dark:text-gray-200 text-gray-700">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClubActivitiesGallery;
