import stairs from "../../Images/story_4/stairs.png";
import dog_down from "../../Images/story_4/dog-down.png";
import dog_poof_start from "../../Images/story_4/dog-poop.jpg";
import dog_poof_finish from "../../Images/story_4/dog-poop-finish.jpg";

import poof from "../../Images//story_4/poop.gif";

import Chat from "../chat";
import Popup from "../popup";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story4() {
  const dogdownRef = useRef();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const dogdown = dogdownRef.current;

    gsap.fromTo(
      dogdown,
      { yPercent: 0, xPercent: 0, scale: 0.9 },
      {
        yPercent: +30,
        xPercent: -25,
        scale: 1.1,
        duration: 3,
        delay: 0,
        scrollTrigger: {
          trigger: dogdown,
          scrub: true,
          start: "500px 70%",
          end: "500px 10%",

          /*markers : true,*/
        },
      }
    );
  }, []);
  return (
    <div className=" pt-[15%]">
      <div className="flex pt-0">
        <img className=" w-[90%] pt-10" src={stairs} alt="stairs" />
        <img
          className="w-[35%] absolute left-[45%] pt-[10%]"
          src={dog_down}
          alt="dog_down"
          ref={dogdownRef}
        />

        <div className="absolute left-[10%] pt-[10%]">
          <Chat text="“ป่ะ ไปหน้าบ้านกัน”" showIcon={true} isMe={false} />
        </div>
      </div>
      <div className="flex pt-[10%] justify-center">
        <Chat
          text="“มีตังค์ อึอึ๊ เร็ว เดี๋ยววันนี้ เรามีอะไรต้องทำเยอะนะ”"
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="flex justify-center pt-[10vw] gap-10">
        <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
        <div>
          <div className=" flex flex-cols-2 gap-[5vw]">
            <div className=" flex justify-start pl-[3%]">
              <img className="w-[40vw]" src={dog_poof_start} alt="dog_poof1" />
            </div>
            <div className="left-[16vw] z-10 w-[6vw] absolute pt-[30vw]">
              <img
                className=" hover:scale-110 duration-200 cursor-pointer"
                src={poof}
                alt="poof"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
            <div className=" flex justify-end pr-[3%]">
              <img className="w-[40vw]" src={dog_poof_finish} alt="dog_poof2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story4;
