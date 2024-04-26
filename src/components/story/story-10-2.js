import { useEffect, useRef, useState } from "react";
import Tips from "../tips";

import image_towels from "../../Images/story_10/towels.gif";
import image_dry from "../../Images/story_10/hair-dryer.gif";

import image_dog_dry from "../../Images/story_10/dry-fur-dog.png";
import image_sofa from "../../Images/story_10/bg-dry-fur-dog.png";
import image_effect from "../../Images/story_10/effect-dogdry.gif";

import image_pop_3 from "../../Images/story_10/popup-3.png";
import image_pop_4 from "../../Images/story_10/popup-4.png";

import Popup from "../popup";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story10_2() {
    const [isPopup3Open, setIsPopup3Open] = useState(false);
    const [isPopup4Open, setIsPopup4Open] = useState(false);
  
    const tubeRef = useRef();
    const shampooRef = useRef();
    const dog_dryRef = useRef();
    const effectRef = useRef();
    const sofaRef = useRef();
  
    const text_tubeRef = useRef();
    const text_shampooRef = useRef();
    const text_story10_1Ref = useRef();
    const text_story10_2Ref = useRef();
    const title_story10_1Ref = useRef();
  
    useEffect(() => {
      const tube = tubeRef.current;
      const shampoo = shampooRef.current;
      const dog_dry = dog_dryRef.current;
      const effect = effectRef.current;
      const sofa = sofaRef.current;
  
      const text_tube = text_tubeRef.current;
      const text_shampoo = text_shampooRef.current;
      const text_story10_1 = text_story10_1Ref.current;
      const text_story10_2 = text_story10_2Ref.current;
      const title_story10_1 = title_story10_1Ref.current;
  
      gsap.fromTo(
        tube,
        { scale: 0.5 },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: tube,
            scrub: true,
            start: "1 80%",
            end: "1 30%",
  
            /*markers: true,*/
          },
        }
      );
  
      gsap.fromTo(
        shampoo,
        { scale: 0.5 },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: shampoo,
            scrub: true,
            start: "1 80%",
            end: "1 30%",
  
            /*markers: true,*/
          },
        }
      );

      gsap.fromTo(
        text_tube,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
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
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
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
        text_story10_1,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0,
          scrollTrigger: {
            trigger: text_story10_1,
            scrub: true,
            start: "1px 80%",
            end: "1px 50%",
  
            /*markers : true,*/
          },
        }
      );
  
      gsap.fromTo(
        text_story10_2,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0,
          scrollTrigger: {
            trigger: text_story10_2,
            scrub: true,
            start: "1px 80%",
            end: "1px 50%",
  
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
            scrub: true,
            start: "1px 80%",
            end: "1px 50%",
  
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
            scrub: true,
            start: "50px 100%",
            end: "50px 60%",
  
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
            scrub: true,
            start: "1px 80%",
            end: "1px 50%",
  
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
            scrub: true,
            start: "-200px 80%",
            end: "-200px 20%",
  
            /*markers : true,*/
          },
        }
      );
    }, []);
  
    return (
      <div>
        <Popup
          isPopupOpen={isPopup3Open}
          setIsPopupOpen={setIsPopup3Open}
          images={image_pop_3}
        />
        <Popup
          isPopupOpen={isPopup4Open}
          setIsPopupOpen={setIsPopup4Open}
          images={image_pop_4}
        />
  
        <div className="pt-[0vw]">
          <div className="text-[1.8vw] pt-[10vh] leading-relaxed pl-[60vw] pr-[10vw]">
            <p ref={text_story10_1Ref}>
              เสร็จแล้วก็ล้างฟองสบู่ด้วยน้ำเปล่าให้สะอาด
              เจ้ามีตังค์ก็รู้หน้าที่ของตัวเองด้วยการช่วยสะบัดขน
              แต่น้ำดันกระเด็นโดนเราซะนี่
            </p>
          </div>
          <div className="grid grid-cols-2 pt-[10vw]">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                  <div className="hover:scale-110 duration-300 pl-[10vw]">
                    <img
                    onClick={() => setIsPopup3Open(true)}
                    className="w-[20vw] cursor-pointer"
                    src={image_towels}
                    alt="image_towels"/>
                  </div>              
              </div>
              <div className="flex justify-center text-[1.8vw] pt-[2.5vw] pl-[10vw]">
                <p>ใช้ผ้าขนหนูเช็ดขนที่เปียกให้พอหมาด</p>
              </div>
            </div>
  
            <div className="flex flex-col">
              <div className="flex justify-center">
                  <div className="hover:scale-110 duration-300 pr-[10vw]">
                    <img
                      onClick={() => setIsPopup4Open(true)}
                      className="w-[20vw] cursor-pointer"
                      src={image_dry}
                      alt="image_dry"/>
                  </div>
              </div>
              <div className="flex justify-center text-[1.8vw] pt-[2.5vw] pr-[10vw]">
                <p>ใช้ไดร์เป่าลมปกติ เป่าให้ขนแห้งสนิท</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="flex justify-center pt-[10vw]">
          <div className="flex font-medium text-[1.8vw]" ref={text_story10_2Ref}>
            หัวใจสำคัญของการเป่าขน คือ...
          </div>
        </div>
        <div className="flex justify-center pt-[5vw]">
          <div
            className="flex text-[3.765vw] font-semibold font-mali text-[#D60000]"
            ref={title_story10_1Ref}
          >
            “ ขน ต้อง แห้ง สนิท! ”
          </div>
        </div>
        <div className="flex pt-[10vw] justify-end pr-[10vw]">
          <div className="pt-[17vh] z-50">
            <Tips
              text="ขนต้องแห้งสนิท เพราะอาจ"
              text2="ทำให้เกิดโรคผิวหนังได้เนื่องจาก"
              text3="น้องสุนัขนั้น มีขนอยู่หลายชั้น"
              width={50}
            />
          </div>
          <div className="absolute left-[5vw] z-20">
            <img className="w-[55vw]" src={image_dog_dry} alt="image_dog_dry" ref={dog_dryRef} />
          </div>
          <div className="absolute left-[5vw] z-0">
            <img className="w-[55vw]" src={image_sofa} alt="image_dog_dry" ref={sofaRef} />
          </div>
          <div className="absolute left-[5vw] z-10">
            <img className="w-[55vw]" src={image_effect} alt="image_dog_dry" ref={effectRef} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Story10_2;
  