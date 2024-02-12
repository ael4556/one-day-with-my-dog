import Navbar from "./components/navbar/navbar";
import "./App.css";

import cover from "./Images/cover.jpg";
import sleep_night from "./Images/sleep-whit-dog-night.jpg";
import logo_dog from "./Images/logo-onday-with-mydog.png";
import door_a1 from "./Images/door-animation-1.png";
import sun from "./Images/sun-morning.png";
import cloundLeftTop from "./Images/cloud-1.png";
import cloundRight from "./Images/cloud-2.png";
import cloundLeftBottom from "./Images/cloud-3.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Create Ref for animation
  const sunRef = useRef();
  const cloundLeftTopRef = useRef();
  const cloundRightRef = useRef();
  const cloundLeftBottomRef = useRef();
  const textRef = useRef();
  const text2Ref = useRef();
  //Animation
  useEffect(() => {
    //get Ref

    const text = textRef.current;
    const text2 = text2Ref.current;

    const el = sunRef.current;
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
      el,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
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
    <div className="font-sans">
      <Navbar />
      {/* Start Web contents*/}
      <div
        className="h-full w-full flex flex-col"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          height: "800vh",
          backgroundSize: "contain",
        }}
      >
        {/* Dog Logo*/}
        <div className="h-screen flex items-center justify-center">
          <img src={logo_dog} alt="Logo" className=" w-2/4" />
        </div>
        {/* Sun and Clound*/}
        <div className="flex flex-col ">
          {/* Stage 1 Opendoor */}
          <div
            className="bg-center"
            style={{
              paddingTop: "120vh",
            }}
          >
            <div className="flex flex-row justify-around">
              <img src={door_a1} alt="Door_A1" className=" w-1/5" />
              <div
                ref={textRef}
                className="flex flex-col justify-start text-white pt-56"
              >
                <h1 className="text-5xl">คุณที่แสนเหนื่อยล้า...</h1>
                <p className="text-3xl pt-12">
                  กับร่างกายที่อ่อนแรงกลับบ้านมา ด้วยใจที่ห่อเหี่ยว
                </p>
                <p className="text-3xl">
                  จากการโหมงานหนัก เปิดประตูเข้าห้องนอนที่มืดสนิท
                </p>
                <p className="text-3xl">แล้วตรงดิ่งไปที่เตียง</p>
              </div>
            </div>
          </div>
          {/* Stage 2 Opendoor */}
          <div
            className="w-full bg-center"
            style={{
              backgroundImage: `url(${sleep_night})`,
              backgroundRepeat: "no-repeat",
              height: "130vh",
            }}
          >
            <div className="flex flex-col  text-black pt-56 pl-64">
              <p className="text-3xl pt-32">
                หลังจากนั้นคุณก็ฟุบลงบนที่นอนแล้วหลับไป
              </p>
              <p className="text-3xl">
                โดยไม่ได้สังเกตุว่ามีสายตาคู่หนึ่งจ้องมองอยู่
              </p>
              <p className="text-3xl">
                เพราะในวันนี้คุณได้หมดแรงกับงานที่ทำแล้ว
              </p>
            </div>
          </div>

          {/* 7.00 Clock */}
        </div>
        <div className="flex justify-end">
          <div className="text-4xl pr-[15%]">7.00 น</div>
        </div>

        <div className="flex justify-center">
          <img
            className="absolute left-[20%]"
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
        </div>
      </div>
    </div>
  );
}

export default App;
