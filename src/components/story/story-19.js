
import BG from "../../Images/story_19/bg-end.png";
import End from "../../Images/story_19/end.png";
import Logo from "../../Images/story_19/logo-end.png";
import Sofa from "../../Images/story_19/sofa-human-dog.png";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story19() {
    
    useEffect(() => {
      

    }, []);
    return (
      <div className=" flex flex-col justify-center">
        <div className="flex justify-center">
            <img className=" w-[45%]" src={Logo}/>
        </div>
        
        <div className=" flex flex-col justify-center">
            <div className=" flex justify-center">
                <img className=" absolute w-[100%]" src={BG}/>
            </div>
            <div className=" flex justify-center pt-[22%]">
                <img className=" absolute w-[85%] " src={Sofa}/>
            </div>
            <div className=" flex justify-center pt-[30%]">
                <img className=" absolute " src={End}/>
            </div>
        </div>
      </div>

    );
  }
  
  export default Story19;
  