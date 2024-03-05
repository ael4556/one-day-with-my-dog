import living_room from "../../Images/story_6/living-room.png";
import dog_sleep from "../../Images/story_6/dog-sleep.png";
import mop from "../../Images/story_6/mop.png";
import sponge from "../../Images/story_6/sponge.png";
import vacuum from "../../Images/story_6/vacuum.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story6() {
  const dogsleepRef = useRef();
  const VacuumRef = useRef ();
  const SpongeRef = useRef ();
  const MopRef = useRef ();
  const livingRoomRef = useRef ();

  useEffect(() => {
    const dogsleep = dogsleepRef.current;
    const Vacuum = VacuumRef.current;
    const Sponge = SpongeRef.current;
    const Mop = MopRef.current;
    const livingRoom = livingRoomRef.current;

    gsap.fromTo(
      dogsleep,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        scrollTrigger: {
          trigger: dogsleep,
          scrub: true,
          start: "0px 60%",
          end: "100px 30%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Vacuum,
      { scale: 0.8, yPercent:-50, xPercent: 30},
      {
        scale: 1,
        yPercent : 10,
        xPercent : 0,
        
        scrollTrigger: {
          trigger: Vacuum,
          toggleActions : 'restart',
          start : "300px 40%",
          end : "0px 0%",
          scrub : true,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Sponge,
      { scale: 0.8, yPercent:-50, xPercent: 30},
      {
        scale: 1,
        yPercent : 10,
        xPercent : 0,
        
        scrollTrigger: {
          trigger: Sponge,
          toggleActions : 'restart',
          start : "200px 40%",
          end : "-100px 0%",
          scrub : true,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Mop,
      { scale: 0.8, yPercent:-50, xPercent: -30},
      {
        scale: 1,
        yPercent : 10,
        xPercent : 0,
        
        scrollTrigger: {
          trigger: Mop,
          toggleActions : 'restart',
          start : "200px 40%",
          end : "-100px 0%",
          scrub : true,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      livingRoom,
      { yPercent: 0 },
      {
        yPercent : 20,
        duration: 1,
        scrollTrigger: {
          trigger: livingRoom,
          toggleActions : 'restart',
          start : "1000px 80%",
          end : "800px 0%",
          scrub : true,

          /*markers : true,*/
        },
      }
    );

  }, []);

  return (
    <>
      <div className="flex justify-center">
        <img
          className=" w-[100%] pt-[34vh]"
          ref={livingRoomRef}
          src={living_room}
          alt="sleep_night"
        />
        <img className="absolute w-[40%] pt-[5%]" src={dog_sleep} alt="dog_in_frame" ref={dogsleepRef}/>
        <div className="pt-[30%]">
          <img
            className="w-[30%] absolute left-[10%]"
            ref={VacuumRef}
            src={vacuum}
            alt="dog_in_frame"
          />
          <img
            className="w-[15%] absolute left-[30%]"
            ref={SpongeRef}
            src={sponge}
            alt="dog_in_frame"
          />
          <img
            className="w-[25%] absolute right-[10%]"
            ref={MopRef}
            src={mop}
            alt="dog_in_frame"
          />
        </div>
      </div>
    </>
  );
}

export default Story6;
