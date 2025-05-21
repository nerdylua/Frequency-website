const clubAchievements = [
  "Won UNESCO INDIA AFRICA HACKATHON 2022 - Sai Lahari Sheerama, Anushka Agarwal",
  "Won Smart India Hackathon 2022 - Sai Lahari Sheerama, Anushka Agarwal, Vaishnavi Bhustali",
  "Multiple female club members participated in and were Pre-Finalists at Google Girl Hackathon 2023 - Anusha Jain",
  "Smart Water Saver: Arduino-based Water Level Indicator with GSM Integration in collaboration with Frequency Club - Suraj Suresh K",
  "Smart Irrigation And Web-based Platform for Farmer Welfare - Anusha Jain, Santosh Vishwanathan, Rahul Anbalagan",
  "Project Interns at IISC, Aerospace Department, CINT Lab - Anusha Jain, Sharon Thomas, Santosh Vishwanathan, Rahul Anbalagan",
  "Paper titled \"Web based application for healthy lifestyle\" at ICDCIT 12th project innovation contest - DK Bharat Reddy",
  "First Place winner at Bengaluru Mobility Challenge 2024 for Vehicle Turn Pattern Counting and Short Term Forecasting - Tarun Bhupathi"
];

const ClubAchievementsList = () => (
  <section className="w-full bg-[#181C25] dark:bg-[#181C25] bg-white py-16 md:py-20 lg:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-12 text-center">
      Our Members' Achievements
      </h1>
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
            <span className="transition-colors duration-300 group-hover:text-sky-300 text-gray-700 dark:group-hover:text-sky-300 dark:text-gray-100">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ClubAchievementsList;
