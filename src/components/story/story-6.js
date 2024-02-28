import living_room from "../../Images/story_6/living-room.png";
import dog_sleep from "../../Images/story_6/dog-sleep.png";
import cleaning_e1 from "../../Images/story_6/cleaning-equipment-1.png";
import cleaning_e2 from "../../Images/story_6/cleaning-equipment-2.png";

function Story6() {
  return (
    <>
      <div className="flex justify-center">
        <img
          className=" w-[100%] pt-[34vh]"
          src={living_room}
          alt="sleep_night"
        />
        <img className="absolute" src={dog_sleep} alt="dog_in_frame" />
        <div className="pt-[80vh]">
          <img
            className="w-[25%] absolute right-[70%]"
            src={cleaning_e1}
            alt="dog_in_frame"
          />
          <img
            className="w-[25%] absolute left-[70%]"
            src={cleaning_e2}
            alt="dog_in_frame"
          />
        </div>
      </div>
    </>
  );
}

export default Story6;
