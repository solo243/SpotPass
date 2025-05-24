import React from "react";
import { CalendarIcon } from "lucide-react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

function EventCardHome() {
  return (
    <div className="mb-4 border border-gray-300   max-md:min-w-[350px]  rounded-lg ">
      <img
        src="https://cdn2.allevents.in/thumbs/thumb67eb919b98b96.jpg"
        className="w-full  object-cover rounded-t-xl"
        alt=""
      />
      <div className="md:px-4 px-3 py-2">
        <h1 className="font-[600] line-clamp-2 text-black/90 text-base">
          TATA IPL 2025 - Match 62 - Chennai Super Kings vs Rajasthan Royals
        </h1>
        <div className="space-y-1 md:py-2 py-2.5">
          <h6 className="md:text-[13px] text-[#545459] text-sm line-clamp-1  flex items-center  gap-1.5">
            <CalendarIcon size={14} />
            23 March - 18 March
          </h6>
          <h6 className="md:text-[13px] text-[#545459] text-sm  line-clamp-1 flex items-center gap-1.5">
            <SlLocationPin size={16} />
            Karnavati Clubs
          </h6>
        </div>
        <div className="flex items-center justify-between ">
          <h3 className="font-[600] px-1 line-clamp-1 text-[19px] text-[#2c2c2e]">
            ₹ 299{" "}
            <span className="text-sm md:text-xs  font-[500] text-[#5c5c5e]">
              onwards
            </span>
          </h3>
          <Link to={"/event/matchScreening"}>
            <button className="bg-Primary text-sm text-white font-[600] px-4 py-2  rounded-md w-[10rem] hover:-translate-y-2 transition-all duration-300 delay-75 ease-in-out">
              Get Pass
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default EventCardHome;
