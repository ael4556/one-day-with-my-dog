import { useEffect, useRef } from "react";

import sun from "../Images/sun-morning.png";
import cloundLeftTop from "../Images/cloud-1.png";
import cloundRight from "../Images/cloud-2.png";
import cloundLeftBottom from "../Images/cloud-3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Sunset({ sunlight = sun }) {
  const sunRef = useRef();
  const cloundLeftTopRef = useRef();
  const cloundRightRef = useRef();
  const cloundLeftBottomRef = useRef();

  useEffect(() => {
    const sun = sunRef.current;
    const cloundLeft = cloundLeftTopRef.current;
    const cloundRight = cloundRightRef.current;
    const cloundLeftBottom = cloundLeftBottomRef.current;

    gsap.fromTo(
      sun,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sun,
          toggleActions: "restart",
          start : "-250vw 90%",
          end : "50vw 50%",
        },
      }
    );

    gsap.to(cloundLeft, {
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundLeft,
        toggleActions: "restart none none reset",
        start :"100vw 100%",
        end : "500vw 0%",
      },
    });

    gsap.to(cloundRight, {
      x: 330,
      duration: 2,
      scrollTrigger: {
        trigger: cloundRight,
        toggleActions: "restart none none reset",
        start :"100vw 100%",
        end : "500vw 0%",
      },
    });

    gsap.to(cloundLeftBottom, {
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: cloundLeftBottom,
        toggleActions: "restart none none reset",
        start :"100vw 100%",
        end : "500vw 0%",
      },
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <img
          className="absolute left-[20vw] pt-10 w-[100vw]"
          ref={cloundLeftTopRef}
          src={cloundLeftTop}
          alt="sun_morning"
        />
        <img
          className="absolute w-[95vw] pt-10"
          ref={sunRef}
          src={sunlight}
          alt="sun_morning"
        />
        <img
          className="absolute right-[18vw] pt-10 w-[100vw]"
          ref={cloundRightRef}
          src={cloundRight}
          alt="sun_morning"
        />
        <img
          className="absolute left-[20vw] pt-10 w-[100vw]"
          ref={cloundLeftBottomRef}
          src={cloundLeftBottom}
          alt="sun_morning"
        />
      </div>
    </>
  );
}

export default Sunset;
