const clubAchievements = [
  "Increased club membership by 50% through targeted outreach and engaging events.",
  "Organized and led 10+ successful events, including hackathons, workshops, and tech debates.",
  "Developed a cross-platform mobile app that expanded the club’s reach to both iOS and Android users.",
  "Implemented a CI/CD pipeline for club projects, reducing deployment time by 50%.",
  "Mentored junior members in modern tech stacks, boosting team productivity by 20%.",
  "Won 1st place in the Inter-College AI Challenge, outperforming 15+ competing teams.",
];

const ClubAchievementsList = () => (
  <section className="w-full bg-[#181C25] pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Club Achievements
      </h2>
      <ul className="space-y-6 text-gray-100 text-lg">
        {clubAchievements.map((achievement, idx) => (
          <li
            key={idx}
            className="flex items-start group transition-colors duration-300"
          >
            <span
              className="mt-2 mr-4 h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 to-violet-400 shadow-md
                transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-violet-400/40"
            ></span>
            <span className="transition-colors duration-300 group-hover:text-sky-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ClubAchievementsList;
