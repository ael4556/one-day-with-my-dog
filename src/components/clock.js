import icon from "../Images/SVG/icon-time.svg";

function ClockTop({ time = "0.00" }) {
  return (
    <div className="flex justify-end">
      <img src={icon} alt="Clock" className=" w-16 h-16 pb-4" />
      <div className="pl-2 font-mali font-medium text-6xl pr-[15%]">
        {time} น.
      </div>
    </div>
  );
}

export default ClockTop;
