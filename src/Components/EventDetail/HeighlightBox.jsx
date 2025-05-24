import { CalendarIcon, Clock, Hourglass, MapPin, Ticket } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HeighlightBox() {
  const navigate = useNavigate();

  const heighLists = [
    {
      icons: <CalendarIcon size={20} />,
      title: "Sun, 27 April, 2025"
    },
    {
      icons: <Clock size={20} />,
      title: "3:00 am"
    },
    {
      icons: <Hourglass size={20} />,
      title: "3 hours"
    },
    {
      icons: <MapPin size={20} />,
      title: "Spinner Film City, Hydrabad"
    },
    {
      icons: <Ticket size={20} />,
      title: "Starting at INR 999"
    }
  ];

  return (
    <div className="md:flex-[1] ps-4 md:min-w-[310px] lg:block hidden w-full">
      <div className="flex px-4 justify-between  flex-col flex-1 bg- border-2 rounded-md p-3 w-full ">
        <h1 className="text-black/90 font-[600] pb-2 text-xl md:text-xl">
          Event Details
        </h1>
        <div className=" border-t-2 bg-gray-200 mb-2.5 mt-1 w-full" />
        <div>
          {heighLists.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-3.5 leading-[160%] items-center py-2 "
              >
                <span className="text-black/75">{item.icons}</span>
                <p className="text-[#45474D] leading-[130%]  text-md font-[400]">
                  {item.title}
                </p>
              </div>
            );
          })}
          <div className=" border-t-2  bg-gray-200 mb-2.5 mt-3 w-full" />

          <div className="w-full px-2 gap-7 items-center flex justify-between">
            <div>
              <p className="text-xs text-black/60 leading-2">Starts From</p>
              <h1 className="text-xl  font-[800]">₹1200</h1>{" "}
            </div>

            <button
              onClick={() => navigate("/event/myevent/tickets")}
              className="flex-1 flex items-center justify-center  font-[600] bg-Primary text-white  rounded-md py-3 hover:bg-Primary2 transition-all duration-200 ease-in-out  text-md  border border-black/15 lg:py-3  max-lg:py-3  max-lg:rounded-md "
            >
              <Ticket size={21} className="-rotate-45 mr-3" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeighlightBox;
