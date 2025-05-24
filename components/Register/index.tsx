import { Banner2 } from '@/components/ui/banner';

const Register = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <Banner2
                title="Registration Dates to be Announced Soon!"
                description="The Treasure Hunt registration dates are being finalized. Please check back later for updates and registration details."
                buttonText="Visit Home Page"
                buttonUrl="/"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
