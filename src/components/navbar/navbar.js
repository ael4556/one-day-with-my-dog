import React, { useState } from "react";
import BurgerIcon from "../../Images/SVG/menu-burger.png";
import MusicButton from "./music-button";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollAction = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-end">
        <button
          className="fixed top-4 right-2 focus:outline-none hover:-translate-y-1 hover:scale-110 duration-300 rounded-full transition ease-in-out delay-50 hover:shadow-md py-2 px-2"
          onClick={toggleMenu}
        >
          <img src={BurgerIcon} alt="Menu Icon" className="w-12 h-12" />
        </button>

        {/* Mene list */}
        {menuOpen && (
          <div className="fixed top-4 right-24 bg-white p-4 shadow-md rounded-2xl">
            <ul className="text-xl font-mono ">
              <li>
                <button
                  className=" hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-2 px-6"
                  onClick={() => scrollAction("Content0")}
                >
                  Story 1
                </button>
              </li>
              <li>
                <button
                  className=" hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-2 px-6"
                  onClick={() => scrollAction("Content")}
                >
                  Story 2
                </button>
              </li>
              <li>
                <button
                  className=" hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-2 px-6"
                  onClick={() => scrollAction("Content")}
                >
                  Story 3
                </button>
              </li>
            </ul>
          </div>
        )}
        <MusicButton />
      </div>
    </>
  );
};

export default Navbar;
