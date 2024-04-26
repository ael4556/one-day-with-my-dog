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

  useEffect(() => {
    const dogsleep = dogsleepRef.current;
    const Vacuum = VacuumRef.current;
    const Sponge = SpongeRef.current;
    const Mop = MopRef.current;
   
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
      { scale: 0.8, yPercent:0,},
      {
        scale: 1,
        yPercent : 20,
        
        scrollTrigger: {
          trigger: Vacuum,
          toggleActions : 'restart',
          start : "-400px 40%",
          end : "100px 0%",
          scrub : true,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Sponge,
      { scale: 0.5, yPercent:0,},
      {
        scale: 1,
        yPercent : 20,
        scrollTrigger: {
          trigger: Sponge,
          toggleActions : 'restart',
          start : "-400px 40%",
          end : "100px 0%",
          scrub : true,
          

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      Mop,
      { scale: 0.5, yPercent: 0,},
      {
        scale: 1,
        yPercent : 20,
        scrollTrigger: {
          trigger: Mop,
          toggleActions : 'restart',
          start : "-400px 40%",
          end : "100px 0%",
          scrub : true ,
          

          /*markers : true,*/
        },
      }
    );

  }, []);

  return (
    <>
      <div className="flex justify-center">
        <img
          className=" w-[100vw] pt-[25vw]"
          src={living_room}
        />
        <img 
          className="absolute w-[40vw] pt-[5vw]" 
          src={dog_sleep}  
          ref={dogsleepRef}
        />
        <div className="pt-[30vw]">
          <img
            className="w-[30vw] absolute left-[10%]"
            ref={VacuumRef}
            src={vacuum}
          />
          <img
            className="w-[15vw] absolute left-[30vw]"
            ref={SpongeRef}
            src={sponge}
          />
          <img
            className="w-[25vw] absolute right-[10vw]"
            ref={MopRef}
            src={mop}
          />
        </div>
      </div>
    </>
  );
}

export default Story6;
