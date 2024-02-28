import stairs from "../../Images/story_4/stairs.png";
import dog_down from "../../Images/story_4/dog-down.png"
import dog_poof_start from "../../Images/story_4/dog-poop.jpg";
import dog_poof_finish from "../../Images/story_4/dog-poop-finish.jpg";
import poof from "../../Images/poop.gif";

import Chat from "../chat";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story4() {
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
          start : "300px 30%",
          end : "300px 0%",

          /*markers : true,*/
        },
      }
    );

  }, []);
  return (
    <div className=" pt-[15%]">
      <div className="flex pt-0">
        <img 
          className=" w-[90%] pt-10" 
          src={stairs} 
          alt="stairs"
        />
        <img 
          className="w-[35%] absolute left-[45%] pt-[10%]" 
          src={dog_down} 
          alt="dog_down"
          ref={dogdownRef}
        />

        <div className="absolute left-[7%] pt-[10%]">
          <Chat text="“ป่ะ ไปหน้าบ้านกัน”" showIcon={true} isMe={false}/>
        </div>
      </div>
      <div className="flex pt-40 justify-center">
        <Chat
          text="“มีตังค์ อึอึ๊ เร็ว เดี๋ยววันนี้ เรามีอะไรต้องทำเยอะนะ”"
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="flex justify-center pt-64 gap-10">
        <img className="w-2/5" src={dog_poof_start} alt="dog_poof2" />
        <img
          className="w-[6%] absolute left-[13%] pt-[33%]"
          src={poof}
          alt="poof"
        />
        <img className="w-2/5" src={dog_poof_finish} alt="dog_poof1" />
      </div>
    </div>
  );
}

export default Story4;
