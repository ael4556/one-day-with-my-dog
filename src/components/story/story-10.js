import { useEffect, useRef } from "react";
import Tips from "../tips";

import image_towels from "../../Images/story_10/towels.png";
import image_dry from "../../Images/story_10/hair-dryer.png";
import image_shampoo from "../../Images/story_10/dog-shampoo.png";
import image_tube from "../../Images/story_10/tube.png";

import image_dog_dry from "../../Images/story_10/dry-fur-dog.png";
import image_sofa from "../../Images/story_10/bg-dry-fur-dog.png";
import image_effect from "../../Images/story_10/effect-dogdry.gif";

import image_left_hand from "../../Images/story_10/hand-left.png";
import image_right_hand from "../../Images/story_10/hand-right.png";
import image_dog_bath from "../../Images/story_10/dog-bath.png";
import image_dog_bath_gif from "../../Images/story_10/dog-bath.gif";
import image_bubble from "../../Images/story_10/bubble.gif";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DogShalala = () => {
  const dogRef = useRef();
  const dog2Ref = useRef();
  const handleftRef = useRef();
  const handRightRef = useRef();
  
  useEffect(() => {
  const dog = dogRef.current;
  const dog2 = dog2Ref.current;
  const handleft = handleftRef.current;
  const handRight = handRightRef.current;

  gsap.fromTo(
    dog,
    { yPercent: 0,},
    {
      yPercent: +310,
      duration : 10,
      
      scrollTrigger: {
        trigger: dog,
        scrub : true,
        start : "1100px 100% ",
        end : "5000px -140%",

        /*markers : true,*/
      },
    }
  );

  gsap.fromTo(
    dog2,
    { yPercent: 0,},
    {
      yPercent: +310,
      duration : 10,
      
      scrollTrigger: {
        trigger: dog2,
        scrub : true,
        start : "1100px 100% ",
        end : "5000px -140%",

        /*markers : true,*/
      },
    }
  );

  gsap.fromTo(
    handleft,
    { yPercent: 0, xPercent: 0,},
    {
      yPercent: +590,
      xPercent :+50,
      duration : 10,
      
      scrollTrigger: {
        trigger: handleft,
        scrub : true,
        start : "800px 100%",
        end : "4000px -120%",

        /*markers : true,*/
      },
    }
  );

  gsap.fromTo(
    handRight,
    { yPercent: 0, xPercent: 0,},
    {
      yPercent: +590,
      xPercent :-50,
      duration : 10,
      
      scrollTrigger: {
        trigger: handRight,
        scrub : true,
        start : "800px 100% ",
        end : "4000px -120%",

        /*markers : true,*/
      },
    }
  );
  


  }, []);

  return (
    <div className="flex justify-center pt-[10%]">
      <div className="flex">
        <div className="w-[100%] absolute start-[10%] end-[10%] pt-[100%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>

        <div className="w-[100%]" ref={dogRef}>
          <img src={image_dog_bath} />
        </div>
        <div className=" absolute w-[100%]" ref={dog2Ref}>
          <img src={image_dog_bath_gif} />
        </div>
        
        <div className=" pt-[20%]">
        <div className="absolute start-[10%]" ref={handleftRef}>
          <img className="w-[100%]" src={image_left_hand} />
        </div>
        <div className="absolute end-[9%]" ref={handRightRef}>
          <img className="w-[100%]" src={image_right_hand} />
        </div>
        </div>

        <div className="w-[100%] absolute start-[10%] end-[10%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>
        <div className="w-[100%] absolute start-[10%] end-[10%] pt-[200%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>
        
      </div>
    </div>
  );
};

