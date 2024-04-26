
import image_left_hand from "../../Images/story_10/hand-left.gif";
import image_right_hand from "../../Images/story_10/hand-right.gif";
import image_dog_bath from "../../Images/story_10/dog-bath.png";
import image_dog_bath_gif from "../../Images/story_10/dog-bath.gif";
import image_bubble from "../../Images/story_10/bubble.gif";

function Story10_1() {

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center">
        <div className="z-10 w-[90vw] absolute start-[10vw] end-[10vw] blur-sm opacity-90 pt-[10vw]">
          <img src={image_bubble} />
        </div>
        <div className="flex justify-center">
          <img className="w-[65vw] z-0" src={image_dog_bath} />
          <img className=" absolute w-[65vw] z-50" src={image_dog_bath_gif} />
          <div className="absolute start-[10vw] pt-[16vw] z-40">
            <img className="w-[25vw]" src={image_left_hand} />
          </div>
          <div className="absolute end-[10vw] pt-[16vw] z-40">
            <img className="w-[25vw]" src={image_right_hand} />
          </div>
        </div>
      </div>
    </div>
  );
}
  export default Story10_1;
  