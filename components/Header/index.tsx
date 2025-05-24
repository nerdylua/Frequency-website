"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

// Create a new component for the menu
const NavigationMenu = ({ 
  menuData, 
  usePathName, 
  handleNavigation, 
  handleSubmenu, 
  openIndex 
}) => {
  return (
    <ul className="block lg:flex lg:space-x-8 xl:space-x-12">
      {menuData.map((menuItem, index) => (
        <li key={index} className="group relative">
          {menuItem.path ? (
            <Link
              href={menuItem.path}
              onClick={() => handleNavigation(menuItem.path)}
              className={`flex py-1 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-2 ${
                usePathName === menuItem.path
                  ? "text-primary dark:text-white"
                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
              }`}
            >
              {menuItem.title}
            </Link>
          ) : (
            <>
              <p
                onClick={() => handleSubmenu(index)}
                className="flex cursor-pointer items-center justify-between py-2 text-lg text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
              >
                {menuItem.title}
                <span className="pl-3">
                  <svg width="25" height="24" viewBox="0 0 25 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </p>
              <div
                className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {menuItem.submenu?.map((submenuItem, index) => (
                  <Link
                    href={submenuItem.path}
                    key={index}
                    onClick={() => handleNavigation(submenuItem.path)}
                    className="block rounded py-2.5 text-base text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                  >
                    {submenuItem.title}
                  </Link>
                ))}
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let timerId;

    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
        const maxScroll = 300;
        const progress = Math.min(window.scrollY / maxScroll, 1);
        setScrollProgress(progress);
      } else {
        setSticky(false);
        setScrollProgress(0);
      }
    };

    const debouncedHandleStickyNavbar = () => {
      clearTimeout(timerId);
      timerId = setTimeout(handleStickyNavbar, 10);
    };

    window.addEventListener("scroll", debouncedHandleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", debouncedHandleStickyNavbar);
      clearTimeout(timerId);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  // Add this function to handle navigation and close menu
  const handleNavigation = (path: string) => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
        style={{
          transform: sticky
            ? `translateY(${scrollProgress * 3}px) scale(${
                1 - scrollProgress * 0.08
              })`
            : "none",
          borderRadius: sticky ? `${scrollProgress * 20}px` : "0",
          margin: sticky ? `${scrollProgress * 1.5}px auto` : "0 auto",
          maxWidth: sticky ? `calc(100% - ${scrollProgress * 40}px)` : "100%",
          boxShadow: sticky
            ? `0 ${scrollProgress * 8}px ${scrollProgress * 16}px rgba(0, 0, 0, 0.1)`
            : "none",
        }}
      >
        <div className="container">
          <div className="relative flex items-center justify-between py-1.5">
            <div className="w-16 max-w-full px-1 xl:mr-4 lg:w-20">
              <Link
                href="/"
                className={`header-logo block `}
              >
                <Image
                  src="/images/logo/white.svg"
                  alt="logo"
                  width={6}
                  height={6}
                  className="w-full dark:hidden rounded-md lg:w-20"
                />
                <Image
                  src="/images/logo/dark.svg"
                  alt="logo"
                  width={6}
                  height={6}
                  className="hidden w-full dark:block rounded-md lg:w-20"
                />
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <nav
                id="navbarCollapse"
                className={`navbar w-auto rounded border-[3px] border-body-color/50 bg-white px-2.5 py-0.5 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "absolute left-1/2 top-full z-30 -translate-x-1/2 visibility opacity-100"
                    : "absolute left-1/2 top-[120%] z-30 -translate-x-1/2 invisible opacity-0"
                } lg:relative lg:top-0 lg:left-0 lg:translate-x-0`}
              >
                <NavigationMenu
                  menuData={menuData}
                  usePathName={usePathName}
                  handleNavigation={handleNavigation}
                  handleSubmenu={handleSubmenu}
                  openIndex={openIndex}
                />
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <div className="lg:hidden">
                <ThemeToggler />
              </div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="block rounded-lg px-2.5 py-[3px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[6px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-7px] -rotate-45" : " "
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-end pr-3 lg:pr-0">
              <div className="hidden lg:block">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
