import { useEffect, useRef } from "react";

import sleep_night from "../../Images/sleep-whit-dog-night.jpg";
import door_a1 from "../../Images/door-animation-1.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story1() {
  const textRef = useRef();

  useEffect(() => {
    const text = textRef.current;

    gsap.fromTo(
      text,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: text,
        },
      }
    );
    
  }, []);

  return (
    <div>
      <div className="bg-center">
        <div className="flex flex-row justify-around">
          <img src={door_a1} alt="Door_A1" className=" w-1/4" />
          <div
            ref={textRef}
            className="flex flex-col justify-start text-white pt-56"
          >
            <h1 className="text-5xl">คุณที่แสนเหนื่อยล้า...</h1>
            <p className="text-3xl pt-12">
              กับร่างกายที่อ่อนแรงกลับบ้านมา ด้วยใจที่ห่อเหี่ยว
            </p>
            <p className="text-3xl pt-3">
              จากการโหมงานหนัก เปิดประตูเข้าห้องนอนที่มืดสนิท
            </p>
            <p className="text-3xl pt-3">แล้วตรงดิ่งไปที่เตียง</p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center"
        style={{
          backgroundImage: `url(${sleep_night})`,
          backgroundRepeat: "no-repeat",
          height: "130vh",
        }}
      >
        <div className="flex flex-col  text-black pt-56 pl-28 2xl:pl-64">
          <p className="text-3xl pt-32">
            หลังจากนั้นคุณก็ฟุบลงบนที่นอนแล้วหลับไป
          </p>
          <p className="text-3xl pt-3">
            โดยไม่ได้สังเกตุว่ามีสายตาคู่หนึ่งจ้องมองอยู่
          </p>
          <p className="text-3xl pt-3">เพราะในวันนี้คุณได้หมดแรงกับงานที่ทำแล้ว</p>
        </div>
      </div>
    </div>
  );
}

export default Story1;
