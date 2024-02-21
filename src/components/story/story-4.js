import dog_down_stairs from "../../Images/Dog-down-stairs.jpg";
import dog_poof_start from "../../Images/dog-poop.jpg";
import dog_poof_finish from "../../Images/dog-poop-finish.jpg";
import poof from "../../Images/poop.gif";
import Chat from "../chat";

function Story4() {
  return (
    <>
      <div
        className="w-full bg-center"
        style={{
          backgroundImage: `url(${dog_down_stairs})`,
          backgroundRepeat: "no-repeat",
          height: "130vh",
        }}
      >
        <div className="flex flex-col pt-[60vh] justify-start pr-[70%] ">
          <Chat text="“ป่ะ ไปหน้าบ้านกัน”" showIcon={false} />
        </div>
      </div>
      <div className="flex pt-40 justify-center">
        <Chat
          text="“มีตังค์ อึอึ๊ เร็ว เดี๋ยววันนี้ เรามีอะไรต้องทำเยอะนะ”"
          isMe={false}
          showIcon={true}
        />
      </div>
      <div className="flex justify-around pt-64">
        <img className="w-2/5" src={dog_poof_start} alt="dog_poof2" />
        <img
          className="w-[5%] absolute left-[13%] pt-[33%]"
          src={poof}
          alt="poof"
        />
        <img className="w-2/5" src={dog_poof_finish} alt="dog_poof1" />
      </div>
    </>
  );
}

export default Story4;
