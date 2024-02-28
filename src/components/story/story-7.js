import Sunset from "../sunset";
import ClockTop from "../clock";
import Title from "../title";
import Chat from "../chat";

import yawn_dog from "../../Images/story_7/yawn-dog.png";
import tail_1 from "../../Images/story_7/tail-tells-1.png";
import tail_2 from "../../Images/story_7/tail-tells-2.png";
import tail_3 from "../../Images/story_7/tail-tells-3.png";
import tail_4 from "../../Images/story_7/tail-tells-4.png";
import tail_5 from "../../Images/story_7/tail-tells-5.png";
import tail_6 from "../../Images/story_7/tail-tells-6.png";

function Story7() {
  return (
    <>
      <div className="pt-40">
        <ClockTop time="13.30" />
        <Sunset />
        <div className="pt-[90vh] flex justify-around">
          <img className="w-[30%]" src={yawn_dog} alt="yawn_dog" />
          <div className="max-w-xl flex flex-col text-3xl">
            <p>
              ผ่านไปหลายชั่วโมงเจ้ามีตังค์ก็ตื่นนอนพร้อมบิดขี้เกียจ
              ทั้งแอนหน้าแอนหลัง จากนั้นมีตังค์ก็เดินมาหาพร้อม ทำตาปริบ ๆ
              กระดิกหางด้วยความดีใจเพราะตื่นมา แล้วเจอเจ้านาย
            </p>
            <p className="pt-32">
              โดยคุณสามารถรับรู้ความรู้สึกต่าง ๆ ของเจ้ามีตังค์ได้จาก “หาง”
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Title title="หางบอกอารมณ์" />
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.baanlaesuan.com/158679/pets/training/wag-tail"
            target="_blank"
            className="underline text-xl"
          >
            หางสุนัขบอกอารมณ์ เข้าใจได้ด้วยภาษากายและท่าทาง - บ้านและสวน Pets
            (baanlaesuan.com)
          </a>
        </div>
        <div className="grid grid-cols-3 pt-40 justify-items-center gap-8 gap-y-20">
          <img className="w-[50%]" src={tail_1} alt="tail_1" />
          <img className="w-[50%]" src={tail_2} alt="tail_2" />
          <img className="w-[50%]" src={tail_3} alt="tail_3" />
          <img className="w-[50%]" src={tail_4} alt="tail_4" />
          <img className="w-[50%]" src={tail_5} alt="tail_5" />
          <img className="w-[50%]" src={tail_6} alt="tail_6" />
        </div>

        <div className="flex pt-40 justify-end px-80">
          <Chat text="“ตื่นแล้วหรอ มีตังค์ เล่นของเล่นกันไหม?”" isMe />
        </div>
        <div className="flex pt-40 justify-start px-80">
          <Chat text="โฮ่ง โฮ่ง !" isDog isMe={false} />
        </div>
      </div>
    </>
  );
}

export default Story7;
