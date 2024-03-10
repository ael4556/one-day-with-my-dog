import Door from "../../Images/story_11/door.png";
import Leash from "../../Images/story_11/leash.png";
import Dogleash from "../../Images/story_11/leash-the-dog.png";
import textD from "../../Images/story_11/text-leash-the-dog.png";

import Sunset from "../../components/sunset";
import Chat from "../chat";
import ClockTop from "../clock";
import Title from "../title";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story11() {
    const dogdownRef = useRef();

  useEffect(() => {
    const dogdown = dogdownRef.current;

    gsap.fromTo(
      dogdown,
      { yPercent: 0, xPercent : 0, scale : 0.9},
      {
        yPercent: +30,
        xPercent: -25,
        scale : 1.1,
        duration: 3,
        delay: 0,
        scrollTrigger: {
          trigger: dogdown,
          scrub : true,
          start : "500px 70%",
          end : "500px 10%",

          /*markers : true,*/
        },
      }
    );

  }, []);
  return (
    <div className=" flex flex-col justify-center">
      <ClockTop time="16.30" />
      <Sunset/>
        <div className=" pt-[35%]">
        <div className="flex pt-[25%] justify-start pl-[10%]">
            <Chat text="“ไปเดินเล่นกันมีตังค์”" isMe={false} />
            </div>
            <div className="flex pt-40 justify-end pr-[10%]">
            <Chat text="โฮ่ง โฮ่ง !" isDog={true} isMe={true} />
            </div>
        </div>

        
        <div className="grid grid-cols-2 pt-[15%] ">
            <div className="flex flex-col" >
            <div className="flex justify-center">
                <img className="w-[60%] pl-[20%]" src={Door} alt="Door" />
            </div>
            </div>

            <div className="flex flex-col">
            <div className="flex justify-center">
                <img className="w-[90%] pr-[30%]" src={Leash} alt="Leash" />
            </div>
            <div className="flex justify-center text-3xl pt-40 pr-[20%] pl-[15%]">
                <p>พูดจบคุณก็หยิบสายจูงจากที่แขวนบนกำแพง
                    แล้วใส่ให้มีตังค์ ท่าทางมีตังค์ดูไม่ขัดขืนอะไร 
                    ซ้ำแล้วยังแสดงท่าทางดีใจที่จะได้ออกไปข้างนอกบ้าน 
                    สังเกตได้จากหางที่ส่ายไปมาของเจ้าตัว</p>
            </div>
            </div>
        </div>
            <div className="pt-[5%]">
            <Title title="ไปเดินเล่นกัน!"/>
            </div>
            <div className=" flex justify-center pt-[10%]">
                <img src={Dogleash} alt="Dogleash"/>
                <img className=" absolute pt-[12%] right-[67%]" src={textD} alt="textD"/>   
            </div>
                
    </div>
  );
}

export default Story11;
