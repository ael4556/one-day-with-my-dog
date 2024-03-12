import image_city from "../../../Images/story_12/bg-village.png";
import image_dog_walk from "../../../Images/story_12/walking-dog.png";
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
          snap: 1 / (panels.length - 1),
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
          <div className="flex justify-center items-center absolute z-10 left-[3%] pt-[3.5%]">
            <img className="w-3/5 " src={image_dog_walk} />
          </div>
          <div className="panel">
            <img src={image_city} />
          </div>
          <div className="panel ">
            <img src={image_city} />
          </div>
          <div className="panel ">
            <img src={image_city} />
          </div>
          <div className="panel ">
            <img src={image_city} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Story12;
