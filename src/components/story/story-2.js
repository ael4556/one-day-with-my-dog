import { useEffect, useRef } from "react";

import SunMorning from "../../Images/sun-morning.png";

import Sunset from "../../components/sunset";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story2() {

  useEffect(() => {

  }, []);

  return (
    <div className=" flex flex-col justify-center">
      
      <Sunset sunlight={SunMorning} />
      {/* Last Text */}
      <div
        className="flex flex-col justify-center text-[1.8vw] pt-[45vw]"
      >
        <p>
          เช้าวันหยุดอันสดใสได้เริ่มต้นขึ้นด้วยการทักทายจากมีตังค์เจ้าตูบแสนน่ารัก
        </p>
        <p className="pt-[1vw]">
          ที่ทักทายด้วยการเช็ดหน้าให้เจ้านายด้วยลิ้นแถมพร้อมน้ำลายของเจ้ามีตังค์
        </p>
      </div>
    </div>
  );
}

export default Story2;
