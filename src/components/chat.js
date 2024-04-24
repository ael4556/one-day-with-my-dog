import { useEffect, useRef } from "react";

import icon_face from "../Images/SVG/icon-face.svg";
import icon_face_female from "../Images/SVG/icon-face.svg";
import icon_dog from "../Images/SVG/icon-dog.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Chat({
  text = "ไม่มีข้อความ",
  text2 = "",
  text3 = "",
  isMe = true,
  showIcon = true,
  isDog = false,
}) {
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
        duration: 0.5,
        scrollTrigger: {
          trigger: icons_animation,
          toggleActions : 'restart',
          start : "-200px 90%",
          end : "50px 50%",
          
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
          toggleActions : 'restart'
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
          toggleActions : 'restart',
          start : "-200px 90%",
          end : "50px 50%",
          
        },
      }
    );
  }, []);

  return (
    <div className={`flex gap-[2vw] ${isMe ? "justify-end" : "justify-start"}`}>
      {!isMe && showIcon && (
        <div>
          <img
            ref={icons}
            src={isDog ? icon_dog : icon_face}
            alt="Current User Icon"
            className=" w-[6.27vw] h-[6.27vw] border-[0.4vw] border-gray-300 bg-gray-200 p-[0.627vw] rounded-full"
          />
        </div>
      )}
      <div
        ref={messages}
        className="text-[1.8vw] leading-tight bg-gray-200 rounded-[70px] px-[1.9vw] py-[1.7vw] shadow-lg  border-[0.4vw] border-gray-300"
      >
        <div>{text}</div>
        <div>{text2}</div>
        <div>{text3}</div>
      </div>
      {isMe && showIcon && (
        <div>
          <img
            ref={icons}
            src={isDog ? icon_dog : icon_face}
            alt="Current User Icon"
            className=" w-[6.27vw] h-[6.27vw] border-[0.4vw] border-gray-300 bg-gray-200 p-3 rounded-full"
          />
        </div>
      )}
    </div>
  );
}

export default Chat;
