import Navbar from "./components/navbar/navbar";
import "./App.css";
import coverImage_1 from "./Images/cover.jpg";
import coverImage_2 from "./Images/cover-2.png";
import door_A1 from "./Images/door-animation-1.png";
import test_card from "./Images/test-card.jpg";

function App() {
  return (
    <div>
      <div
        className=" h-screen bg-local  bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${coverImage_1})` }}
      >
        <div className="h-screen bg-cover bg-center flex items-center justify-center">
          <h1 className="text-4xl text-white">สวัสดี, Tailwind CSS!</h1>
        </div>
      </div>
      <div
        className=" h-screen bg-local bg-center"
        style={{ backgroundImage: `url(${coverImage_2})` }}
      >
        <div className="flex items-center justify-between w-3/4 pt-72">
          <div>
            <img
              className=" w-3/4 object-cover object-center"
              src={door_A1}
              alt="nature image"
            />
          </div>
          <div className="basis-1/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
      </div>
    
    
    <div className="">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
            <div class="flip-card-back">
              <img className=" rounded-2xl"
              src={test_card}
              alt="nature image"
              />
            </div>
        </div>
      </div>
    </div>
      

      <Navbar />
    </div>
  );
}

export default App;
