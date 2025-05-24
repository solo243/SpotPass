import React from "react";

function CategoriesRow({ item, index }) {
  return (
    <div
      key={index}
      className="flex-shrink-0 cursor-pointer flex-col hover:-translate-y-2 transition-all flex items-center justify-center duration-200 delay-100 ease-in-out "
    >
      <img
        src={item.img}
        alt=""
        className="md:size-36 size-24  rounded-full object-cover"
      />
      <h1 className="text-center md:pt-3 pt-2 font-[500] text-[13px]  max-sm:max-w-[7rem] md:text-base line-clamp-1">
        {item.name}
      </h1>
    </div>
  );
}

export default CategoriesRow;
