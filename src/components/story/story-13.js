import Sniffing from "../../Images/story_13/sniffing.png";
import SniffingVFX from "../../Images/story_13/sniffing-vfx.gif";
import Frightened from "../../Images/story_13/frightened.gif";
import Meetang from "../../Images/story_13/meetang.png";
import Numkhaboun from "../../Images/story_13/namkhaboun.png";
import Guests from "../../Images/story_13/guests.png";
import BG_Guests from "../../Images/story_13/bg_guests.png";
import Sticker from "../../Images/story_13/sticker.gif"

import Tips from "../tips";
import Chat from "../message";


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story13() {
    const warningRef = useRef ();

  useEffect(() => {
    const warning = warningRef.current;

      gsap.fromTo(
        warning,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0,
          scrollTrigger: {
            trigger: warning,
            scrub: true,
            start: "-50px 100%",
            end: "100px 50%",
  
            /*markers : true,*/
          },
        }
      );
    
  }, []);
  return (
    <div className="flex flex-col pt-[5vw]">
        <div className="justify-end px-[10vw] font-sans text-[1.8vw] grid grid-cols-2 leading-relaxed pt-[10vw]">
        <div></div>
        <p> ในขณะเดินเล่น มีตังค์พยายามจะเดินนำ
            คุณต้องกระตุกสายจูงเบา ๆ สัก 3 ครั้ง พร้อมออกคำสั่ง
            “คอย มีตังค์คอย”  เมื่อมีตังค์ก็ทำท่านั่งคอยแล้ว
            คุณจึงเดินต่อไป  โดยให้มีตังค์คอยเดินขนาบข้าง
        </p>
        </div>

        <div className=" flex justify-start pt-[5vw] pl-[10vw]">
            <Tips 
            text="การเลี้ยงสุนัขที่ถูกต้อง ต้องอย่าให้สุนัขรู้สึกว่าตัวเองคือจ่าฝูงหรือหัวหน้า"
            text2="เพราะจะทำให้เขาทำอะไรตามใจและไม่เชื่อฟังคำสั่งของเจ้าของ"
            isLeft={true}
            />
        </div>

        <div className="grid grid-cols-2 pt-[5%]">
                <div className=" pl-[20vw] pr-[5vw] pt-[15vw]">
                    <p className="font-sans text-[1.8vw] text-right leading-relaxed">
                        พอเดินไปได้สักพัก มีตังค์ก็แวะสงสัย
                        ในทุก ๆ ที่ ที่เดินผ่านและคอยดม
                        อยู่ตลอดเวลา 
                    </p>
                </div>
            <div className=" flex justify-end pr-[0vw] ">
            <img className=" w-[45vw]" src={Sniffing}/>
            <img className=" w-[45vw] absolute opacity-[90%]" src={SniffingVFX}/>
            </div>
        </div>

        <div className="grid grid-cols-2">
            <div className=" pt-[30vw] z-50 pl-[20vw]">
                <p className="font-sans text-[1.8vw] leading-relaxed">
                แต่แล้วก็ดันไปเจอเจ้าตูบอีกตัวที่อยู่ในหมู่บ้านเข้า มีตังค์เลยเห่า! 
                แสดงอาการหวงอาณาเขตของสุนัข 
                แบบนี้ต้องออกคำสั่งสักหน่อยมันจะรบกวนคนอื่นเขา
                </p>
            </div>
            <img className="absolute left-[25vw] z-0 w-[15vw]" src={Frightened} ref={warningRef}/>
        </div>

        <div className=" flex flex-col-2 gap-[5vw] justify-center pt-[10vw]">
            <div className=" absolute left-[10vw] z-10">
                <Chat
                text="“มีตังค์ หยุด !”"
                isMe={true}
                showIcon={true}
                />
            </div> 
            <div className=" flex justify-end">
                <img className=" w-[30vw]" src={Numkhaboun}/>
            </div>
            <div className=" absolute right-[10vw] z-10 pt-[55vw]">
                <Chat
                text="“หยุดนะ พอเลย !”"
                isMe={false}
                showIcon={true}
                />
            </div>
            <div className=" flex justify-start">
                <img className=" w-[30vw]" src={Meetang}/>
            </div>           
        </div>

        <div className="pt-[5vw]">
            <div className=" flex justify-start pt-[5vw] pl-[10vw]">
                <Tips 
                text="โดยส่วนใหญ่สุนัขมักจำแนกคำสั่งด้วยน้ำเสียง และโทนเสียง"
                text2="ดังนั้นผู้เลี้ยงควรใช้น้ำเสียงให้เหมาะสมในการออกคำสั่ง"
                isLeft={true}
                />
            </div>
        </div>

        <div className=" flex flex-col-2 gap-[5vw] justify-center pt-[10vw] ">
            <div className="flex-col justify-start z-20">
                <div className="font-sans text-[1.8vw]">
                    <p className="">
                        หลังจากนั้นคุณก็พยายามกระตุกสายจูง
                    </p>
                    <p className="pt-[0.1vw]">
                        เพื่อให้มีตังค์เดินตามมา 
                    </p>
                </div>
                <div className="font-sans text-[1.8vw] pt-[5vw]">
                    <p className="">
                        มีตังค์ก็ทำตามอย่างว่าง่ายและเข้าใจ
                        </p>
                    <p className="pt-[0.1vw]">
                        ที่เจ้านายของเขาจะสื่อเป็นอย่างดี
                    </p>
                    <p className="pt-[0.1vw]">
                        แต่แล้วก็ดันเจอคนในหมู่บ้านซะได้
                    </p>
                </div>
                <div className="font-sans font-medium text-[1.8vw] pt-[5vw]">
                    <p className="">
                        ดีหน่อยที่มีตังค์ค่อนข้างจะคุ้นเคย
                    </p>
                    <p className="font-sans pt-[0.1vw]">
                        เพราะพบเจอกันบ่อยแล้ว
                    </p>
                    <p className="font-sans pt-[0.1vw]">
                        พี่เขาก็ได้มีการทักทายเจ้ามีตังค์
                    </p>
                    <p className="font-sans pt-[0.1vw]">
                        ด้วยเสียงที่นุ่มนวล
                    </p>
                </div>   
            </div>

            <div className="flex justify-start z-10">
                <img className="w-[30vw] h-[50vw]" src={Guests}/>
            </div>
            <div className="absolute pt-[32vw] z-0">
                <img className="w-[100vw]" src={BG_Guests}/>
            </div>
        </div>

        <div>
            <div className="flex justify-end pr-[10vw] z-10 pt-[10vw]">
                <Chat
                text="“ไง~~มีตังค์ มาเดินเล่นเหรอ”"
                isMe={false}
                showIcon={true}
                icon="female"
                />
            </div>
            <div className="flex justify-start pl-[10vw] z-10 pt-[10vw]">
                <Chat
                text="“วันหยุดพาออกมาเดินเปิดหูเปิดตาหน่อย"
                text2="เดี๋ยวจะเฉาเอา ฮ่าฮ่าฮ่า”"
                isMe={true}
                showIcon={true}
                icon="male"
                />
            </div>
            <div className="flex justify-end pr-[10vw] z-10 pt-[10vw]">
                <Chat
                text="“ดีแล้ว มีตังค์นิสัยดีนะเนี่ยกระดิกหางใหญ่เลย"
                text2="สงสัยจำกันได้ งั้นพี่ไปก่อนนะ”"
                isMe={false}
                showIcon={true}
                icon="female"
                />
            </div>
            <div className="flex justify-start pl-[10vw] z-10 pt-[10vw]">
                <Chat
                text="“เฟรนลี่ใหญ่เลยนะมีตังค์ แบบนี้ถ้าโจรเข้าบ้าน"
                text2="จะเป็นยังไงเนี้ย”"
                isMe={true}
                showIcon={true}
                icon="male"
                />
            </div>
            <div className="flex justify-end pr-[10vw]">
                <img className="w-[20vw]" src={Sticker}/>
            </div>            
        </div>
        
            
        
        
      
    </div>
  );
}

export default Story13;
