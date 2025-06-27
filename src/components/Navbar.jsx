import { useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navSections } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [isSectionSelected, setIsSectionSelected] = useState("");
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full bg-primary py-5 flex items-center`}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setIsSectionSelected("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Beatriz Yordaky
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navSections.map((section) => (
            <li
              key={section.id}
              className={`text-[18px] font-medium cursor-pointer hover:text-white ${
                isSectionSelected === section.title
                  ? "text-white"
                  : "text-secondary"
              }`}
              onClick={() => setIsSectionSelected(section.title)}
            >
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={isMobileMenuOpened ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
          />

          {isMobileMenuOpened && (
            <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="flex flex-col gap-4">
                {navSections.map((section) => (
                  <li
                    key={section.id}
                    className={`text-[16px] font-medium cursor-pointer ${
                      isSectionSelected === section.title
                        ? "text-white"
                        : "text-secondary"
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpened(false);
                      setIsSectionSelected(section.title);
                    }}
                  >
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
