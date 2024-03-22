import Emergency from "../../Images/story_14/emergency.gif";
import Dog from "../../Images/story_14/dog-st-14.png";
import Bin from "../../Images/story_14/bin.png";
import Poop from "../../Images/story_14/poop-st-14.png";
import Hand from "../../Images/story_14/hand-with-bag.gif";
import VFX from "../../Images/story_14/vfx.gif";
import BGTextBot from "../../Images/story_14/text-bg-1.png";
import BGTextTop from "../../Images/story_14/text-bg-2.png";
import HowTo from "../../Images/story_14/Pickupshit.gif";

import Chat from "../message";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story14() {
    
    useEffect(() => {
      

    }, []);
    return (
        <div className=" pt-[5%] flex flex-col">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <img className="w-[60%] absolute z-0" src={Emergency}/>
                </div>
                <div className=" grid grid-cols-3 pt-[30%]">
                    <div></div>
                    <div className=" font-sans text-3xl z-10">
                        <p className="flex justify-center leading-relaxed text-center">
                            มีเหตุการณ์ไม่คาดคิด มีตังค์ดันทำท่าเหมือนจะอึ 
                            คุณรีบหันไปด้วยความตกใจ พร้อมกับทำตาโต
                        </p>
                        <p className="flex justify-center leading-relaxed text-center pt-[15%]">
                            ...และใช่ คุณไม่สามารถห้ามเหตุการณ์นี้ได้ทัน
                            และต้องรับกรรมไป
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className=" grid grid-cols-2 gap-[5%] justify-center pt-[10%]">
                    <div className= "flex justify-start">
                        <div className="z-0">
                            <img className="absolute left-[5%] w-[25%]" src={Bin}/>
                        </div>
                        <div className="pt-[20%] z-10">
                            <img className="absolute left-[15%] w-[30%]" src={Dog}/>
                        </div>
                        <div className="flex pt-[75%] pl-[45%] z-20">
                            <img className="absolute w-[5%]" src={Poop}/>  
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
            <div className="pt-[10%]">
                <div className=" absolute left-[10%] pt-[27%]">
                    <p className="font-sans text-8xl text-[#4091AE] font-semibold z-0">ถุงขยะเก็บอึอึ๊น้องหมา!</p>
                </div>
                <div className=" grid grid-cols-2 z-20">
                    <div className="pl-[20%]">
                        <div className=" font-sans text-3xl pt-[20%]">
                            <p>บ่นไปก็เท่านั้น..ก็ต้องเก็บให้</p>
                            <p className="pt-[1.5%]">เจ้าตัวสร้างเรื่องอยู่ดี</p>
                        </div>
                        <div className=" font-sans text-6xl pt-[20%]">
                            <p>ดีนะที่ม่อน... เอ้ย!! เรามี</p>
                        </div>                   
                    </div>
                    <div>
                        <div className="flex justify-end pr-[5%]">
                            <img className="w-[70%] z-10" src={Hand}/>
                            <div className="absolute w-[37%] pr-[7%]">
                            <img className="z-0" src={VFX}/>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            <div className="pt-[10%]">
                <div className=" flex justify-center">
                    <div className=" absolute pt-[7%]">
                        <p className=" font-sans font-medium text-6xl text-[#4091AE]">จะกี่ก้อนก็ไม่หวั่น แม้วันมามาก</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className=" absolute pt-[15%]">
                        <img className="" src={HowTo}/>
                    </div>
                </div>
                <div className="flex justify-start">
                    <img className="" src={BGTextTop}/>
                </div>
                <div className="flex justify-end pt-[5%]">
                    <img className="" src={BGTextBot}/>
                </div>
            </div>
            
            

        </div>
    );
  }
  
  export default Story14;
  