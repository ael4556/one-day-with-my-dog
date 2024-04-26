import Bg_copyright from "../../Images/bg-copyright.png"
import Logo from "../../Images/logo-copyright.png"
function Copyright() {
   
    return (
      <div className=" flex flex-col">
        <div className="pt-[3vw] z-[50] text-center font-sans text-white text-[1.2vw]">
            <p>เว็บไซต์นี้เป็นส่วนหนึ่งในโครงงานวิจัยของนักศึกษาชั้นปีที่ 4 สาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ</p>
            <p>คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
            <p>จัดทำโดย นายธีวรา อิ่มสำราญ, นางสาวศรุตา ชัยนิมิตร และนายอดิเทพ เขตหาญ</p>
        </div>
        <div className="flex justify-center pt-[2vw]">
            <img className="z-[50] w-[25vw]" src={Logo}/>
        </div>
        <div className="pt-[2vw] z-[50] text-center font-sans text-white text-[1.2vw]">
            <p>Copyright ©2024 One Day With My Dog</p>
        </div>
        <img className="z-[-500] absolute w-[100vw]" src={Bg_copyright}/>
      </div>

    );
  }
  
  export default Copyright;
  