import { useEffect, useRef } from "react";

import logo from "../../Images/logo/logo.png"
import doglogo from "../../Images/logo/Dog_Homepage.png"
import cover from "../../Images/logo/bg-cover-copy.png";

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
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: typo,
        toggleActions : 'restart',
        

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
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: dog,
        toggleActions : 'restart',
        

        /*markers : true,*/
      },
    }
  );

}, []);
  return (
    <div className="h-[100vw] flex items-end">
      <img src={logo} ref={typoRef} alt="Logo" className=" w-[70vw] absolute left-[4%] top-[4vw]" />
      <img src={doglogo} ref={dogRef} alt="DogLogo" className=" w-[58vw] absolute end-[0%] top-[8vw]"/>
      <img src={cover} className="w-[100vw] absolute -z-50 top-0"/>
    </div>
  );
};

export default Logo;
