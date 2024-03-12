import image_frame from "../Images/story_8/command-cards-1.png";
import { useState } from "react";

function CardFlip({ image_front = image_frame, image_back = image_frame }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col justify-center ">
      <div
        onClick={handleFlip}
        className="group w-[408px] [perspective:1000px] hover:scale-110 duration-500 cursor-pointer"
      >
        <div
          className={`relative  w-full transition-all duration-700 rounded-2xl [transform-style:preserve-3d] 
         ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
        >
          <div className=" absolute inset-0">
            <img
              className=" w-full object-cover"
              src={image_front}
            />
          </div>
          <div className=" absolute inset-0  w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img className=" w-full object-cover" src={image_back} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
