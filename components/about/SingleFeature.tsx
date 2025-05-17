import { Feature } from "@/types/feature";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <BackgroundGradient className="rounded-[22px] h-full p-6 bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-3xl text-primary">
          {typeof icon === "string" ? icon : <span>{icon}</span>}
        </div>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">{title}</h3>
        <p className="text-base text-body-color dark:text-neutral-400">{paragraph}</p>
      </div>
    </BackgroundGradient>
  );
};

export default SingleFeature;
