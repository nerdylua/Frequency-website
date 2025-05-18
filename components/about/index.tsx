import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import verticalsData from "./verticalsData";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { GlareCard } from "@/components/ui/glare-card";

const Features = () => {
  return (
    <>
      {/* --- Main Club Info Section --- */}
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What our club is about"
            paragraph="Join our vibrant tech community to build real-world projects, explore cutting-edge tech, and participate in top hackathons and research."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ml-20">
            {featuresData.map((feature, index) => (
              <GlareCard key={feature.id || `feature-${index}`} className="justify-self-center">
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-3xl text-primary">
                    {typeof feature.icon === "string" ? feature.icon : <span>{feature.icon}</span>}
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-white dark:text-white text-center">{feature.title}</h3>
                  <p className="text-base !leading-relaxed text-white dark:text-neutral-400 text-center">{feature.paragraph}</p>
                </div>
              </GlareCard>
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
            mb="-30px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {verticalsData.map((feature, index) => (
              <CardContainer key={feature.id || `vertical-${index}`} className="h-full">
                <CardBody className="group/card relative h-auto  w-auto !p-6 ">
                  <CardItem translateZ="50">
                    <SingleFeature feature={feature} />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
