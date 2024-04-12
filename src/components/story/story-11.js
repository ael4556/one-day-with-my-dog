import Door from "../../Images/story_11/door.png";
import Leash from "../../Images/story_11/leash.png";
import Dogleash from "../../Images/story_11/leash-the-dog.png";
import textD from "../../Images/story_11/text-leash-the-dog.png";
import SunEvening from "../../Images/sun-evening.png";

import Sunset from "../../components/sunset";
import Chat from "../chat";
import ClockTop from "../clock";
import Title from "../title";
import Tips from "../tips";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story11() {
  const doorRef = useRef();
  const dogLeashRef = useRef();
  const text_story11_1Ref = useRef();
  const title_story11_1Ref = useRef();

  useEffect(() => {
    const door = doorRef.current;
    const dogLeash = dogLeashRef.current;
    const text_story11_1 = text_story11_1Ref.current;
    const title_story11_1 = title_story11_1Ref.current;

    gsap.fromTo(
      door,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 3,
        delay: 0,
        scrollTrigger: {
          trigger: door,
          scrub: true,
          start: "-100px 70%",
          end: "0px 10%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      dogLeash,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 3,
        delay: 0,
        scrollTrigger: {
          trigger: dogLeash,
          scrub: true,
          start: "0px 70%",
          end: "100px 10%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story11_1,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: text_story11_1,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      title_story11_1,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: title_story11_1,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",

          /*markers : true,*/
        },
      }
    );
  }, []);
  return (
    <div className=" flex flex-col justify-center">
      <div id="Story_11"></div>
      <ClockTop time="16.30" />
      <Sunset sunlight={SunEvening} />
      <div className=" pt-[35%]">
        <div className="flex pt-[25%] justify-start pl-[10%]">
          <Chat text="“ไปเดินเล่นกันมีตังค์”" isMe={false} />
        </div>
        <div className="flex pt-40 justify-end pr-[10%]">
          <Chat text="โฮ่ง โฮ่ง !" isDog={true} isMe={true} />
        </div>
      </div>

      <div className="grid grid-cols-2 pt-[15%] ">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img
              className="w-[70%] pl-[20%]"
              src={Door}
              alt="Door"
              ref={doorRef}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center">
            <img
              className="w-[90%] pr-[30%]"
              src={Leash}
              alt="Leash"
              ref={dogLeashRef}
            />
          </div>
          <div
            className="flex justify-center leading-relaxed text-3xl pt-40 pr-[20%] pl-[15%]"
            ref={text_story11_1Ref}
          >
            <p>
              พูดจบคุณก็หยิบสายจูงจากที่แขวนบนกำแพง แล้วใส่ให้มีตังค์
              ท่าทางมีตังค์ดูไม่ขัดขืนอะไร
              ซ้ำแล้วยังแสดงท่าทางดีใจที่จะได้ออกไปข้างนอกบ้าน
              สังเกตได้จากหางที่ส่ายไปมาของเจ้าตัว
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end pr-[10%]">
        <Tips
          text="ควรใส่สายจูงให้น้องสุนัขทุกครั้ง"
          text2="เมื่่อพาออกนอกบ้าน"
          isLeft={false}
        />
      </div>
      <div className="pt-[5%]" ref={title_story11_1Ref}>
        <Title title="ไปเดินเล่นกัน!" />
      </div>
      <div className=" flex justify-center pt-[10%]">
        <img src={Dogleash} alt="Dogleash" />
        <img
          className=" absolute pt-[12%] right-[67%]"
          src={textD}
          alt="textD"
        />
      </div>
    </div>
  );
}

export default Story11;
