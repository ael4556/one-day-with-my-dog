
import sink from "../../Images/story_18/sink.png";
import ball from "../../Images/story_18/ball.png";
import blow from "../../Images/story_18/blow.png";
import frisbee from "../../Images/story_18/frisbee.png";
import dishwash from "../../Images/story_18/dishwashing.png";

import Tips from "../tips";
import Chat from "../message";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story18() {
    
    useEffect(() => {
      

    }, []);
    return (
      <div className=" flex flex-col">
        <div className=" flex flex-col pt-[10%]">
          <div className=" flex flex-col-2 gap-[5%] justify-center">
            <div className=" flex justify-start">
              <img className="w-[90%]" src={sink}/>
            </div>
            <div className="flex justify-end pl-[10%] pt-[10%]">
              <div className=" flex flex-col font-sans text-3xl">
                <p className="">
                เวลาผ่านไปไม่นาน จากจานที่เต็มไปด้วยอาหาร
                </p>
                <p className="pt-[1.25%]">
                  ก็ว่างลง คุณนำจานข้าวมีตังค์ไปล้าง และไม่ลืม
                </p>
                <p className="pt-[1.25%]">
                  ที่จะแวะหยิบบอลกับจานร่อนที่มีตังค์ได้เล่นไป
                </p>
                <p className="pt-[1.25%]">
                  วันนี้เพื่อความสะอาด
                </p>
              </div>
            </div>  
          </div>
          <div className="absolute pt-[18%] pl-[30%]">
              <img className="" src={dishwash}/>
            </div>
            <div className="absolute pt-[27%] pl-[50%]">
              <img className=" " src={ball}/>
            </div>
            <div className="absolute pt-[27%] pl-[65%]">
              <img className=" " src={frisbee}/>
            </div>
            <div className="absolute pt-[27%] pl-[80%]">
              <img className=" " src={blow}/>
            </div>
        </div>

      </div>

    );
  }
  
  export default Story18;
  