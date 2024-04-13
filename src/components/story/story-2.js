import { useEffect, useRef } from "react";

import SunMorning from "../../Images/sun-morning.png";

import Sunset from "../../components/sunset";
import ClockTop from "../clock";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story2() {
  
  const text_story2_1Ref = useRef();


  useEffect(() => {
    const text_story2_1 = text_story2_1Ref.current;

    gsap.fromTo(
      text_story2_1,
      { opacity: 0, scale : 0.9},
      {
        opacity: 1,
        scale : 1,
        duration: 2,
        delay: 0,
        scrollTrigger: {
          trigger: text_story2_1,
          scrub : true,
          start : "700px 90%",
          end : "500px 50%",

          /* markers : true, */    
        },
      }
    );

  }, []);

  return (
    <div className=" flex flex-col justify-center">
      
      <Sunset sunlight={SunMorning} />
      {/* Last Text */}
      <div
        style={{
          paddingTop: "80vh",
        }}
        className="flex flex-col justify-center text-3xl"
        ref={text_story2_1Ref}
      >
        <p>
          เช้าวันหยุดอันสดใสได้เริ่มต้นขึ้นด้วยการทักทายจากมีตังค์เจ้าตูบแสนน่ารัก
        </p>
        <p className="pt-[1.25%]">
          ที่ทักทายด้วยการเช็ดหน้าให้เจ้านายด้วยลิ้นแถมพร้อมน้ำลายของเจ้ามีตังค์
        </p>
      </div>
    </div>
  );
}

export default Story2;
