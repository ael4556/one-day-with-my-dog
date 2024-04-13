
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
    
    useEffect(() => {
      

    }, []);
    return (
      <div className=" flex flex-col">
        <div className=" flex flex-col pt-[10%]">
          <div className=" flex flex-col-2 gap-[5%] justify-center">
            <div className=" flex justify-start">
              <img className="w-[90%]" src={sink}/>
            </div>
            <div className="flex justify-end pl-[10%] pt-[10%]">
              <div className=" flex flex-col font-sans text-3xl">
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
          <div className="absolute pt-[18%] pl-[30%]">
              <img className="" src={dishwash}/>
            </div>
            <div className="absolute pt-[32%] pl-[50%]">
              <img className="w-[80%]" src={ball}/>
            </div>
            <div className="absolute pt-[32%] pl-[65%]">
              <img className="w-[80%]" src={frisbee}/>
            </div>
            <div className="absolute pt-[32%] pl-[80%]">
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
        <div className=" flex flex-col pt-[10%] text-3xl font-sans">
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
        <div className=" flex flex-col pt-[10%] text-3xl font-sans">
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

        <div className=" flex flex-col pt-[10%] text-3xl font-sans">
          <p className="flex justify-center ">
          และหนึ่งวันของคุณ ก็จบลง 
          </p>
          <p className="flex justify-center pt-[0.5%]">
          ด้วยการดูทีวีแสนสนุกไปพร้อมกับเจ้าตูบแสนรู้ใจ ดูเป็นวันธรรมดา ที่ . . .
          </p>
        </div>

        <div className=" flex justify-center pt-[10%]">
          <img className="" src={dot}/>
        </div>
        <div className=" flex justify-center pt-[5%]">
          <img className="" src={memory}/>
        </div>
        
      </div>

    );
  }
  
  export default Story18;
  