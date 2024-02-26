import { useEffect, useRef } from "react";

import Chat from "../chat";
import table_Dog from "../../Images/table-dog.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story5() {

    const text_story5_1Ref = useRef();

    useEffect(() => {
      const text_story5_1 = text_story5_1Ref.current;
  
      gsap.fromTo(
        text_story5_1,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.75,
          scrollTrigger: {
            trigger: text_story5_1,
          },
        }
      );
  
    }, []);

    return (
      <>
        <div className="flex pt-40 justify-end px-80">
          <Chat
            text="“ไป มีตังค์กินข้าวกันหิวแล้วละสิ”"
            isMe={true}
            showIcon={true}
          />
        </div>
        <div className="flex pt-40 justify-start px-80">
          <Chat
            text="“โฮ่ง !”"
            isMe={false}
            showIcon={true}
          />
        </div>

        <div className="pt-40 flex justify-center">
            <img className=" w-full" src={table_Dog} alt="table_Dog" />
        </div>
         
            <div
                ref={text_story5_1Ref}
                className=" flex flex-col pt-56"
            >
                <p className="text-5xl flex justify-center">เรามาเลือกอาหารมื้อพิเศษ</p> 
                <p className="text-5xl font-bold flex justify-center pt-10">ที่เหมาะกับมีตังค์เถอะ</p>
                
        </div>


      </>
    );
  }
  
  export default Story5;