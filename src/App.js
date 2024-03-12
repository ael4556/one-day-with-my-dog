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
import Story10 from "./components/story/story-10";
import Story11 from "./components/story/story-11";
import Story_12 from "./components/story/story12/story-12";

const App = () => {
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
          <div>
            <Story10 />
          </div>
          <div className="pt-[30%]">
            <Story11 />
          </div>
          <div>
            <Story_12 />
          </div>

          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
