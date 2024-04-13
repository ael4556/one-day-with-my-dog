import React, { useState, useEffect } from 'react';
import close from "../Images/story_4/close.png";

function Welcome() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if popup has been closed previously
    const isPopupClosed = sessionStorage.getItem('popupClosed');
    if (isPopupClosed === 'true') {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Store in session storage that popup has been closed
    sessionStorage.setItem('popupClosed', 'true');
  };

  if (!isOpen) {
    return null; // Don't render anything if popup is closed
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-[20px] shadow-lg max-w-lg">
                <div className=" flex justify-end">
                    <img
                    onClick={handleClose}
                    src={close}
                    className="w-[7%] cursor-pointer hover:bg-gray-200 rounded-full hover:scale-105"
                    alt="close"
                    />
                </div>
        <h2 className="text-3xl font-Prompt font-semibold mb-4 tracking-wide">ยินดีต้อนรับ !</h2>
        <p className="text-gray-700 font-Prompt text-2xl leading-relaxed">เข้าสู่โหมดเต็มหน้าจอ เพื่อรับประสบการณ์ที่ดีที่สุดในการใช้งานเว็บไซต์ โดยกด F11 (สำหรับ Window) และ fn+f (สำหรับ MacOS)</p>
      </div>
    </div>
  );
}

export default Welcome;