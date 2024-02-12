import logo_dog from "../../Images/logo-onday-with-mydog.png";

const Logo = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img src={logo_dog} alt="Logo" className=" w-2/4" />
    </div>
  );
};

export default Logo;
