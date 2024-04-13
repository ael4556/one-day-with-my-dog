import Dog from "../../Images/story_15/dog-st15.png";
import Wipes from "../../Images/story_15/wipes.png";
import BgWipes from "../../Images/story_15/bg-wipes.png";
import Bgkitchen from "../../Images/story_15/bg-kitchen.png";
import TextStorke from "../../Images/story_15/text-stroke-1.png";
import Braf from "../../Images/story_15/BARF.png";
import Tie from "../../Images/story_15/tie.png";
import SunSett from "../../Images/sun-set.png";

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

  useEffect(() => {
    const text_story15_1 = text_story15_1Ref.current;
    const text_story15_2 = text_story15_2Ref.current;

    gsap.fromTo(
      text_story15_1,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: text_story15_1,
          scrub: true,
          start: "0px 80%",
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
          start: "0px 80%",
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
            className=" font-sans flex justify-center text-3xl pt-[10%] px-[29%] leading-relaxed text-center" 
            ref={text_story15_1Ref}>
          <p>
            หลังจากเกิดเกตุการณ์ไม่คาดฝันแล้ว คิดว่ามีตังค์น่าจะพอใจ
            กับการออกมาเดินสำรวจวันนี้แล้วเลยจะพามีตังค์กลับบ้านเลย
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
        <div className=" pl-[15%]">
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
            <img className=" w-[35%] z-40" src={TextStorke} />
          </div>
          <div className=" pl-[10%] pt-[10%]">
            <img className=" w-[30%] z-30" src={Braf} />
          </div>
        </div>
        <div className="pt-[42%] absolute left-[55%] w-[40%]">
        <img className=" z-10" src={Tie} />
        </div>
        <img className=" z-0" src={Bgkitchen} />
      </div>
    </div>
  );
}

export default Story15;
