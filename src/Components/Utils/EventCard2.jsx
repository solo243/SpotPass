import React from "react";
import { CalendarIcon } from "lucide-react";
import { SlLocationPin } from "react-icons/sl";
function EventCard2() {
  return (
    <ul className="w-full  max-xl:justify-center  flex flex-wrap mx-auto ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <li
          key={index}
          className="p-1  min-w-[300px]  max-w-[380px]  xl:w-1/4 lg:w-1/3 md:w-1/3 mb-1 sm:w-1/2 w-full"
        >
          <div className="border border-gray-300 rounded-md ">
            <div className="w-full   relative   rounded">
              <img
                src="https://cdn2.allevents.in/transup/fb/eb177a4d4542f380727d39cfd8c0bf/Trophy-Fighters.jpg"
                className=" rounded-t-[5px] object-fill  transition-opacity duration-500"
                alt=""
                sizes="(max-width: 320px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, (max-width: 1536px) 60vw, (max-width: 1920px) 50vw, 40vw "
              />
            </div>
            <div className="py-3  px-2">
              <h1 className="text-xl md:text-lg text-[#2C2C2E] line-clamp-2 font-semibold">
                Mass Appeal Presents: The World Reunion – A Charity Concert s{" "}
              </h1>
              <div className=" space-y-1.5 md:py-2 py-2">
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
                <h3 className="font-[600]  px-1 line-clamp-1 md:text-[17px] text-[19
                px] text-[#2c2c2e]">
                  ₹ 299{" "}
                  <span className="text-sm md:text-xs  font-[500] text-[#5c5c5e]">
                    onwards
                  </span>
                </h3>
                <button className="bg-black/90 text-sm text-white font-[600] px-4 py-1  rounded-md ">
                  Get Pass
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EventCard2;
