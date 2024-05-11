import React, { useState, useRef } from "react";
import soundURL from "../../Sounds/ambient-1.mp3";
import SoundOn from "../../Images/SVG/music-on.png";
import SoundOff from "../../Images/SVG/music-of.png";

const MusicButton = () => {
  const [play, setPlay] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setPlay(!play);

    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.loop = true;
  };

  const IconPause = () => {
    return <img src={SoundOff} alt="Pause Icon" className="w-[6.5vw] h-[6.5vw] lg:w-[4.5vw] lg:h-[4.5vw] md:w-[4.5vw] md:h-[4.5vw] xl:w-[2.5vw] xl:h-[2.5vw]" />;
  };

  const IconPlay = () => {
    return <img src={SoundOn} alt="Play Icon" className="w-[6.5vw] h-[6.5vw] lg:w-[4.5vw] lg:h-[4.5vw] md:w-[4.5vw] md:h-[4.5vw] xl:w-[2.5vw] xl:h-[2.5vw]" />;
  };

  return (
    <div className="fixed right-[0.416vw] rounded-full p-[0.4166vw] top-[8.1666vw] md:top-[6.1666vw] lg:top-[6.1666vw] xl:top-[4.1666vw]  hover:scale-110 duration-300 transition ease-in-out delay-50 hover:shadow-md flex justify-center">
      <button className="" id="audioBtn" onClick={togglePlay}>
        {play ? <IconPause /> : <IconPlay />}
      </button>
      <audio ref={audioRef} src={soundURL} />
    </div>
  );
};

export default MusicButton;
