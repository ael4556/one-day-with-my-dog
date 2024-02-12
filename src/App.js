import Navbar from "./components/navbar/navbar";
import "./App.css";

import cover from "./Images/cover.jpg";

import Logo from "./components/logo/logo";
import Story1 from "./components/story/story-1";

function App() {
  return (
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
        <Story1 />
      </div>
    </div>
  );
}

export default App;
