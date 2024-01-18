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

      <div className="flex gap-8 ">
        <div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">XXX</p>
                <p>Hover Me</p>
              </div>
              <div class="flip-card-back">
                <img
                  className=" rounded-2xl"
                  src={test_card}
                  alt="nature image"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3pia3RncmVrc3Q3d3FzOWVhbTBodWJneHVkbTc4d2RnbnUzMXo3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYFDlOLFIDX0hPi/giphy.gif"
              alt="Dog poop"
              className="w-full h-auto"
            />
            <div className="group-hover:block absolute top-0 ease-out duration-300 transition-all opacity-0 group-hover:opacity-100">
              <img
                src="https://media1.tenor.com/m/ocWsw7ohJsUAAAAC/extasyxx-big-hug.gif"
                alt="How to pick up"
                className="w-full h-auto mb-4"
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
