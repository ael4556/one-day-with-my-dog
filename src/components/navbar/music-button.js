import React, { useState, useRef } from "react";
import soundURL from "../../Sounds/ambient-1.mp3";
import SoundOn from "../../Images/SVG/music-on.svg";
import SoundOff from "../../Images/SVG/music-of.svg";

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
    return <img src={SoundOff} alt="Pause Icon" className="w-12 h-12" />;
  };

  const IconPlay = () => {
    return <img src={SoundOn} alt="Play Icon" className="w-12 h-12" />;
  };

  return (
    <div className="fixed right-2 rounded-full p-2 top-20  hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out delay-50 hover:shadow-md flex justify-center">
      <button className="" id="audioBtn" onClick={togglePlay}>
        {play ? <IconPause /> : <IconPlay />}
      </button>
      <audio ref={audioRef} src={soundURL} />
    </div>
  );
};

export default MusicButton;
