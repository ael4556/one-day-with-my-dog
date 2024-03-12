import { useEffect, useRef } from "react";
import Chat from "../chat";

import garden_dog from "../../Images/story_9/garden-dog.png";
import ball from "../../Images/story_9/ball.png";
import frisbee_dog from "../../Images/story_9/frisbee-dog.png";
import text_stroke_3 from "../../Images/SVG/text-stroke-3.png"
import dog from "../../Images/story_9/dog.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story9() {
    const text_story9_1Ref = useRef();
    const text_story9_2Ref = useRef();
    const text_story9_3Ref = useRef();
    const text_story9_4Ref = useRef();
    
    const balldog_infoRef = useRef();
    const frisbeedog_infoRef = useRef();
    const text_stroke3Ref = useRef();
    const dog_jumpRef = useRef ();
    const bouncing_ballRef = useRef ();

    useEffect(() => {
    const text_story9_1 = text_story9_1Ref.current;
    const text_story9_2 = text_story9_2Ref.current;
    const text_story9_3 = text_story9_3Ref.current;
    const text_story9_4 = text_story9_4Ref.current;
    
    const balldog_info = balldog_infoRef.current;
    const frisbeedog_info = frisbeedog_infoRef.current;
    const text_stroke3 = text_stroke3Ref.current;
    const dog_jump = dog_jumpRef.current;
    const bouncing_ball = bouncing_ballRef.current;

        gsap.fromTo(
        text_story9_1,
          { opacity: 0, scale: 0.9,},
          {
            opacity: 1,
            duration: 2,
            scale : 1,
            scrollTrigger: {
              trigger: text_story9_1,
              scrub : true,
              start : "0px 80%",
              end : "0px 40%",
    
              /*markers : true,*/
            },
          }
        );

        gsap.fromTo(
          text_stroke3,
            { opacity: 0, scale: 0.9,},
            {
              opacity: 1,
              duration: 2,
              scale: 1 , 
              scrollTrigger: {
                trigger: text_stroke3,
                scrub : true,
                start : "600px 80%",
                end : "600px 40%",
      
                /*markers : true*/
              },
            }
          );

          gsap.fromTo(
            text_story9_2,
              { opacity: 0, scale: 0.9,},
              {
                opacity: 1,
                duration: 2,
                scale : 1,
                scrollTrigger: {
                  trigger: text_story9_2,
                  scrub : true,
                  start : "0px 80%",
                  end : "0px 40%",
        
                  /*markers : true,*/
                },
              }
            );

            gsap.fromTo(
              balldog_info,
                { scale: 0.5,},
                {
                  duration: 0.5,
                  scale : 1,
                  scrollTrigger: {
                    trigger: balldog_info,
                    scrub : true,
                    start : "-100px 80%",
                    end : "-100px 50%",
          
                    /*markers : true,*/
                  },
                }
              );

              gsap.fromTo(
                frisbeedog_info,
                  { scale: 0.5,},
                  {
                    duration: 0.5,
                    scale : 1,
                    scrollTrigger: {
                      trigger: frisbeedog_info,
                      scrub : true,
                      start : "-100px 80%",
                      end : "-100px 50%",
            
                      /*markers : true,*/
                    },
                  }
                );

                gsap.fromTo(
                  text_story9_3,
                    { opacity: 0, scale: 0.9,},
                    {
                      opacity: 1,
                      duration: 2,
                      scale : 1,
                      scrollTrigger: {
                        trigger: text_story9_3,
                        scrub : true,
                        start : "200px 80%",
                        end : "200px 40%",
              
                        /*markers : true,*/
                      },
                    }
                  );

                  gsap.fromTo(
                    text_story9_4,
                      { opacity: 0, scale: 0.9,},
                      {
                        opacity: 1,
                        duration: 2,
                        scale : 1,
                        scrollTrigger: {
                          trigger: text_story9_4,
                          scrub : true,
                          start : "200px 80%",
                          end : "200px 40%",
                
                          /*markers : true,*/
                        },
                      }
                    );

            gsap.fromTo(
              dog_jump,
              { yPercent: 0, xPercent: 10, scale: 0.8 },
              {
                yPercent: -30,
                xPercent: -25,
                scale: 1,
                duration: 3,
                delay: 0,
                scrollTrigger: {
                  trigger: dog_jump,
                  scrub: true,
                  start: "200px 90%",
                  end: "100px 50%",
        
                  /*markers : true,*/
                },
              }
            );

            gsap.fromTo(
              bouncing_ball,
              { yPercent: 0, xPercent: 10, scale: 0.8 },
              {
                yPercent: -50,
                xPercent: -60,
                scale: 1.1,
                rotation: -360,
                duration: 3,
                delay: 0,
                scrollTrigger: {
                  trigger: bouncing_ball,
                  scrub: true,
                  start: "-100px 90%",
                  end: "0px 40%",
        
                  /*markers : true,*/
                },
              }
            );
    
      }, []);
    
      return (
        <div className="pt-[10%]">
            <div className=" flex flex-col justify-center px-[24.5%] pt-28 ">
                <p className="text-3xl leading-loose text-center" ref={text_story9_1Ref}>
                หลังจากนั้น คุณก็เดินออกไปที่สวนพร้อมเรียกมีตังค์ให้ออกมาพร้อมกัน
                แต่ก็ไม่ลืมที่จะหยิบของเล่นสุดโปรดของมีตังค์ที่เก็บไว้ในลิ้นชักใต้ทีวีไปด้วย
                </p>
            </div>
            <div className=" flex justify-center pt-28">
                
                <p className="text-3xl absolute right-[37%] pt-[13%]" ref={text_story9_3Ref}>ลูกบอล</p>
                <p className="text-3xl absolute left-[37%] pt-[13%]" ref={text_story9_4Ref}>จานร่อน</p>
                
                <img className="w-[32%] absolute pt-[29.7%] right-[10%] z-20"
                ref={text_stroke3Ref}
                src={text_stroke_3}
                alt={text_stroke_3}
                />
                <img
                className=" w-[10%] absolute right-[35%] hover:scale-110 duration-300"
                src={ball}
                alt={ball}
                ref={balldog_infoRef}
                />
                <img
                className=" w-[10%] absolute left-[35%] hover:scale-110 duration-300"
                src={frisbee_dog}
                alt={frisbee_dog}
                ref={frisbeedog_infoRef}
                />
                
                <img className=" pt-[15%]"
                src={garden_dog}
                alt={garden_dog}
                />

                <div className=" absolute z-10 pt-[35%] pl-[30%]">
                <img className=" w-[80%]"
                src={dog}
                alt={dog}
                ref={dog_jumpRef}
                />
                </div>

                <div className=" absolute z-10 pt-[55%] left-[35%]">
                <img className=" w-[80%]"
                src={ball}
                alt={ball}
                ref={bouncing_ballRef}
                />
                </div>

            </div>

            <div className="pl-[10%]">
              <Chat 
              text="“แดดเริ่มร้อนเเล้วนะ มานั่งพักก่อน”" 
              isMe={false}
              showIcon={true} />
            </div>
            <div className=" flex flex-col justify-center px-[20%] pt-32 ">
              <p className="text-3xl leading-loose text-center" ref={text_story9_2Ref}>
              หลังจากที่คุณให้มีตังค์นอนเล่นหน้าบ้าน เพื่อระหว่างนั้นก็เอาของต่าง ๆ มาเตรียมไว้ 
              แชมพูอาบน้ำสุนัขเอย ผ้าเช็ดตัวเอย และต่อสายยาง พร้อมอาบน้ำให้เจ้าตัวแสบ !
              </p>
            </div>
        </div>
      );
    }

export default Story9;
