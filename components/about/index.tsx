import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import verticalsData from "./verticalsData";

const Features = () => {
  return (
    <>
      {/* --- Main Club Info Section --- */}
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What our club is about"
            paragraph="We are the 'To Be Engineers' who bridge problems focussing on solutions using AIML, software and hardware"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <SingleFeature key={feature.id || `feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Meet Our Verticals Section --- */}
      <section id="verticals" className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Meet Our Verticals"
            paragraph="Explore how each vertical empowers students through hands-on learning and real-world projects"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {verticalsData.map((feature, index) => (
              <SingleFeature key={feature.id || `vertical-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