function Story10() {
    const tubeRef = useRef();
    const shampooRef = useRef();
    const towelsRef = useRef();
    const dryerRef = useRef();
    const dog_dryRef = useRef();
    const effectRef = useRef();
    const sofaRef = useRef();

    const text_tubeRef = useRef();
    const text_shampooRef = useRef();
    const text_towelsRef = useRef();
    const text_dryerRef = useRef();
    const text_story10_1Ref = useRef();
    const text_story10_2Ref = useRef();
    const title_story10_1Ref = useRef();

  useEffect(() => {
    const tube = tubeRef.current;
    const shampoo = shampooRef.current;
    const towels = towelsRef.current;
    const dryer = dryerRef.current;
    const dog_dry = dog_dryRef.current;
    const effect = effectRef.current;
    const sofa = sofaRef.current;

    const text_tube = text_tubeRef.current;
    const text_shampoo = text_shampooRef.current;
    const text_towels = text_towelsRef.current;
    const text_dryer = text_dryerRef.current;
    const text_story10_1 = text_story10_1Ref.current;
    const text_story10_2 = text_story10_2Ref.current;
    const title_story10_1 = title_story10_1Ref.current;

    gsap.fromTo(
      tube,
      { scale: 0.5},
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: tube,
          scrub : true,
          start :"1 80%",
          end : "1 30%",

         /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      shampoo,
      { scale: 0.5},
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: shampoo,
          scrub : true,
          start :"1 80%",
          end : "1 30%",

         /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      towels,
      { scale: 0.5},
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: towels,
          scrub : true,
          start :"1 80%",
          end : "1 30%",

         /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      dryer,
      { scale: 0.5},
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: dryer,
          scrub : true,
          start :"1 80%",
          end : "1 30%",

         /*markers: true,*/
        },
      }
    );

    gsap.fromTo(
      text_tube,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_tube,
          scrub: true,
          start: "-150px 70%",
          end: "-140px 40%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_shampoo,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_shampoo,
          scrub: true,
          start: "-150px 70%",
          end: "-140px 40%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_towels,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_towels,
          scrub: true,
          start: "-150px 70%",
          end: "-140px 40%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_dryer,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        scrollTrigger: {
          trigger: text_dryer,
          scrub: true,
          start: "-150px 70%",
          end: "-140px 40%",
          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story10_1,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: text_story10_1,
          scrub : true,
          start : "1px 80%",
          end : "1px 50%" ,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      text_story10_2,
      { opacity: 0, scale : 0.9 },
      {
        opacity: 1,
        scale : 1,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: text_story10_2,
          scrub : true,
          start : "1px 80%",
          end : "1px 50%" ,

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      title_story10_1,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: title_story10_1,
          scrub : true,
          start : "1px 80%",
          end : "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      dog_dry,
      { scale: 0.1 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: dog_dry,
          scrub : true,
          start : "50px 100%",
          end : "50px 60%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      effect,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: effect,
          scrub : true,
          start : "1px 80%",
          end : "1px 50%",

          /*markers : true,*/
        },
      }
    );

    gsap.fromTo(
      sofa,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: sofa,
          scrub : true,
          start : "-200px 80%",
          end : "-200px 20%",

          /*markers : true,*/
        },
      }
    );


  }, []);

  return (
    <div>
      <div className="flex pt-[10%] justify-end pr-[10%]">
        <div className="flex">
          <Tips
            text="อย่าลืมแปรงขนก่อนอาบน้ำทุกครั้ง จะช่วยขจัดสิ่งสกปรก"
            text2="ขนที่หลุดร่วงและเซลล์ผิวหนังที่ตายแล้วออกไป"
            width={50}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 pt-40 ">
        <div className="flex flex-col" >
          <div className="flex justify-center" ref={tubeRef}>
            <img className="w-[70%] pl-[30%]" src={image_tube} alt="image_tube" />
          </div>
          <div className="flex justify-center text-3xl pt-12 pl-[30%]" ref={text_tubeRef}>
            <p>ใช้สายยางฉีดน้ำให้ทั่วตัว</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center" ref={shampooRef}>
            <img className="w-[70%] pr-[30%]" src={image_shampoo} alt="image_shampoo" />
          </div>
          <div className="flex justify-center text-3xl pt-12 pr-[30%]" ref={text_shampooRef}>
            <p>เอาแชมพูผสมน้ำนิดหน่อยถูให้ทั่วตัว</p>
          </div>
        </div>
      </div>
      
      <div className="">
        <DogShalala />
      </div>
      
      <div className="pt-[190%]">
            <div className="text-3xl pt-24 leading-relaxed pl-[60%] pr-[10%]">
              <p ref={text_story10_1Ref}>
              เสร็จแล้วก็ล้างด้วยน้ำเปล่าให้สะอาด 
              เจ้ามีตังค์ก็รู้หน้าที่ของตัวเองด้วยการช่วยสะบัดขน
              แต่น้ำดันกระเด็นโดนเราซะนี่
              </p>
            </div>
          <div className="grid grid-cols-2 pt-[25%]">
            <div className="flex flex-col ">
              <div className="flex justify-center" ref={towelsRef}>
                <img className="w-[70%] pl-[30%]" src={image_towels} alt="image_towels" />
              </div>
              <div className="flex justify-center text-3xl pt-12 pl-[30%]" ref={text_towelsRef}>
                <p>ใช้ผ้าขนหนูเช็ดขนที่เปียกให้พอหมาด</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center" ref={dryerRef}>
                <img className="w-[70%] pr-[30%]" src={image_dry} alt="image_dry" />
              </div>
              <div className="flex justify-center text-3xl pt-12 pr-[30%]" ref={text_dryerRef}>
                <p>ใช้ไดร์เป่าลมปกติ เป่าให้ขนแห้งสนิท</p>
              </div>
            </div>
          </div>
      </div>

      <div className="flex justify-center pt-40">
        <div className="flex text-3xl" ref={text_story10_2Ref}>หัวใจสำคัญของการเป่าขน คือ...</div>
      </div>
      <div className="flex justify-center pt-12">
        <div className="flex text-7xl font-semibold font-mali text-[#D60000]" ref={title_story10_1Ref}>
          “ ขน ต้อง แห้ง สนิท! ”
        </div>
      </div>
      <div className="flex pt-[10%] justify-end pr-[10%]">
        <div className="pt-40 z-50">
          <Tips
            text="ขนต้องแห้งสนิท เพราะอาจ"
            text2="ทำให้กิดโรคผิวหนังได้เนื่องจาก"
            text3="น้องสุนัขนั้น มีขนหลายอยู่ชั้น"
            width={50}
          />
        </div>
        <div className="absolute left-[5%] z-20">
          <img src={image_dog_dry} alt="image_dog_dry" ref={dog_dryRef}/>
        </div>
        <div className="absolute left-[5%] z-0">
          <img src={image_sofa} alt="image_dog_dry" ref={sofaRef}/>
        </div>
        <div className="absolute left-[5%] z-10">
          <img src={image_effect} alt="image_dog_dry" ref={effectRef}/>
        </div>
      </div>
    </div>
  );
}

export default Story10;
