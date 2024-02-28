import { useEffect, useRef } from "react";

import garden_dog from "../../Images/story_9/garden-dog.png";
import ball from "../../Images/story_9/ball.png";
import frisbee_dog from "../../Images/story_9/frisbee-dog.png";
import text_stroke_3 from "../../Images/SVG/text-stroke-3.png"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story9() {
    const text_story9_1Ref = useRef();
    const text_story9_2Ref = useRef();
    const gardendogRef = useRef();
    const balldogRef = useRef();
    const frisbeedogRef = useRef();
    const text_stroke3Ref = useRef();

    useEffect(() => {
    const text_story9_1 = text_story9_1Ref.current;
    const text_story9_2 = text_story9_2Ref.current;
    const gardendog = gardendogRef.current;
    const balldog = balldogRef.current;
    const frisbeedog = frisbeedogRef.current;
    const text_stroke3 = text_stroke3Ref.current;


        gsap.fromTo(
        text_story9_1,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: text_story9_1,
              scrub : true,
              start : "0px 80%",
              end : "0px 40%",
    
              /*markers : true,*/
            },
          }
        );

        gsap.fromTo(
          text_stroke3,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 2,
              scrollTrigger: {
                trigger: text_stroke3,
                scrub : true,
                start : "600px 80%",
                end : "600px 40%",
      
                /*markers : true*/
              },
            }
          );
    
      }, []);
    
      return (
        <>
            <div className=" flex flex-col justify-center px-[24.5%] pt-28 ">
                <p className="text-3xl leading-loose text-center" ref={text_story9_1Ref}>
                หลังจากนั้น คุณก็เดินออกไปที่สวนพร้อมเรียกมีตังค์ให้ออกมาพร้อมกัน
                แต่ก็ไม่ลืมที่จะหยิบของเล่นสุดโปรดของมีตังค์ที่เก็บไว้ในลิ้นชักใต้ทีวีไปด้วย
                </p>
            </div>
            <div className=" flex justify-center pt-28">
                <img
                className=" w-[10%] absolute right-[35%]"
                src={ball}
                alt={ball}
                />
                <img
                className=" w-[10%] absolute left-[35%] "
                src={frisbee_dog}
                alt={frisbee_dog}
                />
                <p className="text-3xl absolute right-[37%] pt-[13%]">ลูกบอล</p>
                <p className="text-3xl absolute left-[37%] pt-[13%]">จานร่อน</p>
                <img className=" pt-[15%]"
                src={garden_dog}
                alt={garden_dog}
                />
                <img className="w-[32%] absolute pt-[29.7%] right-[10%]"
                ref={text_stroke3Ref}
                src={text_stroke_3}
                alt={text_stroke_3}
                />
            </div>
            
        </>
      );
    }

export default Story9;
