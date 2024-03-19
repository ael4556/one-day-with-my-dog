import { useEffect, useRef } from "react";

import icon_tips from "../Images/SVG/icon-tips.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Tips({ 
  text = "ไม่มีข้อความ",
  text2 = "",
  text3 = "",
  width = 100 }) {
  const messages = useRef();
  const icons = useRef();

  useEffect(() => {
    const messages_animation = messages.current;
    const icons_animation = icons.current;

    gsap.fromTo(
      icons_animation,
      { scale: 0 },
      {
        scale: 1.25,
        duration: 0.3,
        scrollTrigger: {
          trigger: icons_animation,
          toggleActions: "restart",
        },
      }
    );
    gsap.fromTo(
      icons_animation,
      { scale: 1.25 },
      {
        scale: 1,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: icons_animation,
          toggleActions: "restart",
        },
      }
    );

    gsap.fromTo(
      messages_animation,
      { opacity: 0, yPercent: +10 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: messages_animation,
          toggleActions: "restart",
        },
      }
    );
  }, []);

  return (
    <div className={`flex justify-end gap-10 `}>
      <div className="flex justify-end gap-4">
        <div
          ref={messages}
          className={`text-4xl leading-relaxed bg-[#FFF5DE] max-w-[${width}%] rounded-[70px] px-9 py-8 shadow-lg  border-8 border-[#FFC645] `}
        >
          <div>{text}</div>
          <div>{text2}</div>
          <div>{text3}</div>
        </div>
        <div>
          <img
            ref={icons}
            src={icon_tips}
            alt="Current User Icon"
            className=" w-32 h-32 border-8 border-[#FFC645] bg-[#FFF5DE] p-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Tips;
