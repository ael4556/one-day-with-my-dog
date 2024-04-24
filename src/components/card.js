import image_frame from "../Images/story_5/food1.png";
import image_backs from "../Images/story_5/infofood1.png";
import { useState } from "react";

function Card({ image = image_frame, image_back = image_backs }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col justify-center ">
      <div
        onClick={handleFlip}
        className="group w-[20vw] [perspective:1000px]"
      >
        <div
          className={` relative h-full w-full transition-all  duration-700 rounded-full shadow-xl [transform-style:preserve-3d] 
         ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
        >
          <div className=" absolute inset-0 bg-white rounded-2xl shadow-xl">
            <div className="flex rounded-2xl">
              <div className="flex-col">
                <div className="flex justify-center">
                  <img className="w-full object-cover " src={image} />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]  shadow-xl">
            <div className="flex justify-center">
              <img className="w-full object-cover " src={image_back} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
