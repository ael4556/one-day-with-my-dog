import { useEffect } from "react";
import close from "../Images/story_4/close.png";
import image from "../Images/story_4/info.png";

const Popup = ({ isPopupOpen, setIsPopupOpen, images = image }) => {
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [isPopupOpen]);
  return (
    <>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-[1.666vw] rounded-lg">
            <div className="flex justify-end">
              <div className="absolute pt-[1.25vw] pr-[1.25vw]">
                <img
                  onClick={() => setIsPopupOpen(false)}
                  src={close}
                  className="w-[2.5vw] cursor-pointer hover:bg-gray-200 rounded-full hover:scale-105"
                  alt="close"
                />
              </div>
              <div>
                <img className="w-[50vw]" src={images} alt="popup_image" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
