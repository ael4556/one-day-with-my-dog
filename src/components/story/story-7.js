import { useEffect, useRef } from "react";

import Sunset from "../sunset";
import ClockTop from "../clock";
import Title from "../title";
import Chat from "../chat";

import yawn_dog from "../../Images/story_7/yawn-dog.png";
import tail_1 from "../../Images/story_7/tail-tells-1.png";
import tail_2 from "../../Images/story_7/tail-tells-2.png";
import tail_3 from "../../Images/story_7/tail-tells-3.png";
import tail_4 from "../../Images/story_7/tail-tells-4.png";
import tail_5 from "../../Images/story_7/tail-tells-5.png";
import tail_6 from "../../Images/story_7/tail-tells-6.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageFlip from "../imageflip";
gsap.registerPlugin(ScrollTrigger);

function Story7() {
  const text_story7_1Ref = useRef();
  const text_story7_2Ref = useRef();

  useEffect(() => {
    const text_story7_1 = text_story7_1Ref.current;
    const text_story7_2 = text_story7_2Ref.current;

    gsap.fromTo(
      text_story7_1,
      { opacity: 0, yPercent: +20 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text_story7_1,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story7_2,
      { opacity: 0, yPercent: +20 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text_story7_2,
          scrub: true,
          start: "60px 80%",
          end: "60px 50%",
          /*markers : true,*/
        },
      }
    );
  }, []);

  return (
    <>
      <div className="pt-40">
        <ClockTop time="13.30" />
        <Sunset />
        <div className="pt-[90vh] flex justify-around">
          <img className="w-[30%]" src={yawn_dog} alt="yawn_dog" />
          <div className="max-w-xl flex flex-col text-3xl">
            <p className=" leading-relaxed" ref={text_story7_1Ref}>
              ผ่านไปหลายชั่วโมงเจ้ามีตังค์ก็ตื่นนอนพร้อมบิดขี้เกียจ
              ทั้งแอนหน้าแอนหลัง จากนั้นก็เดินมาหาพร้อม ทำตาปริบ ๆ
              กระดิกหางด้วยความดีใจเพราะตื่นมา แล้วเจอเจ้านาย
            </p>
            <p className="pt-32 leading-relaxed" ref={text_story7_2Ref}>
              โดยคุณสามารถรับรู้ความรู้สึกต่าง ๆ ของเจ้ามีตังค์ได้จาก “หาง”
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Title title="หางบอกอารมณ์" />
        </div>
        <div className="flex justify-center">
          <a
            className=" underline pt-4 text-xl"
            href="https://www.baanlaesuan.com/224684/pets/training/hand-signals"
            target="_blank"
          >
            หางสุนัขบอกอารมณ์ เข้าใจได้ด้วยภาษากายและท่าทาง - บ้านและสวน Pets
            (baanlaesuan.com)
          </a>
        </div>
        <div className="grid grid-cols-3 pt-40 justify-items-center gap-8 gap-y-20">
          <ImageFlip image_front={tail_1} />
          <ImageFlip image_front={tail_2} />
          <ImageFlip image_front={tail_3} />
          <ImageFlip image_front={tail_4} />
          <ImageFlip image_front={tail_5} />
          <ImageFlip image_front={tail_6} />
        </div>

        <div className="flex pt-40 justify-end px-80">
          <Chat text="“ตื่นแล้วหรอ มีตังค์ เล่นของเล่นกันไหม?”" isMe />
        </div>
        <div className="flex pt-40 justify-start px-80">
          <Chat text="โฮ่ง โฮ่ง !" isDog isMe={false} />
        </div>
      </div>
    </>
  );
}

export default Story7;
