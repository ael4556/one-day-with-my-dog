import image_frame from "../Images/human-bowl.png";

function Card({
  title = "หัวข้อ",
  content = "รายระเอียด",
  image = image_frame,
}) {
  return (
    <div className="flex flex-col max-w-sm rounded-2xl h-[60vh] shadow-lg bg-white">
      <div className="flex justify-center pt-4">
        <img class="w-5/6" src={image} alt={title} />
      </div>
      <div className="flex justify-center pt-12">
        <p className="text-4xl font-medium">{title}</p>
      </div>
      <div className="flex justify-center ml-12 mr-12 mt-8">
        <p className="text-2xl ">{content}</p>
      </div>
    </div>
  );
}

export default Card;
