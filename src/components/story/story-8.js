import { useEffect, useRef } from "react";

import dog from "../../Images/story_8/dog-snack.png";
import snack_dog from "../../Images/story_8/snack-dog.png"
import snack from "../../Images/story_8/snack.png";
import CardFlip from "../cardflip";
import Title from "../title";
import Tips from "../tips";
import cardfront_1 from "../../Images/story_8/command-cards-1.png";
import cardfront_2 from "../../Images/story_8/command-cards-2.png";
import cardfront_3 from "../../Images/story_8/command-cards-3.png";
import cardfront_4 from "../../Images/story_8/command-cards-4.png";
import cardback_1 from "../../Images/story_8/command-cards-1-back.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story8() {

  const text_story8_1Ref = useRef();
  const text_story8_2Ref = useRef();
  const snack_motionRef = useRef();
  const dog_snackRef = useRef();
  const snack_dogRef = useRef();
  const card_scale1Ref = useRef();
  const card_scale2Ref = useRef();
  const card_scale3Ref = useRef();
  const card_scale4Ref = useRef();

  useEffect(() => {
    const text_story8_1 = text_story8_1Ref.current;
    const text_story8_2 = text_story8_2Ref.current;
    const snack_motion = snack_motionRef.current;
    const dog_snack = dog_snackRef.current;
    const snack_dog = snack_dogRef.current;
    const card_scale1 = card_scale1Ref.current;
    const card_scale2 = card_scale2Ref.current;
    const card_scale3 = card_scale3Ref.current;
    const card_scale4 = card_scale4Ref.current;

    gsap.fromTo(
      text_story8_1,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story8_1,
          scrub: true,
          start: "1px 70%",
          end: "1px 40%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      snack_motion,
      { opacity: 0, scale : 0.2, xPercent: +50},
      {
        opacity: 1,
        scale : 1,
        xPercent : 0,
        duration: 1,
        scrollTrigger: {
          trigger: snack_motion,
          scrub: true,
          start: "100px 100%",
          end: "200px 80%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      dog_snack,
      { opacity: 0, scale : 0.2, xPercent: -50},
      {
        opacity: 1,
        scale : 1,
        xPercent : 0,
        duration: 1,
        scrollTrigger: {
          trigger: dog_snack,
          scrub: true,
          start: "100px 100%",
          end: "200px 80%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      snack_dog,
      { opacity: 0, scale : 0.2, xPercent: 50},
      {
        opacity: 1,
        scale : 1,
        xPercent : 0,
        duration: 1,
        scrollTrigger: {
          trigger: snack_dog,
          scrub: true,
          start: "100px 100%",
          end: "200px 80%",
          /*markers : true,*/
        },
      }
    );

    
    gsap.fromTo(
      text_story8_2,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story8_2,
          scrub : true,
          start : "1px 80%",
          end : "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      card_scale1,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card_scale1,
          toggleActions : 'restart',
          start : "-400px 80%",
          end : "-300px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      card_scale2,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: card_scale2,
          toggleActions : 'restart',
          start : "-400px 80%",
          end : "-300px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      card_scale3,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: card_scale3,
          toggleActions : 'restart',
          start : "-400px 80%",
          end : "-300px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      card_scale4,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: card_scale4,
          toggleActions : 'restart',
          start : "-400px 80%",
          end : "-300px 50%",

          /*markers : true,*/
        },
      }
    );


    
  }, []);
 
  return (
    <div className="flex flex-col">
      <div className="flex pl-[15%] pr-[15%]">
        <div className="flex flex-col max-w-2xl">
          <div className="text-3xl pt-24 leading-relaxed" ref={text_story8_1Ref}>
            <p>
              เวลาแบบนี้ควรฝึกเจ้าตูบน้อยซักหน่อย...
              คุณเลยเดินไปหยิบขนมสุดโปรดของมัตังค์
              และลงไปนั่งในระดับเดียวกับมีตังค์ เตรียมพร้อมที่จะออกคำสั่ง
            </p>
          </div>
          <div className="flex justify-center ">
            <img className=" pt-40 w-[40%]" src={snack} ref={snack_motionRef}/>
          </div>
        </div>

      </div>
      <div className=" absolute pt-[8%] right-[25%]" ref={snack_dogRef}>
          <img className="w-[80%]" src={snack_dog}/>
        </div>

        <div className=" absolute right-[10%]" ref={dog_snackRef}>
          <img className="w-[80%]" src={dog} />
        </div>
      <div className="flex justify-center" ref={text_story8_2Ref}>
        <Title title="เลือกคำสั่งที่ต้องการฝึก" />
      </div>
      
      <div className="grid grid-cols-4 justify-items-center pt-[7%] px-32">

        <div ref={ card_scale1Ref}><CardFlip image_front={cardfront_1} image_back={cardback_1}/></div>        
        <div ref={ card_scale2Ref}><CardFlip image_front={cardfront_2} image_back={cardback_1}/></div>
        <div ref={ card_scale3Ref}><CardFlip image_front={cardfront_3} image_back={cardback_1}/></div>
        <div ref={ card_scale4Ref}><CardFlip image_front={cardfront_4} image_back={cardback_1}/></div>

      </div>

      <div className="flex pt-[40%] justify-end pr-[10%]">
        <Tips text="อย่าลืมชมเจ้าตูบทุกครั้ง เมื่อน้องทำได้ดี" isDog={true}/>
      </div>
    </div>
  );
}

export default Story8;
