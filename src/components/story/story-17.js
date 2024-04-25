import Tips from "../tips";

import dog from "../../Images/story_17/dog-eat.gif";
import bg_dog from "../../Images/story_17/done.png";
import feed from "../../Images/story_17/slow-feed.png";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story17() {
    const bg_finishedRef = useRef ();
    const text_story17_1Ref = useRef ();
    const text_story17_2Ref = useRef ();
    const slowFeedRef = useRef ();

  useEffect(() => {
    const bg_finished = bg_finishedRef.current;
    const text_story17_1 = text_story17_1Ref.current;
    const text_story17_2 = text_story17_2Ref.current;
    const slowFeed = slowFeedRef.current;

    gsap.fromTo(
      bg_finished,
      { xPercent : -20 },
      {
          xPercent: 0,
          duration: 1,
          scrollTrigger: {
          trigger: bg_finished,
          scrub: true,
          start: "0px 100%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );
    gsap.fromTo(
      text_story17_1,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story17_1,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story17_2,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story17_2,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      slowFeed,
      { scale: 0.5 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: slowFeed,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

  }, []);

  return (
    <div className=" flex flex-col">
      <div className=" flex flex-col justify-center">
        <div className=" font-sans text-center text-[3vw] font-semibold" ref={text_story17_1Ref}>
          <p className=" text-[#6E8CC5]">บาร์ฟ คือ</p>
        </div>
        <div className=" font-sans text-center text-[1.88vw] font-normal pt-[2.5vw]" ref={text_story17_2Ref}>
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
          <img className=" z-0 w-[90vw]" src={bg_dog} ref={bg_finishedRef}/>
        </div>
      </div>
      <div className="flex pt-[20vw] justify-end">
        <div className="pr-[10vw] z-10" ref={slowFeedRef}>
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
