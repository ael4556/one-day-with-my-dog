import { useEffect, useRef } from "react";

import icon_dog from "../Images/SVG/icon-dog.svg";
import icon_male from "../Images/SVG/icon-face.svg";
import icon_female from "../Images/SVG/icon-face-female.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Chat({
  text = "ไม่มีข้อความ",
  text2 = "",
  text3 = "",
  isMe = false,
  showIcon = true,
  icon = "male",
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
    <div className={`flex gap-10 ${isMe ? "justify-end" : "justify-start"}`}>
      {isMe && showIcon && (
        <div>
          <img
            ref={icons}
            src={
              icon === "male"
                ? icon_male
                : icon === "female"
                ? icon_female
                : icon_dog
            }
            alt="Current User Icon"
            className=" w-32 h-32 border-8 border-gray-300 bg-gray-200 p-3 rounded-full"
          />
        </div>
      )}
      <div
        ref={messages}
        className="text-4xl leading-tight bg-gray-200 rounded-[70px] px-9 py-8 shadow-lg  border-8 border-gray-300"
      >
        <div>{text}</div>
        <div>{text2}</div>
        <div>{text3}</div>
      </div>
      {!isMe && showIcon && (
        <div>
          <img
            ref={icons}
            src={
              icon === "male"
                ? icon_male
                : icon === "female"
                ? icon_female
                : icon_dog
            }
            alt="Current User Icon"
            className=" w-32 h-32 border-8 border-gray-300 bg-gray-200 p-3 rounded-full"
          />
        </div>
      )}
    </div>
  );
}

export default Chat;
