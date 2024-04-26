import image_city1 from "../../../Images/story_12/bg-village1-01.png";
import image_city2 from "../../../Images/story_12/bg-village1-02.png";
import image_city3 from "../../../Images/story_12/bg-village1-03.png";
import image_dog_walk from "../../../Images/story_12/dogwalk.gif";
import "./style.css";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story12() {
  const component = useRef();
  const slider = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          /*snap: 1 / (panels.length - 1),*/
          end: () => "+=" + slider.current.offsetWidth,
          start: "top top",
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={component}>
        <div ref={slider} className="containers">
          <div className="flex justify-start absolute z-10 left-[-1vw] pt-[20vw]">
            <img className="w-[70vw] " src={image_dog_walk} />
          </div>
          <div className="panel ">
            <img className="w-[100vw]" src={image_city1} />
          </div>
          <div className="panel ">
            <img className="w-[100vw]" src={image_city2} />
          </div>
          <div className="panel ">
            <img className="w-[100vw]" src={image_city3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Story12;
