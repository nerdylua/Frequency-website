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
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-white mb-12 text-left border-l-4 border-primary pl-4">
        Club Achievements
      </h2>
      <ul className="space-y-6 text-gray-300 text-lg">
        {clubAchievements.map((achievement, idx) => (
          <li
            key={idx}
            className="relative pl-6 hover:text-primary transition-colors cursor-default"
          >
            <span className="absolute left-0 top-1.5 h-5 w-1 rounded bg-primary"></span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ClubAchievementsList;
