import React from "react";
import { CalendarIcon, Clock } from "lucide-react";
import { SlLocationPin } from "react-icons/sl";

function EventCard() {
  return (
    // <div className="w-[calc(50%-2px)] md:min-w-[250px] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-8px)]  md:p-2 p-1 hover:scale-[1.02] transition-all mb-2 duration-200 cursor-pointer">
    // <div className="lg:w-1/4  md:w-1/3  w-1/2  md:px-2  px-[0.2rem]  py-2">
    <div className="h-full min-w-[320px]  lg:w-1/4 sm:w-1/3 w-1/2 p-2 py-2 ">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md">
        {/* Image Container */}
        <div className="relative ">
          <img
            src="https://cdn2.allevents.in/transup/fb/eb177a4d4542f380727d39cfd8c0bf/Trophy-Fighters.jpg"
            alt="Event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="md:px-3  px-2 py-2">
          <h3 className="font-semibold tracking-normal text-[#2C2C2E]  text-base sm:text-lg md:mb-2 mb-1 line-clamp-2 whitespace-normal leading-[20px] ">
            Mass Appeal Presents: The World Reunion – A Charity Concert
          </h3>
          {/* Date and Time */}
          <div className=" max-md:pt-1 space-y-1.5">
            <h6 className="md:text-[13px] text-[#545459] text-xs line-clamp-1  flex items-center gap-1.5">
              <CalendarIcon size={12} />
              23 March - 18 March
            </h6>
            <h6 className="md:text-[13px] text-[#545459] text-xs  line-clamp-1 flex items-center gap-1.5">
              <SlLocationPin size={14} />
              Karnavati Clubs
            </h6>
            <div className="flex items-center px-1 gap-2">
              <div className="size-2 bg-green-500 rounded-full " />
              <h6 className="text-xs text-gray-600">Availebal</h6>
            </div>
            <div className="flex items-center justify-between ">
              <h3 className="font-[600] py-0.5 md:py-1 px-1 line-clamp-1 text-base text-[#2c2c2e]">
                ₹ 299{" "}
                <span className="text-xs  font-[500] text-[#5c5c5e]">
                  onwards
                </span>
              </h3>
              <button className="text-xs hover:px-3.5 hover:py-1.5 transition-all duration-400 delay-75 ease-in-out bg-Primary rounded-md px-3 py-1 text-white font-[500] uppercase ">
                Get Pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
