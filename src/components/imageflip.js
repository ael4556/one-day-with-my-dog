import image_frame from "../Images/story_7/motion.png" ;

function ImageFlip({ image_front = image_frame, image_back = image_frame }) {
  return (
    <div className="flex">
      <div className="group h-[16.73vw] w-[16.73vw] [perspective:1000px] cursor-pointer">
        <div className=" relative h-full w-full transition-all duration-1000 rounded-full shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0">
            <img className="h-[16.73vw] w-[16.73vw] object-cover" src={image_front}/>
          </div>
          <div className=" absolute inset-0 h-[16.73vw] w-[16.73vw] [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img className="h-[16.73vw] w-[16.73vw] object-cover rounded-full" src={image_back} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageFlip;
