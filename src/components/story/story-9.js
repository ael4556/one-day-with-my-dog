import { useEffect, useRef, useState } from "react";
import Chat from "../chat";

import garden_dog from "../../Images/story_9/garden-dog.png";
import ball from "../../Images/story_9/ball.gif";
import ball2 from "../../Images/story_9/ball.png";
import frisbee_dog from "../../Images/story_9/frisbee-dog.gif";
import text_stroke_3 from "../../Images/SVG/text-stroke-3.png";
import dog from "../../Images/story_9/dog.png";

import image_pop_1 from "../../Images/story_9/popup-1.png";
import image_pop_2 from "../../Images/story_9/popup-2.png";
import Popup from "../popup";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story9() {
  const text_story9_1Ref = useRef();
  const text_story9_2Ref = useRef();

  const text_stroke3Ref = useRef();
  const dog_jumpRef = useRef();
  const bouncing_ballRef = useRef();

  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  useEffect(() => {
    const text_story9_1 = text_story9_1Ref.current;
    const text_story9_2 = text_story9_2Ref.current;

    const text_stroke3 = text_stroke3Ref.current;
    const dog_jump = dog_jumpRef.current;
    const bouncing_ball = bouncing_ballRef.current;

    gsap.fromTo(
      text_story9_1,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        duration: 2,
        scale: 1,
        scrollTrigger: {
          trigger: text_story9_1,
          scrub: true,
          start: "0px 80%",
          end: "0px 40%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_stroke3,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        duration: 2,
        scale: 1,
        scrollTrigger: {
          trigger: text_stroke3,
          scrub: true,
          start: "600px 80%",
          end: "600px 40%",

          /*markers : true*/
        },
      }
    );

    gsap.fromTo(
      text_story9_2,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        duration: 2,
        scale: 1,
        scrollTrigger: {
          trigger: text_story9_2,
          scrub: true,
          start: "0px 80%",
          end: "0px 40%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      dog_jump,
      { yPercent: 0, xPercent: 10, scale: 0.8 },
      {
        yPercent: -30,
        xPercent: -25,
        scale: 1,
        duration: 3,
        delay: 0,
        scrollTrigger: {
          trigger: dog_jump,
          scrub: true,
          start: "-200px 80%",
          end: "-100px 40%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      bouncing_ball,
      { yPercent: 0, xPercent: 10, scale: 0.8 },
      {
        yPercent: -50,
        xPercent: -60,
        scale: 1.1,
        rotation: -360,
        duration: 3,
        delay: 0,
        scrollTrigger: {
          trigger: bouncing_ball,
          scrub: true,
          start: "-100px 90%",
          end: "0px 40%",

          /*markers : true,*/
        },
      }
    );
  }, []);

  return (
    <div className="">
      <Popup
        isPopupOpen={isPopup1Open}
        setIsPopupOpen={setIsPopup1Open}
        images={image_pop_1}
      />
      <Popup
        isPopupOpen={isPopup2Open}
        setIsPopupOpen={setIsPopup2Open}
        images={image_pop_2}
      />
      <div className=" flex flex-col justify-center px-[20vw] pt-[5.85vw] ">
        <p
          className="text-[1.8vw] leading-relaxed text-center"
          ref={text_story9_1Ref}
        >
          หลังจากนั้น คุณก็เดินออกไปที่สวนพร้อมเรียกมีตังค์ให้ออกมาพร้อมกัน
          แต่ก็ไม่ลืมที่จะหยิบของเล่นสุดโปรดของมีตังค์ที่เก็บไว้ในลิ้นชักใต้ทีวีไปด้วย
        </p>
      </div>
      <div className="flex justify-center gap-[8.3vw] pt-[8.3vw]">
        <div className="flex flex-col">
          <div className="hover:scale-110 duration-200 cursor-pointer" >
          <img
            onClick={() => setIsPopup1Open(true)}
            className="w-[12vw]"
            src={ball}
            alt={ball}
          />
          </div>
          <div className="flex text-[2vw] pt-[2.5vw] pl-[2.5vw]" >
            <p>ลูกบอล</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="hover:scale-110 duration-200 cursor-pointer" >
          <img
            onClick={() => setIsPopup2Open(true)}
            className="w-[12vw]"
            src={frisbee_dog}
            alt={frisbee_dog}
          />
          </div>
          <div className="flex text-[2vw] pt-[2.5vw] pl-[2.5vw]">
            <p>จานร่อน</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center pt-[5.85vw]">
        <div className="flex justify-center">
          <img
            className="w-[35vw] absolute pt-[29.7vw] right-[10vw] z-20"
            ref={text_stroke3Ref}
            src={text_stroke_3}
            alt={text_stroke_3}
          />
          <img className=" pt-[10vw]" src={garden_dog} alt={garden_dog} />
          <div className=" absolute z-10 pt-[35vw] pl-[30vw]">
            <img className=" w-[40vw]" src={dog} alt={dog} ref={dog_jumpRef} />
          </div>
        </div>

        <div className=" absolute z-10 pt-[55vw] left-[35vw]">
          <img
            className=" w-[10vw]"
            src={ball2}
            alt={ball2}
            ref={bouncing_ballRef}
          />
        </div>
      </div>

      <div className="pl-[10vw]">
        <Chat
          text="“แดดเริ่มร้อนเเล้วนะ มานั่งพักก่อน”"
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className=" flex flex-col justify-center px-[16vw] pt-[6.7vw] ">
        <p
          className="text-[1.8vw] leading-loose text-center"
          ref={text_story9_2Ref}
        >
          หลังจากที่คุณให้มีตังค์นอนเล่นหน้าบ้าน เพื่อระหว่างนั้นก็เอาของต่าง ๆ
          มาเตรียมไว้ แชมพูอาบน้ำสุนัขเอย ผ้าเช็ดตัวเอย และต่อสายยาง
          พร้อมอาบน้ำให้เจ้าตัวแสบ !
        </p>
      </div>
    </div>
  );
}

export default Story9;
