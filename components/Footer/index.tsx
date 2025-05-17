"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-8 md:pt-12 lg:pt-16"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* Quick Links */}
            <div className="w-full px-4 sm:w-1/3 lg:w-1/4">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/future_projects"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Future Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      UTPT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full px-4 sm:w-1/3 lg:w-1/3">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Contact Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-center text-base text-body-color dark:text-body-color-dark">
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <a
                      href="https://maps.app.goo.gl/mHBxJkQQxFXVw63Y9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-left"
                    >
                      R.V. College of Engineering,<br />
                      Mysore Road, Bengaluru,<br />
                      Karnataka 560059
                    </a>
                  </li>
                  <li className="flex items-center justify-center text-base text-body-color dark:text-body-color-dark">
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a href="tel:+917676331078" className="hover:underline">+91 76763 31078</a>
                  </li>
                  <li className="flex items-center justify-center text-base text-body-color dark:text-body-color-dark">
                    <svg
                      className="mr-3 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:frequencyclub@rvce.edu.in" className="hover:underline">frequencyclub@rvce.edu.in</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full px-4 sm:w-1/3 lg:w-1/4">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Connect with us
                </h3>
                <div className="flex items-center justify-center space-x-8">
                  <Link
                    href="https://www.instagram.com/frequencyclub_rv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram-link"
                    className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/frequency-club-rvce/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin-link"
                    className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-6">
            <p className="text-center text-base text-body-color dark:text-white">
              Made with ❤️ by Team Frequency • © 2025
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
