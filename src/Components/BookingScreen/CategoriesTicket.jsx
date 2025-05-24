import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function CategoriesCard({
  data,
  isSelected,
  ticketCount,
  onSelect,
  onCountChange
}) {
  const isSoldOut = data.soldOut;

  const [showAllTC, setShowAllTC] = useState(false);
  const features = [
    "Single entry access.",
    "Reserved seating area to ensure",
    "Free welcome drink included.",
    "Priority check-in available.",
    "Complimentary merchandise."
  ];

  return ( 
    <div className="border-2 relative  md:w-2/3  max-w-[600px] w-full  justify-between  rounded-xl px-3 py-3">
      <div className="flex justify-between w-full ">
        <div>
          <div
            className={`text-lg pr-3 ${
              isSoldOut && "text-gray-400"
            } font-[500]`}
          >
            {data.name}
          </div>
          <div
            className={` text-lg ${
              isSoldOut && "text-gray-400"
            }  md:pt-2 pt-1 font-[500]`}
          >
            ₹<span className="font-[700] "> {data.price}</span>
          </div>
        </div>

        {!isSelected ? (
          isSoldOut ? (
            <div className="text-red-500  self-start  rounded-md  border-red-300 font-semibold py-1 px-4">
              Sold Out
            </div>
          ) : (
            <button
              className="bg px-5 self-start py-1 rounded-md border-2 font-[500] border-gray-200"
              onClick={onSelect}
            >
              Add
            </button>
          )
        ) : (
          <div className="flex self-start items-center bg-Primary text-white rounded-md px-2 py-2 gap-2">
            <button
              onClick={() => onCountChange(-1)}
              className="text-xl   px-2 font-bold text-gray-200"
            >
              <Minus size={16} />
            </button>
            <span className="font-semibold text-sm">{ticketCount}</span>
            <button
              onClick={() => onCountChange(1)}
              className="text-xl px-2  font-bold text-gray-200"
            >
              <Plus size={20} />
            </button>
          </div>
        )}
      </div>
      <div
        className={`border-t-2 ${
          features.length ? "flex" : "hidden"
        } my-2 border-dashed w-full`}
      />
      <ul className="list-disc text-sm  pr-24  pt-2 px-5 text-gray-500">
        {(showAllTC ? features : features.slice(0, 2)).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {features.length > 2 && (
          <button
            className="text- mt-1.5 -ms-0  text-sm underline"
            onClick={() => setShowAllTC((prev) => !prev)}
          >
            {showAllTC ? "Show Less" : "Show More"}
          </button>
        )}
      </ul>

      <div
        className={`${
          features.length ? "flex" : "hidden"
        } bg-white border-r-2 size-5 absolute top-[70px] md:top-[74px]  rounded-r-full -left-2`}
      />
      <div
        className={` ${
          features.length ? "flex" : "hidden"
        } bg-white border-l-2 size-5 absolute top-[70px] md:top-[74px]  rounded-l-full -right-2`}
      />
    </div>
  );
}

export default CategoriesCard;
