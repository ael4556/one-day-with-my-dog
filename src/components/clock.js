import icon_face from "../Images/SVG/icon-time.svg";

function ClockTop({ time = "0.00" }) {
  return (
    <div className="flex justify-end">
      <div className=" font-mali font-medium text-6xl pr-[15%]">{time} น.</div>
    </div>
  );
}

export default ClockTop;
