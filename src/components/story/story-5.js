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
import dogfood_1 from "../../Images/story_5/dog-food-1.png";
import dogfood_2 from "../../Images/story_5/dog-food-2.png";
import dogfood_3 from "../../Images/story_5/dog-food-3.png";

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
          scrub : true,
          start : "1px 80%",
          end : "1px 50%",

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
          scrub : true,
          start : "1px 80%",
          end : "1px 50%",

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
          scrub : true,
          start : "1px 40%",
          end : "1px 10%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story5_3,
      { opacity: 0 , scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: text_story5_3,
          scrub : true,
          start :"1 70%",
          end : "1 40%",

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
          scrub : true,
          start :"1 60%",
          end : "1 20%",

          /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      frung_fring,
      { scale: 0 ,opacity : 0 },
      {
        scale: 1,
        opacity : 1,
        duration: 1,
        scrollTrigger: {
          trigger: frung_fring,
          scrub : true,
          start :"1 80%",
          end : "1 40%",

         /* markers: true,*/
        },
      }
    );

    gsap.fromTo(
      text_story5_4,
      { opacity: 0, scale : 0.9},
      {
        opacity: 1,
        scale : 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: text_story5_4,
          scrub : true,
          start :"1 60%",
          end : "1 30%",
          
          /*markers: true,*/
        },
      }
    );
    
    gsap.fromTo(
      micro,
      { scale: 0.5},
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: micro,
          scrub : true,
          start :"1 80%",
          end : "1 30%",

         /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      humanbowl,
      { scale: 0.5},
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: humanbowl,
          scrub : true,
          start :"1 70%",
          end : "1 20%",

         /*markers: true,*/
        },
      }
    );

  }, []);

  return (
    <>
      <div className="flex pt-40 justify-end pr-[10%]">
        <Chat
          text="“ไป มีตังค์กินข้าวกันหิวแล้วละสิ”"
          isMe={true}
          showIcon={true}
        />
      </div>
      <div className="flex pt-40 justify-start pl-[10%]">
        <Chat text="“โฮ่ง !”" isMe={false} showIcon={true} isDog={true} />
      </div>
      <div className="pt-40 flex justify-center">
        <img 
        className=" w-full " 
        src={table_Dog} 
        alt="table_Dog"
        ref={dogtableRef}
        />
      </div>
      <div ref={text_story5_1Ref} className=" flex flex-col pt-56">
        <p className="text-5xl flex justify-center">
          เรามาเลือกอาหารมื้อพิเศษ
        </p>
        <p className="text-5xl font-bold flex justify-center pt-10">
          ที่เหมาะกับมีตังค์เถอะ
        </p>
      </div>
        <div ref={text_story5_2Ref} className="flex flex-col justify-center">
          <Title title="เลือกอาหารที่เหมาะสม" />
        </div>
      <div>
      <div
        className="pt-0 justify-center [perspective:1000px]"
        /*style={{
          backgroundImage: `url(${cook_table})`,
          backgroundRepeat: "no-repeat",
          height: "140vh",
        }}*/>
         
        <div className="left-[22.5%] right-[22.5%] absolute pt-6">
        <div className="pt-56 flex flex-row gap-[5%] justify-center w-[100%] h-[100%]">
            
              <Card 
                title="ประเภทที่ 1" 
                content="นมวัวและผลิตภัณฑ์ จากนมวัว"
                image={dogfood_1} />
              <Card 
                title="ประเภทที่ 2" 
                content="อาหารเม็ดตามขนาด และ อายุของสุนัข"
                image={dogfood_2} />
              <Card
                title="ประเภทที่ 3"
                content="ผลไม้บางชนิด เช่น พลับ พีช พลัม พรุน เชอร์รี่"
                image={dogfood_3}/>
            
        </div>
        </div >
        <div className=" flex justify-center">
        <img className="w-[80%]"
         src={cook_table}
         alt="cook_table"/> 
         </div>
      </div>
      </div>
      
      <div className="pt-12 ">
        <p className="text-5xl flex justify-center" ref={text_story5_3Ref}>
          เย้! อาหารเสร็จแล้ว มีตังค์มากินได้เลย
        </p>
        <div className="flex justify-center">
          <img className=" w-2/5" src={dog_bowl} alt="table_Dog" ref={bowl_dogRef}/>
          <img className=" w-2/5 absolute" src={frung_fring} alt="table_Dog" ref={frung_fringRef} />
        </div>
      </div>
      <div className="pl-[10%] pt-px">
        <Chat
          text="“ค่อย ๆ กินก็ได้มีตังค์ ไม่มีใครแย่งหรอก” "
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="pt-12 grid ml-40 mr-40 grid-cols-3">
        <img className=" w-4/6" src={microwave} alt="table_Dog" ref={microRef} />
        <img className=" w-4/6" src={bowl} alt="table_Dog" ref={humanbowlRef} />
        <div ref={text_story5_4Ref} className="flex justify-end max-w-xl pt-24">
          <p className="text-3xl flex justify-center leading-relaxed">
            หลังจากนั้นคุณก็เดินไปหยิบข้าวกล่อง ในตู้เย็นพร้อมเทใส่จาน
            เอาเข้าเวฟแล้วเอามานั่งกินข้างเจ้ามีตังค์
          </p>
        </div>
      </div>
      <div className="flex pt-40 justify-end pr-[10%]">
        <Chat
          text="“ไป มีตังค์กินข้าวกันหิวแล้วละสิ”"
          isMe={true}
          showIcon={true}
        />
      </div>
      <div className="flex pt-40 justify-start pl-[10%]">
        <Chat text="“โฮ่ง !”" isMe={false} showIcon={true} isDog={true} />
      </div>
    </>
  );
}

export default Story5;
