import { useEffect, useRef } from "react";

import sleep_night from "../../Images/story_1/human-sleep.png";
import door_a1 from "../../Images/story_1/door-animation-1.png";
import text_png_story1 from "../../Images/SVG/text-stroke-1.png"
import dog_look from "../../Images/story_1/dogs-look-test.png"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story1() {

  useEffect(() => {

  }, []);

  return (
    <div>
      <div className=" z-[-500]">
        <div className="flex flex-row justify-around ">
          <img src={door_a1} alt="Door_A1" className=" w-[30vw]"/>
          <div
            className="flex flex-col justify-start text-white pt-[11.7vw] "
          >
            <h1 className="text-[2.5vw]">คุณที่แสนเหนื่อยล้า...</h1>
            <p className="text-[1.8vw] pt-[2.5vw]">
              กับร่างกายที่อ่อนแรงกลับบ้านมา ด้วยใจที่ห่อเหี่ยว
            </p>
            <p className="text-[1.8vw] pt-[0.62vw]">
              จากการโหมงานหนัก เปิดประตูเข้าห้องนอนที่มืดสนิท
            </p>
            <p className="text-[1.8vw] pt-3">แล้วตรงดิ่งไปที่เตียง</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img className=" w-[100vw] pt-[0vw]" src={sleep_night} alt="sleep_night" />
        <img
          className=" w-[35vw] absolute pt-[10vw] left-[10vw]"
          src={text_png_story1}
          alt="text_png_story1"
        />
        <img
          className=" w-[30vw] absolute pt-[27vw] right-[5vw]"
          src={dog_look}
          alt="text_png_story1"
        />
      </div>
    </div>
  );
}

export default Story1;
