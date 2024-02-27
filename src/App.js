import Navbar from "./components/navbar/navbar";
import "./App.css";

import cover from "./Images/cover.jpg";

import Logo from "./components/logo/logo";
import ClockTop from "./components/clock";
import Chat from "./components/chat";

import Story1 from "./components/story/story-1";
import Story2 from "./components/story/story-2";
import Story3 from "./components/story/story-3";
import Story4 from "./components/story/story-4";
import Story5 from "./components/story/story-5";

function App() {
  return (
    <>
    <div className="font-sans">
      <Navbar />
      {/* Start Web contents*/}
      <div
        className="h-full w-full flex flex-col"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          height: "800vh",
          backgroundSize: "contain",
        }}
      >
        <Logo />
        <div className="flex flex-col pt-[30vh] xl:pt-[50vh] 2xl:pt-[120vh]">
          <Story1 />
        </div>
        <div>
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
      </div>
    </div>
    </>
  );
}

export default App;
