import logo from "../../Images/logo/logo.png"
import doglogo from "../../Images/logo/Dog_Homepage.png"

const Logo = () => {
  return (
    <div className="h-screen flex items-end top-[0%]">
      <img src={logo} alt="Logo" className=" w-[75%] pt-[5%] absolute left-[4%]" />
      <img src={doglogo} alt="DogLogo" className=" w-[58%] pb-[5%] absolute end-[0%]"/>
    </div>
  );
};

export default Logo;
