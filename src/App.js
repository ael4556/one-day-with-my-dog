import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import "./App.css";

import bg_cooking from "./Images/bg-cooking.png";
import Scroll from "./Images/logo/scroll.gif";

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
import Story10_0 from "./components/story/story-10-0";
import Story10_1 from "./components/story/story-10-1";
import Story10_2 from "./components/story/story-10-2";
import Story11 from "./components/story/story-11";
import Story13 from "./components/story/story-13";
import Story14 from "./components/story/story-14";
import Story15 from "./components/story/story-15";
import Cooking from "./components/cooking";
import Story17 from "./components/story/story-17";
import Story18 from "./components/story/story-18";
import Story19 from "./components/story/story-19";
import Story20 from "./components/story/story-20";
import Copyright from "./components/story/copyright";

const App = () => {
  return (
    <>
      <div className="font-sans">
        <div>
          <div id="Home"></div>
          <div>
          <Logo />
          <div className="flex justify-center">
            <img className=" absolute w-[7vw] top-[40vw]" src={Scroll}/>
          </div>
          </div>
          <div className="flex flex-col ">
            <Story1 />
          </div>
          <div className=" pt-[8.368vw]">
          <div id="Story_2"></div>
          <ClockTop time="7.00" /> 
          </div>
          
          <div className=" flex justify-center">
            <Story2 />
          </div>
          <div className="flex flex-col pt-[8.368vw] justify-center justify-items-center">
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
          <div className="pt-[12.5vw]">
            <Story8 />
          </div>
          <Story9 />
          <div className="">
            <Story10_0 />
          </div>
          <div>

            <Story10_1 />
          </div>
          <div>
            <Story10_2 />
          </div>
          <div className="pt-[30vw]">
            <Story11 />
          </div>
          
        </div>

        <div className=" pt-[5vw]">
          <Story13 />
        </div>
        <div>
          <Story14 />
        </div>
        <div className="flex flex-col pt-[10vw]">
          <Story15 />
        </div>
        <div className="flex flex-col">
          <div className="pt-[12vw] z-0">
            <Cooking />
          </div>
          <div className="pt-[10vw] z-0">
            <Story17 />
          </div>
          <img
            className=" opacity-60 z-[-100] absolute w-[100vw] pt-[10vw]"
            src={bg_cooking}
          />
        </div>
        <div className="z-0">
          <Story18 />
        </div>
        <div className="z-0 pt-[10vw]">
          <Story19 />
        </div>
        
        <div className="z-0 pt-[10vw]">
          <Story20 />
        </div>
        <div>
          <Copyright />
        </div>
        
        <div className=" z-[500]">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
