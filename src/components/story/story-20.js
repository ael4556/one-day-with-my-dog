import ArrowUp from "../../Images/story_20/arrow_circle_up.png"
import Back from "../../Images/story_20/back-to-top.png";
import Our from "../../Images/story_20/our.png";
import P_Ael from "../../Images/story_20/ael-profile.png";
import P_Cap from "../../Images/story_20/captain-profile.png";
import P_Saru from "../../Images/story_20/saru-profile.png";
import C_Ael from "../../Images/story_20/ael-contact.png";
import C_Cap from "../../Images/story_20/captain-contact.png";
import C_Saru from "../../Images/story_20/saru-contact.png";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story20() {
    const scrollAction = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    useEffect(() => {
      

    }, []);
    return (
      <div className=" flex flex-col pb-[5%]">
        <div className=" flex flex-col">
            <div className="flex flex-col pt-[15%]">
                <div className="flex justify-center animate-bounce">
                    <img className="w-[5%] hover:scale-110 transition ease-in-out delay-50 duration-300 cursor-pointer" src={ArrowUp} onClick={() => scrollAction("Home")}/>
                </div>
                    
            </div>
            <div className=" flex justify-center pt-[1%]">
                <img className="w-[10%]" src={Back}/>
            </div>
        </div>

        <div className=" flex justify-center pt-[15%]">
            <img src={Our}/>
            <div id="Creater"></div>
        </div>
        
        <div className=" grid grid-cols-3 pt-[2%]">
            <div className=" flex flex-col">
            <div className="flex justify-center">
                    <img className=" w-[45%]" src={P_Cap}/>
                </div>
                <div className="flex justify-center">
                    <img className=" w-[40%]" src={C_Cap}/>
                </div>
            </div>
            <div className=" flex flex-col">
                <div className="flex justify-center">
                    <img className=" w-[45%]" src={P_Saru}/>
                </div>
                <div className="flex justify-center">
                    <img className=" w-[40%]" src={C_Saru}/>
                </div>
            </div>
            <div className=" flex flex-col justify-center">
            <div className="flex justify-center">
                    <img className=" w-[45%]" src={P_Ael}/>
                </div>
                <div className="flex justify-center">
                    <img className=" w-[40%]" src={C_Ael}/>
                </div>
            </div>
        </div>

      </div>

    );
  }
  
  export default Story20;
  