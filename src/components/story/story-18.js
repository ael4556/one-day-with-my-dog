
import sink from "../../Images/story_18/sink.png";
import ball from "../../Images/story_18/ball.png";
import blow from "../../Images/story_18/blow.png";
import frisbee from "../../Images/story_18/frisbee.png";
import dishwash from "../../Images/story_18/dishwashing.png";
import memory from "../../Images/story_18/memorable.png";
import dot from "../../Images/story_18/dotdotdot.png";

import Tips from "../tips";
import Chat from "../message";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story18() {
  const text_story18_1Ref = useRef ();
  const item1Ref = useRef ();
  const item2Ref = useRef ();
  const item3Ref = useRef ();
  const item4Ref = useRef ();
  const text_story18_2Ref = useRef ();
  const text_story18_3Ref = useRef ();
  const text_story18_4Ref = useRef ();

  const text_story18_5Ref = useRef ();
  const text_story18_6Ref = useRef ();
    
    useEffect(() => {
      const text_story18_1 = text_story18_1Ref.current;
      const item1 = item1Ref.current;
      const item2 = item2Ref.current;
      const item3 = item3Ref.current;
      const item4 = item4Ref.current;
      const text_story18_2 = text_story18_2Ref.current;
      const text_story18_3 = text_story18_3Ref.current;
      const text_story18_4 = text_story18_4Ref.current;

      const text_story18_5 = text_story18_5Ref.current;
      const text_story18_6 = text_story18_6Ref.current;
      
      gsap.fromTo(
        text_story18_1,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story18_1,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        item1,
        { scale: 0.7 },
        {
          scale: 1,
          duration: 1,
          delay: 0.1,
          scrollTrigger: {
            trigger: item1,
            toggleActions: "restart",
            start: "-300px 90%",
            end: "-100px 50%",
            /*markers : true,*/
          },
        }
      );
      gsap.fromTo(
        item2,
        { scale: 0.7 },
        {
          scale: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: item2,
            toggleActions: "restart",
            start: "-200px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );
      gsap.fromTo(
        item3,
        { scale: 0.7 },
        {
          scale: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: item3,
            toggleActions: "restart",
            start: "-200px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );
      gsap.fromTo(
        item4,
        { scale: 0.7 },
        {
          scale: 1,
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: item4,
            toggleActions: "restart",
            start: "-200px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story18_2,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story18_2,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story18_3,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story18_3,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story18_4,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story18_4,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story18_5,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story18_5,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story18_6,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story18_6,
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
        <div className=" flex flex-col pt-[10%]">
          <div className=" flex flex-col-2 gap-[5%] justify-center">
            <div className=" flex justify-start">
              <img className="w-[90%]" src={sink}/>
            </div>
            <div className="flex justify-end pl-[10%] pt-[10%]">
              <div className=" flex flex-col font-sans text-3xl" ref={text_story18_1Ref}>
                <p className="">
                เวลาผ่านไปไม่นาน จากจานที่เต็มไปด้วยอาหาร
                </p>
                <p className="pt-[1.25%]">
                  ก็ว่างลง คุณนำจานข้าวมีตังค์ไปล้าง และไม่ลืม
                </p>
                <p className="pt-[1.25%]">
                  ที่จะแวะหยิบบอลกับจานร่อนที่มีตังค์ได้เล่นไป
                </p>
                <p className="pt-[1.25%]">
                  วันนี้เพื่อความสะอาด
                </p>
              </div>
            </div>  
          </div>
          <div className="absolute pt-[18%] pl-[30%]" ref={item1Ref}>
              <img className="" src={dishwash}/>
            </div>
            <div className="absolute pt-[32%] pl-[50%]" ref={item2Ref}>
              <img className="w-[80%]" src={ball}/>
            </div>
            <div className="absolute pt-[32%] pl-[65%]" ref={item3Ref}>
              <img className="w-[80%]" src={frisbee}/>
            </div>
            <div className="absolute pt-[32%] pl-[80%]" ref={item4Ref}>
              <img className="w-[80%]" src={blow}/>
            </div>
        </div>
        <div className=" flex justify-start pt-[10%] pl-[10%]">
          <Tips
          text="การล้างภาชนะและของเล่นสุนัข สามารถล้างได้โดยใช้น้ำอุ่น"
          text2="ควบคู่กับน้ำยาล้างจานปกติได้เลย เน้นความสะอาด ไม่มีคราบไขมัน"
          text3="และที่สำคัญ ต้องตากให้แห้ง"
          isLeft={true}
          />
        </div>
        <div className=" flex flex-col pt-[10%] text-3xl font-sans" ref={text_story18_2Ref}>
          <p className="flex justify-center ">
            เมื่อทำความสะอาด์เสร็จแล้วก็ถึงเวลาของคุณบ้าง จากการดูแลเจ้ามีตังค์มาทัังวัน
          </p>
          <p className="flex justify-center pt-[0.5%]">
            ทำให้คุณรู้สึกเหนียวตัวและกำลังเดินขึ้นห้องไป เพื่อจะอาบน้ำ แต่ไม่ลืมที่จะบอกเจ้าหมาน้อย
          </p>
        </div>
        <div className=" flex justify-end pr-[10%] pt-[10%]">
          <Chat 
            text="“ตังค์เดี๋ยวมานะไปอาบน้ำก่อนคอยนะอย่าซน”"
          />
        </div>
        <div className=" flex justify-start pt-[5%] pl-[10%]">
          <Chat 
            text="โฮ่ง โฮ่ง !" 
            showIcon={true} 
            icon="dog"
            isMe={true}
          />
        </div>
        <div className=" flex flex-col pt-[10%] text-3xl font-sans" ref={text_story18_3Ref}>
          <p className="flex justify-center ">
          อาบน้ำเสร็จแล้วก็เดินลงบรรไดมาหาเจ้ามีตังค์ พร้อมเปิดทีวี
          </p>
          <p className="flex justify-center pt-[0.5%]">
          พอเจ้าหมาแสนรู้เห็นเข้า ก็รีบกระโจนขึ้นมาบนโซฟาตัวใหญ่อย่างเคยชิน
          </p>
          <p className="flex justify-center pt-[0.5%]">
          สายตาจ้องมองทีวีไม่กระพริบ หางส่ายไปมา แถมลิ้นห้อย ดูดีอกดีใจชอบกล
          </p>
        </div>

        <div className=" flex flex-col pt-[10%] text-3xl font-sans" ref={text_story18_4Ref}>
          <p className="flex justify-center ">
          และหนึ่งวันของคุณ ก็จบลง 
          </p>
          <p className="flex justify-center pt-[0.5%]">
          ด้วยการดูทีวีแสนสนุกไปพร้อมกับเจ้าตูบแสนรู้ใจ ดูเป็นวันธรรมดา ที่ . . .
          </p>
        </div>

        <div className=" flex justify-center pt-[10%]" ref={text_story18_5Ref}>
          <img className="" src={dot}/>
        </div>
        <div className=" flex justify-center pt-[5%]" ref={text_story18_6Ref}>
          <img className="" src={memory}/>
        </div>
        
      </div>

    );
  }
  
  export default Story18;
  