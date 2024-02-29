import image_frame from "../Images/human-bowl.png";

function Card({
  title = "หัวข้อ",
  content = "รายระเอียด",
  image = image_frame,
}) {
  return (
    <>
      <div className="flip-card perspective-1000">
        <div className="flip-card-inner relative w-full h-full text-center transition-transform transform-style-preserve-3d">
          <div className="flip-card-front w-full h-full absolute flex flex-col border rounded-lg shadow-2xl">
            <div className="flex justify-center pt-4">
              <img className="w-[80%]" src={image} alt="image" />
            </div>
            <p className="text-black text-3xl font-extrabold pt-2">{title}</p>
            <p className="text-black text-2xl font-extralight pt-6">
              {content}
            </p>
          </div>
          <div className="flip-card-back  w-full h-full  absolute flex flex-col justify-center shadow-2xl border border-white rounded-lg transform rotate-y-180">
            {/**ใส่หลังการ์ดตรงนี้ **/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
