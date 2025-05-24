import React from "react";
import { Link } from "react-router-dom";

function BottomTabBar() {
  return (
    <div className="fixed  shadow-lg bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex items-center justify-between lg:hidden z-50">
      <div className="flex flex-col">
        <span className="text-xs text-black/60 leading-2">Starts From</span>
        <h1 className="text-xl max-w-[180px] line-clamp-1 font-bold self-start text-black">
          ₹ 1200
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <Link to={"/event/myevent/tickets"}>
          <button className="bg-Primary hover:bg-Primary2 transition-all duration-200 text-white line-clamp-1 font-semibold py-2.5 md:px-36 px-16 rounded-md">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BottomTabBar;
