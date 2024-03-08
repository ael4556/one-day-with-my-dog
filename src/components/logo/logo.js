import { useEffect, useRef } from "react";

import logo from "../../Images/logo/logo.png"
import doglogo from "../../Images/logo/Dog_Homepage.png"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Logo() {
  const typoRef = useRef();
  const dogRef = useRef();

useEffect(() => {
  const typo = typoRef.current;
  const dog = dogRef.current;

  gsap.fromTo(
    typo,
    { xPercent : -10, scale : 0.8},
    {
      xPercent: 0,
      scale : 1,
      duration: 0.5,
      delay: 0,
      scrollTrigger: {
        trigger: typo,
        toggleActions : 'restart',
        start : "-100px 0%",
        end : "-100px 0%",

        /*markers : true,*/
      },
    }
  );

  gsap.fromTo(
    dog,
    { xPercent : +10, scale : 0.8},
    {
      xPercent: 0,
      scale : 1,
      duration: 0.5,
      delay: 0,
      scrollTrigger: {
        trigger: dog,
        toggleActions : 'restart',
        start : "-400px 0%",
        end : "-400px 0%",

        /*markers : true,*/
      },
    }
  );

}, []);
  return (
    <div className="h-screen flex items-end top-[0%]">
      <img src={logo} ref={typoRef} alt="Logo" className=" w-[75%] pt-[5%] absolute left-[4%]" />
      <img src={doglogo} ref={dogRef} alt="DogLogo" className=" w-[58%] pb-[5%] absolute end-[0%]"/>
    </div>
  );
};

export default Logo;
