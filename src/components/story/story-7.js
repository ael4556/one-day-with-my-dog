import { useEffect, useRef } from "react";

import Sunset from "../sunset";
import ClockTop from "../clock";
import Title from "../title";
import Chat from "../chat";

import SunAfternoon from "../../Images/sun-afternoon.png";
import yawn_dog from "../../Images/story_7/yawn-dog.png";
import tail_1 from "../../Images/story_7/tail-tells-1.png";
import tail_2 from "../../Images/story_7/tail-tells-2.png";
import tail_3 from "../../Images/story_7/tail-tells-3.png";
import tail_4 from "../../Images/story_7/tail-tells-4.png";
import tail_5 from "../../Images/story_7/tail-tells-5.png";
import tail_6 from "../../Images/story_7/tail-tells-6.png";
import Be_careful from "../../Images/story_7/Be-careful.gif";
import Sad from "../../Images/story_7/sad.gif";
import Threatening from "../../Images/story_7/Threatening.gif";
import Glad from "../../Images/story_7/glad.gif";
import Want from "../../Images/story_7/wanttoplay.gif";
import Scared from "../../Images/story_7/scared.gif";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageFlip from "../imageflip";
gsap.registerPlugin(ScrollTrigger);

function Story7() {
  const text_story7_1Ref = useRef();
  const text_story7_2Ref = useRef();
  const text_story7_3Ref = useRef();
  const text_story7_4Ref = useRef();
  const Dog_yawnRef = useRef();
  const Flip_1Ref = useRef();
  const Flip_2Ref = useRef();
  const Flip_3Ref = useRef();
  const Flip_4Ref = useRef();
  const Flip_5Ref = useRef();
  const Flip_6Ref = useRef();

  useEffect(() => {
    const text_story7_1 = text_story7_1Ref.current;
    const text_story7_2 = text_story7_2Ref.current;
    const text_story7_3 = text_story7_3Ref.current;
    const text_story7_4 = text_story7_4Ref.current;
    const Dog_yawn = Dog_yawnRef.current;
    const Flip_1 = Flip_1Ref.current;
    const Flip_2 = Flip_2Ref.current;
    const Flip_3 = Flip_3Ref.current;
    const Flip_4 = Flip_4Ref.current;
    const Flip_5 = Flip_5Ref.current;
    const Flip_6 = Flip_6Ref.current;

    gsap.fromTo(
      text_story7_1,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story7_1,
          scrub: true,
          start: "1px 60%",
          end: "1px 30%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story7_2,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story7_2,
          scrub: true,
          start: "1px 60%",
          end: "1px 30%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story7_4,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story7_4,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Dog_yawn,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: Dog_yawn,
          scrub: true,
          start: "1px 60%",
          end: "1px 30%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story7_3,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story7_3,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Flip_1,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: Flip_1,
          toggleActions: "restart",
          start: "-400px 80%",
          end: "-300px 50%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Flip_2,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.25,
        scrollTrigger: {
          trigger: Flip_2,
          toggleActions: "restart",
          start: "-400px 80%",
          end: "-300px 50%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Flip_3,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: Flip_3,
          toggleActions: "restart",
          start: "-400px 80%",
          end: "-300px 50%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Flip_4,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.35,
        scrollTrigger: {
          trigger: Flip_4,
          toggleActions: "restart",
          start: "-400px 80%",
          end: "-300px 50%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Flip_5,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: Flip_5,
          toggleActions: "restart",
          start: "-400px 80%",
          end: "-300px 50%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Flip_6,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.45,
        scrollTrigger: {
          trigger: Flip_6,
          toggleActions: "restart",
          start: "-400px 80%",
          end: "-300px 50%",
          /*markers : true,*/
        },
      }
    );
  }, []);

  return (
    <>
      <div className="pt-[30%] ">
        <div id="Story_7"></div>
        <ClockTop time="13.30" />
        <Sunset sunlight={SunAfternoon} />
        <div className="pt-[90vh] flex justify-around">
          <img
            className="w-[40%]"
            src={yawn_dog}
            alt="yawn_dog"
            ref={Dog_yawnRef}
          />
          <div className="max-w-xl flex flex-col text-3xl">
            <p className=" leading-relaxed" ref={text_story7_1Ref}>
              ผ่านไปหลายชั่วโมงเจ้ามีตังค์ก็ตื่นนอนพร้อมบิดขี้เกียจ
              ทั้งแอนหน้าแอนหลัง จากนั้นก็เดินมาหาพร้อม ทำตาปริบ ๆ
              กระดิกหางด้วยความดีใจเพราะตื่นมา แล้วเจอเจ้านาย
            </p>
            <p className=" pt-20 leading-relaxed" ref={text_story7_2Ref}>
              โดยคุณสามารถรับรู้ความรู้สึกต่าง ๆ ของเจ้ามีตังค์ได้จาก “หาง”
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center" ref={text_story7_4Ref}>
          <Title title="หางบอกอารมณ์" />
        </div>
        <div className="grid grid-cols-3 pt-20 justify-items-center gap-8 gap-y-8 px-32">
          <div ref={Flip_1Ref}>
            <ImageFlip image_front={tail_1} image_back={Want} />
          </div>
          <div ref={Flip_2Ref}>
            <ImageFlip image_front={tail_2} image_back={Be_careful} />
          </div>
          <div ref={Flip_3Ref}>
            <ImageFlip image_front={tail_3} image_back={Sad} />
          </div>
          <div ref={Flip_4Ref}>
            <ImageFlip image_front={tail_4} image_back={Glad} />
          </div>
          <div ref={Flip_5Ref}>
            <ImageFlip image_front={tail_5} image_back={Scared} />
          </div>
          <div ref={Flip_6Ref}>
            <ImageFlip image_front={tail_6} image_back={Threatening} />
          </div>
        </div>

        <div className="flex pt-[25%] justify-end pr-[10%]">
          <Chat text="“ตื่นแล้วหรอ มีตังค์ เล่นของเล่นกันไหม?”" isMe={true} />
        </div>
        <div className="flex pt-40 justify-start pl-[10%]">
          <Chat text="โฮ่ง โฮ่ง !" isDog={true} isMe={false} />
        </div>
      </div>
    </>
  );
}

export default Story7;
