import Navbar from "./components/navbar/navbar";
import "./App.css";
import coverImage_1 from "./Images/cover.jpg";
import coverImage_2 from "./Images/cover2.jpg";

function App() {
  return (
    <div>
      <div
        className=" h-screen bg-local  bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${coverImage_1})` }}
      ></div>

      <div className="h-screen bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl text-white">สวัสดี, Tailwind CSS!</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
