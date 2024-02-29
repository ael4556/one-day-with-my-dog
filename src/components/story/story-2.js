import { useEffect, useRef } from "react";

import sun from "../../Images/sun-morning.png";
import cloundLeftTop from "../../Images/cloud-1.png";
import cloundRight from "../../Images/cloud-2.png";
import cloundLeftBottom from "../../Images/cloud-3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story2() {
  
  const text_story2_1Ref = useRef();

  const sunRef = useRef();
  const cloundLeftTopRef = useRef();
  const cloundRightRef = useRef();
  const cloundLeftBottomRef = useRef();

  useEffect(() => {
    const text_story2_1 = text_story2_1Ref.current;

    const sun = sunRef.current;
    const cloundLeft = cloundLeftTopRef.current;
    const cloundRight = cloundRightRef.current;
    const cloundLeftBottom = cloundLeftBottomRef.current;

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

    gsap.fromTo(
      sun,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sun,
          toggleActions : 'restart',
          
        },
      }
    );

    gsap.to(cloundLeft, {
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundLeft,
        toggleActions : 'restart none none reset',
        
      },
    });

    gsap.to(cloundRight, {
      x: 300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundRight,
        toggleActions : 'restart none none reset',
        
      },
    });

    gsap.to(cloundLeftBottom, {
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundLeftBottom,
        toggleActions : 'restart none none reset',
        
      },
    });
  }, []);

  return (
    <>
      <img
        className="absolute  left-[20%] pt-10"
        ref={cloundLeftTopRef}
        src={cloundLeftTop}
        alt="sun_morning"
      />
      <img
        className="absolute w-5/6 pt-10"
        ref={sunRef}
        src={sun}
        alt="sun_morning"
      />
      <img
        className="absolute right-[20%] pt-10"
        ref={cloundRightRef}
        src={cloundRight}
        alt="sun_morning"
      />
      <img
        className="absolute left-[20%] pt-10"
        ref={cloundLeftBottomRef}
        src={cloundLeftBottom}
        alt="sun_morning"
      />
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
        <p className="pt-4">
          ที่ทักทายด้วยการเช็ดหน้าให้เจ้านายด้วยลิ้นแถมพร้อมน้ำลายของเจ้ามีตังค์
        </p>
      </div>
    </>
  );
}

export default Story2;
