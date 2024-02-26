import logo_dog from "../../Images/logo-onday-with-mydog.png";
import logo from "../../Images/logo.png"
import doglogo from "../../Images/Dog_Homepage.png"

const Logo = () => {
  return (
    <div className="h-screen flex items-end">
      <img src={logo} alt="Logo" className=" w-3/4 pt-16 flex pl-36" />
      <img src={doglogo} alt="DogLogo" className=" w-7/12 pb-10 absolute end-0"/>
    </div>
  );
};

export default Logo;
