import { useEffect, useRef } from "react";

import Chat from "../chat";
import Card from "../card";

import cook_table from "../../Images/table.png";
import dog_bowl from "../../Images/dog-bowl.png";
import table_Dog from "../../Images/story_5/table-dog.jpg";
import microwave from "../../Images/microwave.png";
import bowl from "../../Images/human-bowl.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Story5() {
  const text_story5_1Ref = useRef();
  const text_story5_2Ref = useRef();
  const text_story5_3Ref = useRef();

  useEffect(() => {
    const text_story5_1 = text_story5_1Ref.current;
    const text_story5_2 = text_story5_2Ref.current;
    const text_story5_3 = text_story5_3Ref.current;

    gsap.fromTo(
      text_story5_1,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: text_story5_1,
          toggleActions : 'restart'
        },
      }
    );

    gsap.fromTo(
      text_story5_2,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.2,
        delay: 0.75,
        scrollTrigger: {
          trigger: text_story5_2,
          toggleActions : 'restart'
        },
      }
    );

    gsap.fromTo(
      text_story5_3,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: text_story5_3,
          toggleActions : 'restart'
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
        <Chat text="“โฮ่ง !”" isMe={false} showIcon={true} isDog={true} />
      </div>
      <div className="pt-40 flex justify-center">
        <img className=" w-full" src={table_Dog} alt="table_Dog" />
      </div>
      <div ref={text_story5_1Ref} className=" flex flex-col pt-56">
        <p className="text-5xl flex justify-center">
          เรามาเลือกอาหารมื้อพิเศษ
        </p>
        <p className="text-5xl font-bold flex justify-center pt-10">
          ที่เหมาะกับมีตังค์เถอะ
        </p>
      </div>
      <p ref={text_story5_1Ref} className="flex justify-center text-[#d65e35] text-6xl pt-56  font-semibold">
        เลือกอาหารที่เหมาะสม
      </p>
      <div
        className="flex justify-around pt-40 flex-row gap-4"
        style={{
          backgroundImage: `url(${cook_table})`,
          backgroundRepeat: "no-repeat",
          height: "140vh",
        }}
      >
        <Card title="ประเภทที่ 1" content="นมวัวและผลิตภัณฑ์ จากนมวัว" />
        <Card title="ประเภทที่ 2" content="อาหารเม็ดตามขนาด และ อายุของสุนัข" />
        <Card
          title="ประเภทที่ 3"
          content="ผลไม้บางชนิด เช่น พลับ พีช พลัม พรุน เชอร์รี่"
        />
      </div>
      <div className="pt-12 ">
        <p className="text-5xl flex justify-center">
          เย้! อาหารเสร็จแล้ว มีตังค์มากินได้เลย
        </p>
        <div className="flex justify-center">
          <img className=" w-2/5" src={dog_bowl} alt="table_Dog" />
        </div>
      </div>
      <div className="p-12">
        <Chat
          text="“ค่อย ๆ กินก็ได้มีตังค ์ไม่มีใครแย่งหรอก” "
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="pt-12 gap-4 grid ml-12 grid-cols-3">
        <img className=" w-4/6" src={microwave} alt="table_Dog" />
        <img className=" w-4/6" src={bowl} alt="table_Dog" />
        <div ref={text_story5_3Ref} className="flex justify-end max-w-xl pt-24">
          <p className="text-4xl flex justify-center">
            หลังจากนั้นคุณก็เดินไปหยิบข้าวกล่อง ในตู้เย็นพร้อมเทใส่จาน
            เอาเข้าเวฟแล้วเอามานั่งกินข้างเจ้ามีตังค์
          </p>
        </div>
      </div>
      <div className="flex pt-40 justify-end px-80">
        <Chat
          text="“ไป มีตังค์กินข้าวกันหิวแล้วละสิ”"
          isMe={true}
          showIcon={true}
        />
      </div>
      <div className="flex pt-40 justify-start px-80">
        <Chat text="“โฮ่ง !”" isMe={false} showIcon={true} isDog={true} />
      </div>
    </>
  );
}

export default Story5;
