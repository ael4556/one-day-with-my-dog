import { useEffect, useRef } from "react";

import sleep_night from "../../Images/story_1/human-sleep.png";
import door_a1 from "../../Images/story_1/door-animation-1.png";
import text_png_story1 from "../../Images/SVG/text-stroke-1.png"
import dog_look from "../../Images/story_1/dogs-look-test.png"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story1() {
  const text_story1_1Ref = useRef();
  const text_story1_2Ref = useRef();
  const door_1Ref = useRef();
  const doglookRef = useRef();

  useEffect(() => {
    const text_story1_1 = text_story1_1Ref.current;
    const text_story1_2 = text_story1_2Ref.current;
    const door_1 = door_1Ref.current;
    const doglook = doglookRef.current;

    gsap.fromTo(
      text_story1_1,
      { opacity: 0, scale : 0.9},
      {
        opacity: 1,
        scale : 1 ,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: text_story1_1,
          scrub : true,
          start : "300px 70%",
          end : "300px 30%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story1_2,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: text_story1_2,
          scrub : true,
          start : "1px 40%",
          end : "1px 10%" ,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      door_1,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 0,
        scrollTrigger: {
          trigger: door_1,
          scrub : true,
          start : "top 600px",
          end : "top 10px",
          
          /* markers : true, */
        },
      }
    );

    gsap.fromTo(
      doglook,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: doglook,
          scrub : true,
          start : "600px 50%",
          end : "600px 0%",

          /*markers : true,*/
        },
      }
    );

  }, []);

  return (
    <div>
      <div className="bg-center"
      style={{
        backgroundColor: "#1B192D",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        backgroundSize: "contain",
      }}>
        <div className="flex flex-row justify-around">
          <img src={door_a1} alt="Door_A1" className=" w-[30%]" ref={door_1Ref}/>
          <div
            ref={text_story1_1Ref}
            className="flex flex-col justify-start text-white pt-56 "
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
      <div className="flex">
        <img className=" w-[100%] pt-10" src={sleep_night} alt="sleep_night" />
        <img
          ref={text_story1_2Ref}
          className=" w-[35%] absolute pt-[10%] left-[10%]"
          src={text_png_story1}
          alt="text_png_story1"
        />
        <img
          ref={doglookRef}
          className=" w-[30%] absolute pt-[29.6%] right-[5%]"
          src={dog_look}
          alt="text_png_story1"
        />
      </div>
    </div>
  );
}

export default Story1;
