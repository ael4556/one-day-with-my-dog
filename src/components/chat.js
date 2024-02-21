import { useEffect, useRef } from "react";

import icon_face from "../Images/SVG/icon-face.svg";
import icon_dog from "../Images/SVG/icon-dog.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Chat({ text = "ไม่มีข้อความ", isMe = true, showIcon = true }) {
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
        duration: 0.2,
        scrollTrigger: {
          trigger: icons_animation,
        },
      }
    );
    gsap.fromTo(
      icons_animation,
      { scale: 1.25 },
      {
        scale: 1,
        duration: 0.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: icons_animation,
        },
      }
    );

    gsap.fromTo(
      messages_animation,
      { scale: 0.9},
      {
        scale: 1,
        duration: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: messages_animation,
        },
      }
    );
  }, []);

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        ref={messages}
        className="text-2xl bg-gray-200  rounded-2xl pt-2 px-4 shadow-lg  border-2 border-gray-300"
      >
        {text}
      </div>
      {isMe && showIcon && (
        <div className="ml-2">
          <img
            ref={icons}
            src={icon_face}
            alt="Current User Icon"
            className="w-16 h-16 border-2 border-gray-300 bg-gray-200 p-3 rounded-full"
          />
        </div>
      )}
    </div>
  );
}

export default Chat;
