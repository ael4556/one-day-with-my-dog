import Tips from "../tips";

import dog from "../../Images/story_17/dog-eat.gif";
import bg_dog from "../../Images/story_17/done.png";
import feed from "../../Images/story_17/slow-feed.png";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story17() {

  useEffect(() => {

  }, []);

  return (
    <div className=" flex flex-col">
      <div className=" flex flex-col justify-center">
        <div className=" font-sans text-center text-[3vw] font-semibold">
          <p className=" text-[#6E8CC5]">บาร์ฟ คือ</p>
        </div>
        <div className=" font-sans text-center text-[1.88vw] font-normal pt-[2.5vw]">
          <p className=" text-black">
            อาหารที่มีส่วนประกอบมาจากเนื้อ อวัยวะภายใน และกระดูกสัตว์
            รวมถึงไข่และผลิตภัณฑ์นม
          </p>
          <p className=" text-black pt-[0.1vw]">
            พืชผักผลไม้ ที่ไม่ผ่านความร้อน โดยจุดประสงค์คือ
            การเลียนแบบการกินอาหารตามธรรมชาติ
          </p>
          <p className=" text-black pt-[0.1vw]">
            ของสัตว์ และทำให้สัตว์มีสุขภาพร่างกายที่แข็งแรง ไม่เสี่ยงต่อโรคอ้วน
            และมีอายุที่ยืนยาว
          </p>
        </div>
      </div>
      <div className=" pt-[10vw]">
        <div className="flex justify-center">
          <div className=" absolute z-40 pt-[2.5vw]">
            <img className=" w-[50vw]" src={dog} />
          </div>
        </div>
        <div className="flex justify-center">
          <img className=" z-0 w-[90vw]" src={bg_dog} />
        </div>
      </div>
      <div className="flex pt-[20vw] justify-end">
        <div className="pr-[10vw] z-10">
          <img className="w-[20vw]" src={feed} />
        </div>
        <div className=" pr-[10vw] z-50">
          <Tips
            text="แนะนำให้ใช้ชามแบบ Slow Feeder เพื่อลด"
            text2="ความเสี่ยงจากการสำลัก และการท้องอืด"
          />
        </div>
      </div>
    </div>
  );
}

export default Story17;
