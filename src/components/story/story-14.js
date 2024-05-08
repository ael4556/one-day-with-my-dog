import Emergency from "../../Images/story_14/emergency.gif";
import Dog from "../../Images/story_14/dog-st-14.png";
import Bin from "../../Images/story_14/bin.png";
import Poop from "../../Images/story_14/poop-st-14.png";
import Hand from "../../Images/story_14/hand-with-bag.gif";
import Vfx from "../../Images/story_14/vfx.gif";
import BGTextBot from "../../Images/story_14/text-bg-1.png";
import BGTextTop from "../../Images/story_14/text-bg-2.png";
import HowTo from "../../Images/story_14/Pickupshit.gif";
import Bg_Park from "../../Images/story_14/bg-park.png";

import Chat from "../message";

import { useEffect, useRef,} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story14() {
    const text_story14_1Ref = useRef ();
    const text_story14_2Ref = useRef ();
    const title_EmergencyRef = useRef ();
    const text_story14_3Ref = useRef ();
    const text_story14_4Ref = useRef ();
    const text_story14_5Ref = useRef ();

    useEffect(() => {
    const text_story14_1 = text_story14_1Ref.current;
    const text_story14_2 = text_story14_2Ref.current;
    const title_Emergency = title_EmergencyRef.current;
    const text_story14_3 = text_story14_3Ref.current;
    const text_story14_4 = text_story14_4Ref.current;
    const text_story14_5 = text_story14_5Ref.current;

    gsap.fromTo(
        text_story14_1,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story14_1,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
  
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story14_2,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story14_2,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
  
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        title_Emergency,
        { scale: 0 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: title_Emergency,
            scrub: true,
            start: "-100px 100%",
            end: "200px 50%",
  
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story14_3,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story14_3,
            scrub: true,
            start: "-100px 90%",
            end: "100px 50%",
  
            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story14_4,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story14_4,
            scrub: true,
            start: "-100px 80%",
            end: "100px 50%",

            /*markers : true,*/
          },
        }
      );

      gsap.fromTo(
        text_story14_5,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: text_story14_5,
            scrub: true,
            start: "200px 90%",
            end: "300px 50%",

            
          },
        }
      );

    }, []);
    return (
        <div className=" pt-[5%] flex flex-col">
            <div className="flex flex-col">
                <div className="flex justify-center" ref={title_EmergencyRef}>
                    <img className="w-[60vw] absolute z-0" src={Emergency}/>
                </div>
                <div className=" grid grid-cols-3 pt-[30%]">
                    <div></div>
                    <div className=" font-sans text-[1.8vw] z-10">
                        <p className="flex justify-center leading-relaxed text-center" ref={text_story14_1Ref}>
                            มีเหตุการณ์ไม่คาดคิด มีตังค์ดันทำท่าเหมือนจะอึ 
                            คุณรีบหันไปด้วยความตกใจ พร้อมกับทำตาโต
                        </p>
                        <p className="flex justify-center leading-relaxed text-center pt-[15%]" ref={text_story14_2Ref}>
                            ...และใช่ คุณไม่สามารถห้ามเหตุการณ์นี้ได้ทัน
                            และต้องรับกรรมไป
                        </p>
                    </div>
                    <div></div>
                </div>
                <div>
                  <img className=" absolute w-[100vw]" src={Bg_Park}/>
                  <div className=" grid grid-cols-2 gap-[5%] justify-center pt-[10%]">
                      <div className= "flex justify-start">
                          <div className="z-0 pt-[15%]">
                              <img className="absolute left-[5%] w-[25vw]" src={Bin}/>
                          </div>
                          <div className="pt-[23%] z-10">
                              <img className="absolute left-[17%] w-[35vw]" src={Dog}/>
                          </div>
                          <div className="flex pt-[80%] pl-[45%] z-20">
                              <img className="absolute w-[5vw]" src={Poop}/>
                          </div>
                      </div>
                      <div className=" flex justify-end">
                          <div className="pr-[20%] pt-[25%]">
                              <Chat 
                              text="“มีตังค์ทำไมทำแบบนี้" 
                              text2="เราจะอึข้างนอกไม่ได้" 
                              text3="ถ้าไม่ใช่ในบ้านเรา”" 
                              isMe={false} 
                              showIcon={true} 
                              icon="male"/>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className="pt-[10%]">
                <div className=" absolute left-[10%] pt-[27%]" ref={text_story14_5Ref}>
                    <p className="font-sans text-[5vw] text-[#4091AE] font-semibold z-0">ถุงขยะเก็บอึอึ๊น้องหมา!</p>
                </div>
                <div className=" grid grid-cols-2 z-20">
                    <div className="pl-[20%]">
                        <div className=" font-sans text-[1.8vw] pt-[20%]" ref={text_story14_3Ref}>
                            <p>บ่นไปก็เท่านั้น..ก็ต้องเก็บให้</p>
                            <p className="pt-[1.5%]">เจ้าตัวสร้างเรื่องอยู่ดี</p>
                        </div>
                        <div className=" font-sans text-[3.14vw] pt-[20%]" ref={text_story14_4Ref}>
                            <p>ดีนะที่ม่อน... เอ้ย!! เรามี</p>
                        </div>                   
                    </div>
                    <div>
                        <div className="flex justify-end pr-[5%]" >
                            <img className="w-[35vw] z-10" src={Hand} />
                            <div className="absolute w-[35vw] pr-[7%]">
                            <img className="z-0 " src={Vfx}/>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            <div className="pt-[10%]">
                <div className=" flex justify-center">
                    <div className=" absolute pt-[7%]" >
                        <p className=" font-sans font-medium text-[3.14vw] text-[#4091AE]">จะกี่ก้อนก็ไม่หวั่น แม้วันมามาก</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className=" absolute pt-[15%] z-50">
                        <img className="w-[80vw]" src={HowTo}/>
                    </div>
                </div>
                <div className="flex justify-start" >
                    <img className="w-[60vw] z-0" src={BGTextTop}/>
                </div>
                <div className="flex justify-end pt-[5%]" >
                    <img className="w-[45vw] z-0" src={BGTextBot}/>
                </div>
            </div>
            
            

        </div>
    );
  }
  
  export default Story14;
  