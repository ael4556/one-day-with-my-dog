
import BG from "../../Images/story_19/bg-end.png";
import End from "../../Images/story_19/end.png";
import Logo from "../../Images/story_19/logo-end.png";
import Sofa from "../../Images/story_19/sofa-human-dog.png";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story19() {
    const text_story19_1Ref = useRef ();
    const logo_1Ref = useRef ();

    useEffect(() => {
    const text_story19_1 = text_story19_1Ref.current;
    const logo_1 = logo_1Ref.current;

    gsap.fromTo(
        text_story19_1,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story19_1,
            scrub: true,
            start: "100px 100%",
            end: "200px 70%",

          },
        }
      );

      gsap.fromTo(
        logo_1,
        {scale: 0.8 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: logo_1,
            scrub: true,
            start: "100px 90%",
            end: "200px 60%",
            
          },
        }
      );

    }, []);
    return (
      <div className=" flex flex-col justify-center">
        <div className="flex justify-center">
            <img className=" w-[45%]" src={Logo} ref={logo_1Ref}/>
        </div>
        
        <div className=" flex flex-col justify-center">
            <div className=" flex justify-center">
                <img className=" absolute w-[100%]" src={BG}/>
            </div>
            <div className=" flex justify-center pt-[22%]">
                <img className=" absolute w-[85%] " src={Sofa}/>
            </div>
            <div className=" flex justify-center pt-[30%]" ref={text_story19_1Ref}>
                <img className=" absolute w-[30vw]" src={End}/>
            </div>
        </div>
      </div>

    );
  }
  
  export default Story19;
  