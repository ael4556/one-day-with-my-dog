import image_frame from "../Images/story_5/dog-food-1.png";
import { useState } from "react";

function Card({
  title = "หัวข้อ",
  content = "รายระเอียด",
  image = image_frame,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col justify-center ">
      <div
        onClick={handleFlip}
        className="group h-[560px] w-[320px] [perspective:1000px]"
      >
        <div
          className={` relative h-full w-full transition-all  duration-700 rounded-full shadow-xl [transform-style:preserve-3d] 
         ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
        >
          <div className=" absolute inset-0 bg-white rounded-2xl">
            <div className="flex rounded-2xl">
              <div className="flex-col">
                <div className="flex justify-center">
                  <img className="w-full object-cover shadow-xl" src={image} />
                </div>
                <div className="flex justify-center pt-4">
                  <p className="text-black text-3xl font-extrabold pt-2">
                    {title}
                  </p>
                </div>
                <p className="text-black text-2xl font-extralight pt-6">
                  {content}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-emerald-50">
            {/** หลังการ์ด */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
