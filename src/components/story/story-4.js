import stairs from "../../Images/story_4/stairs.png";
import dog_down from "../../Images/story_4/dog-down.png";
import dog_poof_start from "../../Images/story_4/dog-poop.jpg";
import dog_poof_finish from "../../Images/story_4/dog-poop-finish.jpg";
import dog_info from "../../Images/story_4/info.png";
import close from "../../Images/story_4/close.png";
import poof from "../../Images/poop.gif";

import Chat from "../chat";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story4() {
  const dogdownRef = useRef();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [isPopupOpen]);

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
      <div className="flex pt-40 justify-center">
        <Chat
          text="“มีตังค์ อึอึ๊ เร็ว เดี๋ยววันนี้ เรามีอะไรต้องทำเยอะนะ”"
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="flex justify-center pt-64 gap-10">
        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div className=" p-8 rounded-lg">
              {/* เพิ่มเนื้อหาของ popup ที่นี่ */}
              <div className="flex justify-end">
                <div className="absolute pt-6 pr-6">
                  <img onClick={() => setIsPopupOpen(false)} src={close} />
                </div>
                <div>
                  <img src={dog_info} />
                </div>
              </div>
            </div>
          </div>
        )}
        <img className="w-2/5" src={dog_poof_start} alt="dog_poof2" />
        <img
          className="w-[6%] absolute left-[16%] pt-[33%] "
          src={poof}
          alt="poof"
          onClick={() => setIsPopupOpen(true)}
        />
        <img className="w-2/5" src={dog_poof_finish} alt="dog_poof1" />
      </div>
    </div>
  );
}

export default Story4;
