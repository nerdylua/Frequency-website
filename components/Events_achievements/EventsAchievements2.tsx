const clubAchievements = [
  "Winners of UNESCO India Africa Hackathon 2022 and Smart India Hackathon 2022.",
  "Presented at the 9th International Conference on Research into Design (ICoRD 2023, IISc) with the paper 'Self-defence Gadget for Women: Design and Development'"
  ,"Published in IEEE journals and conferences on innovation in computing, electrical, and electronics",
  "Winners of the Bengaluru Mobility Challenge 2024 for 'Vehicle Turn Pattern Counting and Short Term Forecasting'."
  ,"Multiple podium finishes in major hackathons including RVITM, RNSIT, Hack4Soc IEEE RVCE, ICHack IEEE BMS, Silicon Rush, Centurition Foss United, JITHack, RV AI, Hashcode PES, Hackoverflow RNSIT AIML, IEEE NITK embedathon, Neo-Apac, and Bangalore Web3 hackathon"
  ,"Sent multiple female club members to participate in the Google Girl Hackathon 2023, with a member reaching Pre-Finalist status"
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
