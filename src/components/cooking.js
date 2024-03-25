import React, { useState } from "react";
import Beef from "../Images/SVG/ingrident_1.png";
import Cooking_Pot from "../Images/SVG/pot.png";

const Cooking = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "เนื้อสัตว์", image: Beef },
    { id: 2, name: "ผัก", image: Beef },
    { id: 3, name: "เครื่องเทศ", image: Beef },
    { id: 4, name: "w", image: Beef },
    { id: 5, name: "a", image: Beef },
    { id: 6, name: "s", image: Beef },
    { id: 7, name: "d", image: Beef },
  ]);

  const [pot, setPot] = useState([]);

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
          setPot((prevPot) => [...prevPot, ingredient]);
          setIngredients((prevIngredients) =>
            prevIngredients.filter((item) => item.id !== ingredient.id)
          );
        }
      } catch (error) {}
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full p-4">
        <div className="grid grid-cols-7 gap-4 items-center">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className={`p-4 rounded cursor-move ${
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
              <p className="text-xl">{ingredient.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <div className="w-full p-4">
            <img
              src={Cooking_Pot}
              alt="หม้อ"
              className="w-full"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
