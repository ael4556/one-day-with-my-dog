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
    { id: 1, name: "เนื้อสัตว์", image: image_beef },
    { id: 2, name: "ผัก", image: image_carrot },
    { id: 3, name: "เครื่องเทศ", image: image_egg },
    { id: 4, name: "w", image: image_honey },
    { id: 5, name: "a", image: image_liver },
    { id: 6, name: "s", image: image_pumpkin },
    { id: 7, name: "d", image: image_wing },
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
        <div className=" flex justify-center">
          <img src={dinner}/>
        </div>
        <div className="w-full p-4 pt-[15%]">
          <div className="grid grid-cols-7 gap-4 items-center">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className={`p-4 rounded cursor-grab ${
                  ingredient.id === 1
                    ? "bg-blue-200"
                    : ingredient.id === 2
                    ? "bg-red-200"
                    : ingredient.id === 3
                    ? "bg-yellow-200"
                    : ingredient.id === 4
                    ? "bg-green-200"
                    : ingredient.id === 5
                    ? "bg-purple-200"
                    : ingredient.id === 6
                    ? "bg-indigo-200"
                    : ingredient.id === 7
                    ? "bg-pink-200"
                    : "bg-slate-200"
                }`}
                draggable
                onDragStart={(e) => handleDragStart(e, ingredient)}
              >
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex justify-center pt-[10%]">
            <img
              src={potImages[potImageIndex]}
              alt="หม้อ"
              className="w-full"
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
