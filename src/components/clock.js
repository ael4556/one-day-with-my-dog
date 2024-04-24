import icon from "../Images/SVG/icon-time.svg";

function ClockTop({ time = "0.00" }) {
  return (
    <div className="flex justify-end font-mali ">
      <img src={icon} alt="Clock" className=" w-[4.18vw] h-[4.18vw] pb-[0.83vw]" />
      <div className="pl-[0.42vw] font-mali font-medium text-[3.14vw] pr-[15%]">
        {time} น.
      </div>
    </div>
  );
}

export default ClockTop;
