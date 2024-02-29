import dog from "../../Images/story_8/dog-snack.png";
import snack from "../../Images/story_8/snack.png";
import CardFlip from "../cardflip";
import Title from "../title";

function Story8() {
  return (
    <div className="flex flex-col">
      <div className="flex pl-40">
        <div className="flex flex-col max-w-2xl">
          <div className="text-3xl pt-24">
            <p>
              เวลาแบบนี้ควรฝึกเจ้าตูบน้อยซักหน่อย...
              คุณเลยเดินไปหยิบขนมสุดโปรดของมัตังค์
              และลงไปนั่งในระดับเดียวกับมีตังค์ เตรียมพร้อมที่จะออกคำสั่ง
            </p>
          </div>
          <div className="flex justify-center">
            <img className=" pt-40 w-[40%]" src={snack} />
          </div>
        </div>
        <div className="flex justify-center">
          <img className=" pt-20 w-[80%]  h-[100%]" src={dog} />
        </div>
      </div>
      <div className="flex justify-center">
        <Title title="เลือกคำสั่งที่ต้องการฝึก" />
      </div>
      <div className="flex justify-center">
        <a
          className=" underline pt-4 text-xl"
          href="https://www.baanlaesuan.com/224684/pets/training/hand-signals"
          target="_blank"
        >
          10 สัญญานมือสำหรับฝึกสุนัข - บ้านและสวน Pets (baanlaesuan.com)
        </a>
      </div>
      <div className="grid grid-cols-4 justify-items-center pt-20 px-32">

        <CardFlip />        
        <CardFlip />

        <CardFlip />
        <CardFlip />

      </div>
    </div>
  );
}

export default Story8;
