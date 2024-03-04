import Tips from "../tips";

import image_towels from "../../Images/story_10/towels.png";
import image_dry from "../../Images/story_10/hair-dryer.png";
import image_shampoo from "../../Images/story_10/dog-shampoo.png";
import image_tube from "../../Images/story_10/tube.png";
import image_dog_dry from "../../Images/story_10/dry-fur-dog.png";
import image_left_hand from "../../Images/story_10/hand-left.png";
import image_right_hand from "../../Images/story_10/hand-right.png";
import image_dog_bath from "../../Images/story_10/dog-bath.png";
import image_bubble from "../../Images/story_10/bubble.png";

const DogShalala = () => {
  return (
    <div className="flex justify-center pt-40">
      <div className="flex">
        <div className="absolute left-[10%]">
          <img className="w-4/5" src={image_left_hand} />
        </div>
        <div className="w-full">
          <img src={image_dog_bath} />
        </div>
        <div className="w-full absolute">
          <img src={image_bubble} />
        </div>
        <div className="absolute right-[0%]">
          <img className="w-4/5" src={image_right_hand} />
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
      <div className="flex  justify-around pt-40">
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img className="w-4/5" src={image_tube} alt="image_tube" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>ใช้สายยางฉีดน้ำให้ทั่วตัว</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className="w-2/5" src={image_shampoo} alt="image_shampoo" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>เอาแชมพูผสมน้ำนิดหน่อยถูให้ทั่วตัว</p>
          </div>
        </div>
      </div>

      <div className="pt-40">
        <DogShalala />
      </div>

      <div className="flex  justify-around pt-96">
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img className="w-4/5" src={image_towels} alt="image_towels" />
          </div>
          <div className="flex justify-center text-3xl pt-12">
            <p>ใช้ผ้าขนหนูเช็ดขนที่เปียกให้พอหมาด</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className="w-2/5" src={image_dry} alt="image_dry" />
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
