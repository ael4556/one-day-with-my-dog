function ClockTop({ time = "0.00" }) {
  return (
    <div className="flex justify-end">
      <div className="text-4xl pr-[15%]">{time} น</div>
    </div>
  );
}

export default ClockTop;
