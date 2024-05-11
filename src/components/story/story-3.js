
import sleep_dog_morning from "../../Images/story_3/sleep-with-dog-morning-test.png";
import dog_in_frame from "../../Images/story_3/dog-in-frame-test.png";
import Chat from "../message";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story3() {

  const dog_inframeRef = useRef();

  useEffect(() => {
    const dog_inframe = dog_inframeRef.current;

    gsap.fromTo(
      dog_inframe,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: dog_inframe,
          scrub : true,
          start : "0px 50%",
          end : "200px 0%",

          /*markers : true,*/
        },
      }
    );

  }, []);

  return (
    <>
      <div className="flex justify-start ">
      <img className=" w-[100vw]" src={sleep_dog_morning} alt="sleep_night" />
        <img 
          className="w-[30vw] absolute left-[60vw] " 
          src={dog_in_frame} 
          alt="dog_in_frame"
          ref={dog_inframeRef}
          />
        </div>

          <div className="absolute left-[35vw] pt-[25vw]">
              <Chat
                text="“ไง~ มีตังค์ เมื่อคืนขอโทษน๊าา เหนื่อยไปหน่อย”"
                showIcon={true}
                isMe={false}

              />
          </div>
    </>
  );
}

export default Story3;
