import React, { useState, useEffect, useRef } from "react";
import BurgerIcon from "../../Images/SVG/menu-burger.png";
import MusicButton from "./music-button";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollAction = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={navbarRef} className="flex items-center justify-end z-[5000]">
        <button
          className="fixed top-[0.833vw] right-[0.416vw] focus:outline-none hover:scale-110 duration-300 rounded-full transition ease-in-out delay-50 hover:shadow-md py-[0.4166vw] px-[0.4166vw]"
          onClick={toggleMenu}
        >
          <img src={BurgerIcon} alt="Menu Icon" className="w-[6.5vw] h-[6.5vw] lg:w-[4.5vw] lg:h-[4.5vw] md:w-[4.5vw] md:h-[4.5vw] xl:w-[2.5vw] xl:h-[2.5vw]" />
        </button>

        {/* Mene list */}
        {menuOpen && (
          <div className="fixed top-[0.833vw] right-[9vw] lg:right-[7vw] xl:right-[5vw] md:right-[7vw] bg-white p-[0.833vw] shadow-md rounded-[1vw] z-[5000] ">
            <ul className="text-[2.4vw] font-Prompt font-normal text-black ">
            <li>
                <button
                  className=" w-[20vw] h-[5vw] border-[0.15625vw] border-gray-300 hover:text-white transition ease-in-out delay-50 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-[0.4166vw] px-[1.25vw]"
                >
                  <a href="https://home-oneday-with-mydog.netlify.app">
                    หน้าหลัก
                  </a>
                </button>
              </li>
              <li className="pt-[0.3vw]">
                <button
                  className=" w-[20vw] h-[5vw] border-[0.15625vw] border-gray-300 hover:text-white transition ease-in-out delay-50 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-[0.4166vw] px-[1.25vw]"
                  onClick={() => scrollAction("Story_2")}
                >
                  เวลา 7:00 น.
                </button>
              </li>
              <li className="pt-[0.3vw]">
                <button
                  className=" w-[20vw] h-[5vw] border-[0.15625vw] border-gray-300 hover:text-white transition ease-in-out delay-50 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-[0.4166vw] px-[1.25vw]"
                  onClick={() => scrollAction("Story_7")}
                >
                  เวลา 13:30 น.
                </button>
              </li>
              <li className="pt-[0.3vw]">
                <button
                  className=" w-[20vw] h-[5vw] border-[0.15625vw] border-gray-300 hover:text-white transition ease-in-out delay-50 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-[0.4166vw] px-[1.25vw]"
                  onClick={() => scrollAction("Story_11")}
                >
                  เวลา 16:30 น.
                </button>
              </li>
              <li className="pt-[0.3vw]">
                <button
                  className=" w-[20vw] h-[5vw] border-[0.15625vw] border-gray-300 hover:text-white transition ease-in-out delay-50 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-[0.4166vw] px-[1.25vw]"
                  onClick={() => scrollAction("Story_15")}
                >
                  เวลา 18:00 น.
                </button>
              </li>
              <li className="pt-[0.3vw]">
                <button
                  className=" w-[20vw] h-[5vw] border-[0.15625vw] border-gray-300 hover:text-white transition ease-in-out delay-50 hover:scale-110 hover:bg-zinc-500 duration-300 rounded-full py-[0.4166vw] px-[1.25vw]"
                  onClick={() => scrollAction("Creater")}
                >
                  ผู้จัดทำ
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
