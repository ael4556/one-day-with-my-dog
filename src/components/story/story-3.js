

import sleep_dog_morning from "../../Images/story_3/sleep-with-dog-morning-test.png";
import dog_in_frame from "../../Images/story_3/dog-in-frame-test.png";
import Chat from "../chat";

function Story3() {
  return (
    <>
      <div className="flex justify-start ">
      <img className=" w-[100%]" src={sleep_dog_morning} alt="sleep_night" />
        <img 
          className=" absolute left-[60%] " 
          src={dog_in_frame} 
          alt="dog_in_frame"
          />
        </div>

          <div className="absolute left-[35%] pt-[25%]">
              <Chat
                text="“ไง~ มีตังค์ เมื่อคืนขอโทษน๊าา เหนื่อยไปหน่อย”"
                showIcon={true}
                isMe={true}
              />
          </div>
    </>
  );
}

export default Story3;
