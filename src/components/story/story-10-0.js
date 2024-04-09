import { useEffect, useRef, useState } from "react";
import Tips from "../tips";

import image_shampoo from "../../Images/story_10/dog-shampoo.gif";
import image_tube from "../../Images/story_10/tube.gif";

import image_pop_1 from "../../Images/story_10/popup-1.png";
import image_pop_2 from "../../Images/story_10/popup-2.png";
import nullobj from "../../Images/story_10/null.png";

import Popup from "../popup";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Story10_0() {
    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);

    useEffect(() => {
  
    }, []);
  
    return (
      <div>
        <Popup
          isPopupOpen={isPopup1Open}
          setIsPopupOpen={setIsPopup1Open}
          images={image_pop_1}
        />
        <Popup
          isPopupOpen={isPopup2Open}
          setIsPopupOpen={setIsPopup2Open}
          images={image_pop_2}
        />
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
          <div className="flex flex-col">
            <div className="flex justify-center">
                <div className="hover:scale-110 duration-300  pl-[30%]">
                  <img
                  onClick={() => setIsPopup1Open(true)}
                  className="w-[100%] cursor-pointer"
                  src={image_tube}
                  alt={image_tube}/>
                </div>
            </div>
            <div className="flex justify-center text-3xl pt-12 pl-[30%]">
              <p>ใช้สายยางฉีดน้ำให้ทั่วตัว</p>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex justify-center">
                <div className="hover:scale-110 duration-300  pr-[30%]">
                  <img
                  onClick={() => setIsPopup2Open(true)}
                  className="w-[100%] cursor-pointer"
                  src={image_shampoo}
                  alt={image_shampoo}/>
                </div>
            </div>
            <div className="flex justify-center text-3xl pt-12 pr-[30%]">
              <p>เอาแชมพูผสมน้ำนิดหน่อยถูให้ทั่วตัว</p>
            </div>
          </div>
        </div>
        <img className="w-[70%]" src={nullobj}/>
      </div>
    );
  }
  
  export default Story10_0;
  