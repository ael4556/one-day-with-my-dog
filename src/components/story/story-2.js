import { useEffect, useRef } from "react";

import sun from "../../Images/sun-morning.png";
import cloundLeftTop from "../../Images/cloud-1.png";
import cloundRight from "../../Images/cloud-2.png";
import cloundLeftBottom from "../../Images/cloud-3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story2() {
  const textRef = useRef();
  const text2Ref = useRef();

  const sunRef = useRef();
  const cloundLeftTopRef = useRef();
  const cloundRightRef = useRef();
  const cloundLeftBottomRef = useRef();

  useEffect(() => {
    const text = textRef.current;
    const text2 = text2Ref.current;

    const sun = sunRef.current;
    const cloundLeft = cloundLeftTopRef.current;
    const cloundRight = cloundRightRef.current;
    const cloundLeftBottom = cloundLeftBottomRef.current;

    gsap.fromTo(
      text,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: text,
        },
      }
    );

    gsap.fromTo(
      text2,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: text2,
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
        },
      }
    );

    gsap.to(cloundLeft, {
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundLeft,
      },
    });

    gsap.to(cloundRight, {
      x: 300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundRight,
      },
    });

    gsap.to(cloundLeftBottom, {
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundLeftBottom,
      },
    });
  }, []);

  return (
    <>
      <img
        className="absolute  left-[20%]"
        ref={cloundLeftTopRef}
        src={cloundLeftTop}
        alt="sun_morning"
      />
      <img
        className="absolute w-5/6"
        ref={sunRef}
        src={sun}
        alt="sun_morning"
      />
      <img
        className="absolute right-[20%]"
        ref={cloundRightRef}
        src={cloundRight}
        alt="sun_morning"
      />
      <img
        className="absolute left-[20%]"
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
        ref={text2Ref}
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
