import image_frame from "../Images/story_8/command-cards-1.png";

function CardFlip({ image_front = image_frame, image_back = image_frame }) {
  return (
    <div className="flex flex-col justify-center ">
      <div className="group h-[560px] w-96 [perspective:1000px]">
        <div className=" relative h-full w-full transition-all duration-700 rounded-full shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0">
            <img
              className="h-full w-full object-cover shadow-xl"
              src={image_front}
            />
          </div>
          <div className=" absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img className="h-full w-full object-cover" src={image_back} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
