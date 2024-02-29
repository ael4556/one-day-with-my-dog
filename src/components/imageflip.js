import image_frame from "../Images/story_7/motion.png" ;

function ImageFlip({ image_front = image_frame, image_back = image_frame }) {
  return (
    <div className="flex">
      <div className="group h-80 w-80 [perspective:1000px]">
        <div className=" relative h-full w-full transition-all duration-700 rounded-full shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0">
            <img className="h-80 w-80 object-cover" src={image_front} />
          </div>
          <div className=" absolute inset-0 h-80 w-80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img className="h-80 w-80 object-cover" src={image_back} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageFlip;
