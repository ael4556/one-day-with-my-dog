import { useEffect, useRef, useState } from "react";

import image_left_hand from "../../Images/story_10/hand-left.png";
import image_right_hand from "../../Images/story_10/hand-right.png";
import image_dog_bath from "../../Images/story_10/dog-bath.png";
import image_dog_bath_gif from "../../Images/story_10/dog-bath.gif";
import image_bubble from "../../Images/story_10/bubble.gif";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Story10_1 = () => {
  const dogRef = useRef();
  const dog2Ref = useRef();
  const handleftRef = useRef();
  const handRightRef = useRef();

  useEffect(() => {
    const dog = dogRef.current;
    const dog2 = dog2Ref.current;
    const handleft = handleftRef.current;
    const handRight = handRightRef.current;

    gsap.fromTo(
      dog,
      { yPercent: 0 },
      {
        yPercent: +310,
        duration: 10,

        scrollTrigger: {
          trigger: dog,
          scrub: true,
          start: "1100px 100% ",
          end: "5000px -140%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      dog2,
      { yPercent: 0 },
      {
        yPercent: +310,
        duration: 10,

        scrollTrigger: {
          trigger: dog2,
          scrub: true,
          start: "1100px 100% ",
          end: "5000px -140%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      handleft,
      { yPercent: 0, xPercent: 0 },
      {
        yPercent: +590,
        xPercent: +50,
        duration: 10,

        scrollTrigger: {
          trigger: handleft,
          scrub: true,
          start: "800px 100%",
          end: "4000px -120%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      handRight,
      { yPercent: 0, xPercent: 0 },
      {
        yPercent: +590,
        xPercent: -50,
        duration: 10,

        scrollTrigger: {
          trigger: handRight,
          scrub: true,
          start: "800px 100% ",
          end: "4000px -120%",

          /*markers : true,*/
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center pt-[10%]">
      <div className="flex">
        <div className="w-[100%] absolute start-[10%] end-[10%] pt-[100%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>

        <div className="w-[100%]" ref={dogRef}>
          <img src={image_dog_bath} />
        </div>
        <div className=" absolute w-[100%]" ref={dog2Ref}>
          <img src={image_dog_bath_gif} />
        </div>

        <div className=" pt-[20%]">
          <div className="absolute start-[10%]" ref={handleftRef}>
            <img className="w-[100%]" src={image_left_hand} />
          </div>
          <div className="absolute end-[9%]" ref={handRightRef}>
            <img className="w-[100%]" src={image_right_hand} />
          </div>
        </div>

        <div className="w-[100%] absolute start-[10%] end-[10%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>
        <div className="w-[100%] absolute start-[10%] end-[10%] pt-[200%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>
      </div>
    </div>
  );
};
  
  export default Story10_1;
  