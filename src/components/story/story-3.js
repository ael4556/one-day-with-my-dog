import sleep_dog_morning from "../../Images/sleep-with-dog-morning.jpg";
import dog_in_frame from "../../Images/dog-in-frame.png";
import Chat from "../chat";

function Story3() {
  return (
    <>
      <div className="flex justify-center gap-20">
        <img className=" w-1/4" src={sleep_dog_morning} alt="sleep_dog_morning" />
        <img className=" w-1/4" src={dog_in_frame} alt="dog_in_frame" />
      </div>
          <div className="flex justify-center pt-12">
              <Chat
                text="“ไง~ มีตังค์ เมื่อคืนขอโทษน๊าา เหนื่อยไปหน่อย”"
                showIcon={false}
              />
          </div>
    </>
  );
}

export default Story3;
