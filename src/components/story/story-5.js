import { useEffect, useRef } from "react";

import Chat from "../chat";
import Card from "../card";
import Title from "../title";

import cook_table from "../../Images/story_5/table.jpg";
import dog_bowl from "../../Images/story_5/dog-bowl.png";
import frung_fring from "../../Images/story_5/frungfrimg.gif";
import table_Dog from "../../Images/story_5/table-dog.jpg";
import microwave from "../../Images/story_5/microwave.png";
import bowl from "../../Images/story_5/human-bowl.png";
import dogfood_1 from "../../Images/story_5/food1.png";
import dogfood_2 from "../../Images/story_5/food2.png";
import dogfood_3 from "../../Images/story_5/food3.png";
import dogfoodback_1 from "../../Images/story_5/infofood1.png";
import dogfoodback_2 from "../../Images/story_5/info-food2.png";
import dogfoodback_3 from "../../Images/story_5/info-food3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Story5() {
  const text_story5_1Ref = useRef();
  const text_story5_2Ref = useRef();
  const text_story5_3Ref = useRef();
  const text_story5_4Ref = useRef();
  const dogtableRef = useRef();
  const bowl_dogRef = useRef();
  const frung_fringRef = useRef();
  const microRef = useRef();
  const humanbowlRef = useRef();

  useEffect(() => {
    const text_story5_1 = text_story5_1Ref.current;
    const text_story5_2 = text_story5_2Ref.current;
    const text_story5_3 = text_story5_3Ref.current;
    const text_story5_4 = text_story5_4Ref.current;
    const dogtable = dogtableRef.current;
    const bowl_dog = bowl_dogRef.current;
    const frung_fring = frung_fringRef.current;
    const micro = microRef.current;
    const humanbowl = humanbowlRef.current;

    gsap.fromTo(
      text_story5_1,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story5_1,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story5_2,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_story5_2,
          scrub: true,
          start: "1px 80%",
          end: "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      dogtable,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.2,
        delay: 0.75,
        scrollTrigger: {
          trigger: dogtable,
          scrub: true,
          start: "1px 40%",
          end: "1px 10%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story5_3,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: text_story5_3,
          scrub: true,
          start: "1 70%",
          end: "1 40%",

          /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      bowl_dog,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: bowl_dog,
          scrub: true,
          start: "1 60%",
          end: "1 20%",

          /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      frung_fring,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: frung_fring,
          scrub: true,
          start: "1 80%",
          end: "1 40%",

          /* markers: true,*/
        },
      }
    );

    gsap.fromTo(
      text_story5_4,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: text_story5_4,
          scrub: true,
          start: "1 60%",
          end: "1 30%",

          /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      micro,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: micro,
          scrub: true,
          start: "1 80%",
          end: "1 30%",

          /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      humanbowl,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: humanbowl,
          scrub: true,
          start: "1 70%",
          end: "1 20%",

          /*markers: true,*/
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex pt-[5%] justify-end pr-[10%]">
        <Chat
          text="“ไป มีตังค์กินข้าวกันหิวแล้วละสิ”"
          isMe={true}
          showIcon={true}
        />
      </div>
      <div className="flex pt-[5%] justify-start pl-[10%]">
        <Chat text="“โฮ่ง !”" isMe={false} showIcon={true} isDog={true} />
      </div>
      <div className="pt-[5%] flex justify-center">
        <img
          className=" w-[100vw] "
          src={table_Dog}
          alt="table_Dog"
          ref={dogtableRef}
        />
      </div>
      <div ref={text_story5_1Ref} className=" flex flex-col pt-[10vh]">
        <p className="text-[2.5vw] flex justify-center">เรามาเลือกอาหารมื้อพิเศษ</p>
        <p className="text-[2.5vw] font-bold flex justify-center pt-[2vh]">
          ที่เหมาะกับมีตังค์กันเถอะ!
        </p>
      </div>
      <div ref={text_story5_2Ref} className="flex flex-col justify-center">
        <Title title="เลือกอาหารที่เหมาะสม" />
      </div>
      <div>
        <div
          className="pt-0 justify-center [perspective:1000px]"
        >
          <div className="left-[22.5%] right-[22.5%] absolute">
            <div className="pt-[12vw] flex flex-row gap-[5vh] justify-center">
              <div className="hover:scale-105 duration-200 cursor-pointer">
                <Card image={dogfood_1} image_back={dogfoodback_1} />
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer">
                <Card image={dogfood_2} image_back={dogfoodback_2} />
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer">
                <Card image={dogfood_3} image_back={dogfoodback_3} />
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <img className="w-[80vw]" src={cook_table} alt="cook_table" />
          </div>
        </div>
      </div>

      <div className="pt-12 ">
        <p className="text-[2.5vw] flex justify-center" ref={text_story5_3Ref}>
          เย้! อาหารเสร็จแล้ว มีตังค์มากินได้เลย
        </p>
        <div className="flex justify-center">
          <img
            className=" w-[40vw]"
            src={dog_bowl}
            alt="table_Dog"
            ref={bowl_dogRef}
          />
          <img
            className=" w-[40vw] absolute"
            src={frung_fring}
            alt="table_Dog"
            ref={frung_fringRef}
          />
        </div>
      </div>
      <div className="pl-[8.3vw] pt-[5%]">
        <Chat
          text="“ค่อย ๆ กินก็ได้มีตังค์ ไม่มีใครแย่งหรอก” "
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="pt-[2.5vw] grid ml-[10%] mr-[10%] grid-cols-3 gap-[2vw]">
        <img
          className=" w-[20vw]"
          src={microwave}
          alt="table_Dog"
          ref={microRef}
        />
        <img className=" w-[20vw]" src={bowl} alt="table_Dog" ref={humanbowlRef} />
        <div ref={text_story5_4Ref} className="flex justify-end pt-24">
          <p className="text-[1.8vw] leading-relaxed">
            หลังจากนั้น คุณก็เดินไปหยิบข้าวกล่อง 
            ในตู้เย็นพร้อมเทใส่จาน
            เอาเข้าเวฟแล้วเอามานั่งกินข้างเจ้ามีตังค์
          </p>
        </div>
      </div>
      <div className="flex pt-[5vw] justify-end pr-[10%]">
        <Chat
          text="“อิ่มแล้วก็นอนพักเถอะ ฉันขอไปทำงานบ้านแปปนึงนะ”"
          isMe={true}
          showIcon={true}
        />
      </div>
      <div className="flex pt-[5%] justify-start pl-[10%]">
        <Chat text="“โฮ่ง !”" isMe={false} showIcon={true} isDog={true} />
      </div>
    </>
  );
}

export default Story5;
