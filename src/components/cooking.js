import React, { useState } from "react";

import image_beef from "../Images/cooking/beef.png";
import image_carrot from "../Images/cooking/carrot.png";
import image_egg from "../Images/cooking/egg.png";
import image_honey from "../Images/cooking/honey.png";
import image_liver from "../Images/cooking/liver.png";
import image_pumpkin from "../Images/cooking/pumpkin.png";
import image_wing from "../Images/cooking/wing.png";

import dinner from "../Images/cooking/dinner.png";

import image_bow_full_0 from "../Images/cooking/empty.png";
import image_bow_full_1 from "../Images/cooking/full01.png";
import image_bow_full_2 from "../Images/cooking/full02.png";
import image_bow_full_3 from "../Images/cooking/full03.png";
import image_bow_full_4 from "../Images/cooking/full04.png";
import image_bow_full_5 from "../Images/cooking/full05.png";
import image_bow_full_6 from "../Images/cooking/full06.png";
import image_bow_full_7 from "../Images/cooking/full07.gif";

const Cooking = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "เนื้อวัว", image: image_beef },
    { id: 2, name: "แคร์รอท", image: image_carrot },
    { id: 3, name: "ไข่ไก่", image: image_egg },
    { id: 4, name: "น้ำผึ้ง", image: image_honey },
    { id: 5, name: "ตับ", image: image_liver },
    { id: 6, name: "ฟักทอง", image: image_pumpkin },
    { id: 7, name: "ไก่", image: image_wing },
  ]);

  const potImages = [
    image_bow_full_0,
    image_bow_full_1,
    image_bow_full_2,
    image_bow_full_3,
    image_bow_full_4,
    image_bow_full_5,
    image_bow_full_6,
    image_bow_full_7,
  ];
  const [potImageIndex, setPotImageIndex] = useState(0);

  const handleDragStart = (e, ingredient) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(ingredient));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData("text/plain");
    if (data) {
      try {
        const ingredient = JSON.parse(data);
        if (ingredients.some((item) => item.id === ingredient.id)) {
          setIngredients((prevIngredients) =>
            prevIngredients.filter((item) => item.id !== ingredient.id)
          );

          setPotImageIndex((prevIndex) => prevIndex + 1);
        }
      } catch (error) {}
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="w-[full] p-[0.83vh]">
          <div className="grid grid-cols-7 gap-4 items-center">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className={`p-4 absolute z-10 rounded hover:scale-110 duration-300 cursor-grab ${
                      ingredient.id === 1
                    ? " right-[2%]"
                    : ingredient.id === 2
                    ? "left-[15%]"
                    : ingredient.id === 3
                    ? "right-[16%]"
                    : ingredient.id === 4
                    ? "right-[28%]"
                    : ingredient.id === 5
                    ? "right-[42%]"
                    : ingredient.id === 6
                    ? "right-[57%]"
                    : ingredient.id === 7
                    ? "left-[2%]"
                    : "left-0"
                }`}
                draggable
                onDragStart={(e) => handleDragStart(e, ingredient)}
              >
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-[13vw]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex justify-center pt-[5%] hover:scale-105 duration-300 ">
            <img
              src={potImages[potImageIndex]}
              alt="bowl"
              className="w-[40vw]"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooking;
