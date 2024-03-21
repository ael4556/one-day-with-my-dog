import Emergency from "../../Images/story_14/emergency.gif";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story14() {
    
    useEffect(() => {
      

    }, []);
    return (
        <div className=" pt-[15%] flex flex-col">
            <img className="" src={Emergency}/>
        </div>
    );
  }
  
  export default Story14;
  