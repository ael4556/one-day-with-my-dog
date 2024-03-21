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
            <div className="flex flex-col">
                <div className=" flex justify-center">
                    <img className="w-[80%]" src={Emergency}/>
                </div>
                <div className=" font-sans text-3xl">
                    <p className="">มีเหตุการณ์ไม่คาดคิด มีตังค์ดันทำท่าเหมือนจะอึ</p>
                    <p className="pt-[1%]">คุณรีบหันไปด้วยความตกใจ พร้อมกับทำตาโต</p>
                </div>  
            </div>
            
            

        </div>
    );
  }
  
  export default Story14;
  