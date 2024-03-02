import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import "./App.css";

import cover from "./Images/logo/bg-cover-copy.png";

import Logo from "./components/logo/logo";
import ClockTop from "./components/clock";

import Story1 from "./components/story/story-1";
import Story2 from "./components/story/story-2";
import Story3 from "./components/story/story-3";
import Story4 from "./components/story/story-4";
import Story5 from "./components/story/story-5";
import Story6 from "./components/story/story-6";
import Story7 from "./components/story/story-7";
import Story8 from "./components/story/story-8";
import Story9 from "./components/story/story-9";

const App = () => {
  /*const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // กำหนดตำแหน่งที่คุณต้องการเปลี่ยนสี
      const scrollThreshold = 1900;

      if (position > scrollThreshold) {
        document.body.style.backgroundColor = "white"; // เปลี่ยนสีพื้นหลัง
        setBackgroundOpacity(1); // เปลี่ยน opacity เป็น 1 เมื่อเลื่อนไปยังตำแหน่งที่กำหนด
      } else {
        document.body.style.backgroundColor = "#1B192D"; // คืนค่าสีพื้นหลังเป็นสีดีฟอลต์
        setBackgroundOpacity(0); // เปลี่ยน opacity เป็น 0 เมื่อไม่ได้เลื่อนไปยังตำแหน่งที่กำหนด
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/

  return (
    <>
      <div className="font-sans">
        
        {/* Start Web contents*/}
        <div
          className="h-full w-full flex flex-col"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundRepeat: "no-repeat",
            height: "100%",
            backgroundSize: "contain",
          }}
        >
          <Logo />
          <div className="flex flex-col pt-[30vh] xl:pt-[50vh] 2xl:pt-[75vh]">
            <Story1 />
          </div>
          <div className=" pt-40">
            <ClockTop time="7.00" />
          </div>
          <div className=" flex justify-center">
            <Story2 />
          </div>
          <div className="flex flex-col pt-40 justify-center justify-items-center">
            <Story3 />
          </div>
          <div className="flex flex-col">
            <Story4 />
          </div>
          <div className="flex flex-col">
            <Story5 />
          </div>
          <div>
            <Story6 />
          </div>
          <div>
            <Story7 />
          </div>
          <div className="pt-60">
            <Story8 />
          </div>
            <Story9 />
            
            
            
            
            <Navbar />

        </div>
      </div>
    </>
  );
};

export default App;
