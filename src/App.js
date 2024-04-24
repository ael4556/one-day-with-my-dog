import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import "./App.css";

import cover from "./Images/logo/bg-cover-copy.png";
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
import Story12 from "./components/story/story12/story-12";
import Story13 from "./components/story/story-13";
import Story14 from "./components/story/story-14";
import Story15 from "./components/story/story-15";
import Cooking from "./components/cooking";
import Story17 from "./components/story/story-17";
import Story18 from "./components/story/story-18";
import Story19 from "./components/story/story-19";
import Story20 from "./components/story/story-20";
import Welcome from "./components/welcome";

const App = () => {
  return (
    <>
    <div className="">
      {/* Other content */}
      <Welcome />
    </div>
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
          <div id="Home"></div>
          <div>
          <Logo />
          <div className="flex justify-center">
            <img className=" absolute w-[7%] top-[82%]" src={Scroll}/>
          </div>
          </div>
          <div className="flex flex-col pt-[0%] xl:pt-[50vh] 2xl:pt-[75vh]">
            <Story1 />
          </div>
          <div className=" pt-40">
          <div id="Story_2"></div>
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
          <div className="">
            <Story10_0 />
          </div>
          <div>
            <Story10_1 />
          </div>
          <div>
            <Story10_2 />
          </div>
          <div className="pt-[30%]">
            <Story11 />
          </div>
          <div className=" flex flex-col pt-[10%]">
            <div className="">
              <Story12 />
            </div>
          </div>
        </div>

        <div className=" pt-[5%]">
          <Story13 />
        </div>
        <div>
          <Story14 />
        </div>
        <div className="flex flex-col pt-[10%]">
          <Story15 />
        </div>
        <div className="flex flex-col">
          <div className="pt-[12%] z-0">
            <Cooking />
          </div>
          <div className="pt-[10%] z-0">
            <Story17 />
          </div>
          <img
            className=" opacity-60 z-[-100] absolute w-[100%] pt-[10%]"
            src={bg_cooking}
          />
        </div>
        <div className="z-0">
          <Story18 />
        </div>
        <div className="z-0 pt-[10%]">
          <Story19 />
        </div>
        
        <div className="z-0 pt-[10%]">
          <Story20 />
        </div>
        
        <div className=" z-[500]">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
