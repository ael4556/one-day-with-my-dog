import Navbar from "./components/navbar/navbar";
import "./App.css";

import cover from "./Images/cover.jpg";
import sleep_night from "./Images/sleep-whit-dog-night.jpg";
import logo_dog from "./Images/logo-onday-with-mydog.png";
import door_a1 from "./Images/door-animation-1.png";

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
        }}
      >
        {/* Dog Logo*/}
        <div className="h-screen flex items-center justify-center">
          <img src={logo_dog} alt="Logo" className=" w-2/4" />
        </div>

        <div className="flex flex-col ">
          {/* Stage 1 Opendoor */}
          <div
            className="bg-center"
            style={{
              paddingTop: "120vh",
            }}
          >
            <div className="flex flex-row justify-around">
              <img src={door_a1} alt="Door_A1" className=" w-1/5" />
              <div className="flex flex-col justify-start text-white pt-56">
                <h1 className="text-5xl">คุณที่แสนเหนื่อยล้า...</h1>
                <p className="text-3xl pt-12">
                  กับร่างกายที่อ่อนแรงกลับบ้านมา ด้วยใจที่ห่อเหี่ยว
                </p>
                <p className="text-3xl">
                  จากการโหมงานหนัก เปิดประตูเข้าห้องนอนที่มืดสนิท
                </p>
                <p className="text-3xl">แล้วตรงดิ่งไปที่เตียง</p>
              </div>
            </div>
          </div>
          {/* Stage 2 Opendoor */}
          <div
            className="w-full bg-center"
            style={{
              backgroundImage: `url(${sleep_night})`,
              backgroundRepeat: "no-repeat",
              height: "150vh",
            }}
          >
            <div className="flex flex-col  text-black pt-56 pl-64">
              <p className="text-3xl pt-32">
                หลังจากนั้นคุณก็ฟุบลงบนที่นอนแล้วหลับไป
              </p>
              <p className="text-3xl">
                โดยไม่ได้สังเกตุว่ามีสายตาคู่หนึ่งจ้องมองอยู่
              </p>
              <p className="text-3xl">
                เพราะในวันนี้คุณได้หมดแรงกับงานที่ทำแล้ว
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End Story 1*/}
    </div>
  );
}

export default App;
