import { useEffect, useRef } from "react";
import Tips from "../tips";

import image_towels from "../../Images/story_10/towels.png";
import image_dry from "../../Images/story_10/hair-dryer.png";
import image_shampoo from "../../Images/story_10/dog-shampoo.png";
import image_tube from "../../Images/story_10/tube.png";
import image_dog_dry from "../../Images/story_10/dry-fur-dog.png";
import image_left_hand from "../../Images/story_10/hand-left.png";
import image_right_hand from "../../Images/story_10/hand-right.png";
import image_dog_bath from "../../Images/story_10/dog-bath.png";
import image_bubble from "../../Images/story_10/bubble.gif";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DogShalala = () => {
  const dogRef = useRef();
  const handleftRef = useRef();
  const handRightRef = useRef();

  useEffect(() => {
  const dog = dogRef.current;
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
    <div className="flex justify-center pt-[15%]">
      <div className="flex">
        <div className="w-[100%] absolute start-[10%] end-[10%] pt-[100%] blur-sm opacity-95">
          <img src={image_bubble} />
        </div>

        <div className="w-[100%]" ref={dogRef}>
          <img src={image_dog_bath} />
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
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img className="w-[50%]" src={image_tube} alt="image_tube" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>ใช้สายยางฉีดน้ำให้ทั่วตัว</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className="w-[50%]" src={image_shampoo} alt="image_shampoo" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>เอาแชมพูผสมน้ำนิดหน่อยถูให้ทั่วตัว</p>
          </div>
        </div>
      </div>

      <div className="pt-40">
        <DogShalala />
      </div>

      <div className="grid grid-cols-2 pt-[230%]">
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img className="w-[50%]" src={image_towels} alt="image_towels" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>ใช้ผ้าขนหนูเช็ดขนที่เปียกให้พอหมาด</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className="w-[50%]" src={image_dry} alt="image_dry" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>ใช้ไดร์เป่าลมปกติ เป่าให้ขนแห้งสนิท</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-40">
        <div className="flex text-3xl">หัวใจสำคัญของการเป่าขน คือ...</div>
      </div>
      <div className="flex justify-center pt-12">
        <div className="flex text-8xl font-semibold text-[#D60000]">
          “ ขน ต้อง แห้ง สนิท! ”
        </div>
      </div>
      <div className="flex pt-[10%] justify-end pr-[10%]">
        <div className="pt-40 z-10">
          <Tips
            text="ขนต้องแห้งสนิท เพราะอาจทำให้กิดโรคผิวหนังได้"
            text2="เนื่องจากน้องสุนัขนั้น มีขนหลายอยู่ชั้น"
            width={50}
          />
        </div>
        <div className="absolute left-0 z-0">
          <img src={image_dog_dry} alt="image_dog_dry" />
        </div>
      </div>
    </div>
  );
}

export default Story10;
