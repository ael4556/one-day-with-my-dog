import Sniffing from "../../Images/story_13/sniffing.png";
import Frightened from "../../Images/story_13/frightened.png";
import Meetang from "../../Images/story_13/meetang.png";
import Numkhaboun from "../../Images/story_13/namkhaboun.png";
import Guests from "../../Images/story_13/guests.png";
import BG_Guests from "../../Images/story_13/bg_guests.png";
import Sticker from "../../Images/story_13/sticker.png"

import Tips from "../tips";
import Chat from "../chat";


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story13() {
  
  useEffect(() => {

    
  }, []);
  return (
    <div className=" pt-[15%] flex flex-col">
        <div className="justify-end px-[10%] font-sans text-3xl grid grid-cols-2 leading-relaxed">
        <div></div>
        <p> ในขณะเดินเล่น มีตังค์พยายามจะเดินนำ
            คุณต้องกระตุกสายจูงเบา ๆ สัก 3 ครั้ง พร้อมออกคำสั่ง
            “คอย มีตังค์คอย”  เมื่อมีตังค์ก็ทำท่านั่งคอยแล้ว
            คุณจึงเดินต่อไป  โดยให้มีตังค์คอยเดินขนาบข้าง
        </p>
        </div>

        <div className=" flex justify-start pt-[5%] pl-[10%]">
            <Tips 
            text="การเลี้ยงสุนัขที่ถูกต้อง ต้องอย่าให้สุนัขรู้สึกว่าตัวเองคือจ่าฝูงหรือหัวหน้า"
            text2="เพราะจะทำให้เขาทำอะไรตามใจและไม่เชื่อฟังคำสั่งของเจ้าของ"
            />
        </div>

        <div className="grid grid-cols-2 pt-[5%]">
                <div className=" pl-[55%] pt-[15%]">
                    <p className="font-sans text-3xl text-right leading-relaxed">
                        พอเดินไปได้สักพัก มีตังค์ก็แวะสงสัย
                        ในทุก ๆ ที่ ที่เดินผ่านและคอยดม
                        อยู่ตลอดเวลา 
                    </p>
                </div>
            <div className=" flex justify-end pr-[20%] ">
            <img className=" w-[100%]" src={Sniffing}/>
            </div>
        </div>

        <div className="grid grid-cols-2">
            <div className=" pt-[30%] z-50 pl-[20%]">
                <p className="font-sans text-3xl leading-relaxed">
                แต่แล้วก็ดันไปเจอเจ้าตูบอีกตัวที่อยู่ในหมู่บ้านเข้า มีตังค์เลยเห่า! 
                แสดงอาการหวงอาณาเขตของสุนัข 
                แบบนี้ต้องออกคำสั่งสักหน่อยมันจะรบกวนคนอื่นเขา
                </p>
            </div>
            <img className="absolute left-[25%] z-0" src={Frightened}/>
        </div>

        <div className=" flex flex-col-2 gap-[5%] justify-center pt-[10%]">
            <div className=" absolute left-[10%] z-10">
                <Chat
                text="“มีตังค์ หยุด!”"
                isMe={false}
                showIcon={true}
                />
            </div> 
            <div className=" flex justify-end">
                <img className=" w-[80%]" src={Numkhaboun}/>
            </div>
            <div className=" absolute right-[10%] z-10 pt-[55%]">
                <Chat
                text="“หยุดนะ พอเลย!”"
                isMe={true}
                showIcon={true}
                />
            </div>
            <div className=" flex justify-start">
                <img className=" w-[80%]" src={Meetang}/>
            </div>           
        </div>

        <div className="pt-[5%]">
            <div className=" flex justify-start pt-[5%] pl-[10%]">
                <Tips 
                text="โดยส่วนใหญ่สุนัขมักจำแนกคำสั่งด้วยน้ำเสียง และโทนเสียง"
                text2="ดังนั้นผู้เลี้ยงควรใช้น้ำเสียงให้เหมาะสมในการออกคำสั่ง"
                />
            </div>
        </div>

        <div className=" flex flex-col-2 gap-[5%] justify-center pt-[10%] ">
            <div className="flex-col justify-start z-20">
                <div className="font-sans text-3xl ">
                    <p className="">
                        หลังจากนั้นก็คุณก็พยายามกระตุกสายจูง
                    </p>
                    <p className="pt-[1.5%]">
                        เพื่อให้มีตังค์เดินตามมา 
                    </p>
                </div>
                <div className="font-sans text-3xl pt-[15%]">
                    <p className="">
                        มีตังค์ก็ทำตามอย่างว่าง่ายและเข้าใจ
                        </p>
                    <p className="font-sans text-3xl pt-[1.5%]">
                        ที่เจ้านายของเขาจะสื่อเป็นอย่างดี
                    </p>
                    <p className="font-sans text-3xl pt-[1.5%]">
                        แต่แล้วก็ดันเจอคนในหมู่บ้านซะได้
                    </p>
                </div>
                <div className="font-sans text-3xl pt-[30%]">
                    <p className="">
                        ดีหน่อยที่มีตังค์ค่อนข้างจะคุ้นเคย
                    </p>
                    <p className="font-sans text-3xl pt-[1.5%]">
                        เพราะพบเจอกันบ่อยแล้ว
                    </p>
                    <p className="font-sans text-3xl pt-[1.5%]">
                        พี่เขาก็ได้มีการทักทายเจ้ามีตังค์
                    </p>
                    <p className="font-sans text-3xl pt-[1.5%]">
                        ด้วยเสียงที่นุ่มนวล
                    </p>
                </div>   
            </div>

            <div className="flex justify-start z-10">
                <img className="" src={Guests}/>
            </div>
            <div className="absolute pt-[30%] z-0">
                <img className="" src={BG_Guests}/>
            </div>
        </div>

        <div>
            <div className="pr-[10%] z-10 pt-[10%]">
                <Chat
                text="“ไง~~มีตังค์ มาเดินเล่นเหรอ”"
                isMe={true}
                showIcon={true}
                />
            </div>
            <div className="pl-[10%] z-10 pt-[10%]">
                <Chat
                text="“วันหยุดพาออกมาเดินเปิดหูเปิดตาหน่อย"
                text2="เดี๋ยวจะเฉาเอา ฮ่าฮ่าฮ่า”"
                isMe={false}
                showIcon={true}
                />
            </div>
            <div className="pr-[10%] z-10 pt-[10%]">
                <Chat
                text="“ดีแล้ว มีตังค์นิสัยดีนะเนี่ยกระดิกหางใหญ่เลย"
                text2="สงสัยจำกันได้ งั้นพี่ไปก่อนนะ”"
                isMe={true}
                showIcon={true}
                />
            </div>
            <div className="pl-[10%] z-10 pt-[10%]">
                <Chat
                text="“เฟรนลี่ใหญ่เลยนะมีตังค์ แบบนี้ถ้าโจรเข้าบ้าน"
                text2="จะเป็นยังไงเนี้ย”"
                isMe={false}
                showIcon={true}
                />
            </div>
            <div className="flex justify-end pr-[10%]">
                <img className="" src={Sticker}/>
            </div>            
        </div>
        
            
        
        
      
    </div>
  );
}

export default Story13;
