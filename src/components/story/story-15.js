import Dog from "../../Images/story_15/dog-st15.png";
import Wipes from "../../Images/story_15/wipes.png";
import BgWipes from "../../Images/story_15/bg-wipes.png";
import Bgkitchen from "../../Images/story_15/bg-kitchen.png";
import TextStorke from "../../Images/story_15/text-stroke-1.png";
import Braf from "../../Images/story_15/BARF.png";
import Tie from "../../Images/story_15/tie.png";
import SunSett from "../../Images/sun-set.png";

import dinner from "../../Images/cooking/dinner.png";

import Sunset from "../sunset";
import ClockTop from "../clock";
import Chat from "../message";
import Tips from "../tips";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story15() {
    const text_story15_1Ref = useRef ();
    const text_story15_2Ref = useRef ();
    const wipes_animateRef = useRef ();
    const text_story15_3Ref = useRef ();
    const text_story15_4Ref = useRef ();
    const tie_animateRef = useRef ();

  useEffect(() => {
    const text_story15_1 = text_story15_1Ref.current;
    const text_story15_2 = text_story15_2Ref.current;
    const wipes_animate = wipes_animateRef.current;
    const text_story15_3 = text_story15_3Ref.current;
    const text_story15_4 = text_story15_4Ref.current;
    const tie_animate = tie_animateRef.current;

    gsap.fromTo(
      text_story15_1,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story15_1,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story15_2,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story15_2,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      wipes_animate,
      { scale: 0.5 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: wipes_animate,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story15_3,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story15_3,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story15_4,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story15_4,
          scrub: true,
          start: "-100px 90%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      tie_animate,
      { xPercent : +20 },
      {
          xPercent: 0,
          duration: 1,
          scrollTrigger: {
          trigger: tie_animate,
          scrub: true,
          start: "0px 100%",
          end: "100px 50%",

          /*markers : true,*/
        },
      }
    );

  }, []);

  return (
    <div className="pt-[10%] flex flex-col">
      <div id="Story_15"></div>
      <ClockTop time="18.00" />
      <Sunset sunlight={SunSett} />
      <div className=" flex flex-col pt-[35%]">
        <div 
            className=" font-sans flex justify-center text-3xl pt-[10%] px-[28%] leading-relaxed text-center" 
            ref={text_story15_1Ref}>
          <p>
          หลังจากเหตุการณ์ไม่คาดฝันเกิดขึ้น และคิดว่ามีตังค์น่าจะพอใจ
          กับการออกมาเดินสำรวจวันนี้แล้ว คุณจึงชวนมีตังค์กลับบ้าน
          </p>
        </div>
      </div>

      <div className="pr-[10%] pt-[10%] flex justify-end">
        <Chat
          text="“มีตังค์ หิวข้าวยังเราอะ”"
          isMe={false}
          showIcon={true}
          icon="male"
        />
      </div>
      <div className="pl-[10%] pt-[10%] flex justify-start">
        <Chat text="โฮ่ง โฮ่ง !" isMe={true} showIcon={true} icon="dog" />
      </div>
      <div className="pr-[10%] pt-[10%] flex justify-end gap-[5%]">
        <Chat
          text="“งั้นเรากลับบ้านกันนะ เดี๋ยววันนี้จะ"
          text2="ทำอาหารสูตรพิเศษให้เลย”"
          isMe={false}
          showIcon={true}
          icon="male"
        />
      </div>
      <div className="flex flex-col-2 gap-[5%] justify-center pt-[10%]">
        <div className="flex-col justify-start z-20 pt-[20%]">
          <div className=" font-sans text-3xl text-left" ref={text_story15_2Ref}>
            <p className="pt-[1.5%]">เมื่อถึงบ้าน คุณก็เดินไปหยิบทิชชูเปียก</p>
            <p className="pt-[1.5%]">เพื่อเอามาเช็ดเท้าทั้งสี่ ลำตัว และใบหน้า ให้มีตังค์</p>
            <p className="pt-[1.5%]">เพราะทุกครั้งที่ออกไปข้างนอก</p>
            <p className="pt-[1.5%]">มักมีเศษดินติดมา ทำให้ภายในบ้านสกปรก</p>
          </div>
        </div>
        <div className="flex-col justify-end z-0">
          <img className="" src={Dog} />
        </div>
      </div>
      <div className="pt-[5%] flex flex-col">
        <div className=" pl-[15%]" ref={wipes_animateRef}>
          <img className=" absolute z-30" src={Wipes} />
          <img className=" absolute z-0" src={BgWipes} />
        </div>
        <div className=" flex justify-end pt-[5%] pr-[10%]">
          <Tips
            text="ไม่ควรใช้ผลิตภัณฑ์ที่มีแอลกอฮอล์"
            text2="หรือเป็นพิษและมีฤทธิ์กัดกร่อนผิวหนังสุนัข"
            isLeft={false}
          />
        </div>
      </div>
      <div className=" pt-[10%]">
        <div className=" justify-start absolute pt-[10%]">
          <div className=" pl-[10%]">
            <img className=" w-[37%] z-40" src={TextStorke} ref={text_story15_3Ref}/>
          </div>
          <div className=" pl-[10%] pt-[7%]">
            <img className=" w-[32%] z-30" src={Braf} ref={text_story15_4Ref}/>
          </div>
        </div>
        <div className="pt-[42%] absolute left-[55%] w-[40%]">
        <img className=" z-10" src={Tie} ref={tie_animateRef}/>
        </div>
        <img className=" z-0" src={Bgkitchen} />
      </div>
        <div className=" flex justify-center pt-[15%]">
          <img src={dinner} />
        </div>
        <div className=" flex justify-center pt-[3%] font-sans text-3xl">
          <p>ช่วยปรุงอาหารให้เจ้ามีตังค์ โดยลากวัตถุดิบลงชาม เพื่อเสิร์ฟอาหารมื้อพิเศษ</p>
        </div>
    </div>
  );
}

export default Story15;
