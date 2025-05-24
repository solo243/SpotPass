import React, { useEffect, useState } from "react";
import { ChevronLeft, Ticket, User, X } from "lucide-react";
import CategoriesCard from "../Components/BookingScreen/CategoriesTicket";
import { useNavigate } from "react-router-dom";

function BookingSection() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [disbale, setdisbale] = useState(false);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [ticketCount, setTicketCount] = useState(0);

  const handleSelectedCategory = (index) => {
    if (selectedCategoryIndex === index) {
      setSelectedCategoryIndex(null);
      setTicketCount(0);
    } else {
      setSelectedCategoryIndex(index);
      setTicketCount(1);
    }
  };

  const handleCountChange = (delta) => {
    setTicketCount((prev) => {
      const newCount = prev + delta;
      if (newCount < 1) {
        setSelectedCategoryIndex(null);
        return 0;
      }
      return newCount > 10 ? 10 : newCount;
    });
  };

  const CateGorisData = [
    {
      name: "Gold phase - 1",
      price: 799,
      soldOut: false
    },
    {
      name: "Platinum phase - 1",
      price: 999,
      soldOut: false
    },
    {
      name: "Fanpit phase - 1",
      price: 1199,
      soldOut: true
    },
    {
      name: "Group of 4  phase - 1",
      price: 2799,
      soldOut: false
    }
  ];
  return (
    <div className="min-h-screen  flex flex-col w-full relative bg-white">
      {/* Fixed Top Header (Navbar + Venue Row) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Navbar */}
        <div className="bg-Primary justify-center h-16">
          <div className="md:px-6 mx-auto px-2 max-w-[1400px] h-full relative flex justify-center items-center text-white">
            <div className="cursor-pointer absolute lg:left-4 xl:flex hidden gap-2 text-Bg2 font-semibold text-xl uppercase">
              <Ticket className="-rotate-45" /> Stage Pass
            </div>
            <div className="flex-1 max-w-3xl flex justify-between items-center ">
              <ChevronLeft className="size-7 hover:cursor-pointer" />
              <div className="line-clamp-1 px-3 max-w-[75%] text-white font-[500] text-center">
                Arkle Equestrian Championship 2025
              </div>
              <X
                onClick={() => navigate("/")}
                className="size-6 hover:cursor-pointer"
              />
            </div>
            <div className="absolute lg:right-4 border-2 border-Border p-2 rounded-full items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-Primary2 xl:flex hidden text-sm">
              <User size={20} />
            </div>
          </div>
        </div>

        {/* Fixed Venue/Time Bar */}
        <div className="bg-[#f5f5f7] border-b border-Border2 w-full py-2">
          <div className="max-w-[1400px] mx-auto flex flex-1 lg:w-2/4 w-full text-gray-700 items-center sm:text-base text-sm">
            <div className="flex-1 items-center justify-center text-center border-r-2 px-3 border-gray-400 line-clamp-2">
              Sat 31 March
            </div>
            <div className="flex-1 border-r-2 border-gray-400 flex items-center justify-center text-center line-clamp-2">
              7:00 PM
            </div>
            <div className="flex-1 items-center justify-center text-center line-clamp-2 px-3 text-wrap">
              Karnvati Club
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Section */}
      <div className="flex-1 overflow-y-auto pt-[60px] pb-20">
        {/* Adjust padding-top (16+32=48px + small gap) */}
        <div className="flex items-center flex-col gap-4 py-3 px-3 max-w-[1400px] mx-auto">
          {CateGorisData.map((item, i) => (
            <CategoriesCard
              key={i}
              isSelected={selectedCategoryIndex === i}
              ticketCount={selectedCategoryIndex === i ? ticketCount : 0}
              onSelect={() => handleSelectedCategory(i)}
              onCountChange={handleCountChange}
              data={item}
            />
          ))}
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="bg-Bg2 border-t shadow-xl fixed bottom-0 flex w-full right-0 left-0 h-16 justify-center items-center z-50">
        <div className="px-4  items-center justify-between w-full flex max-w-lg">
          {selectedCategoryIndex !== null && ticketCount > 0 ? (
            <>
              <div>
                <h1 className="text-xl font-bold text-center text-black">
                  ₹ {ticketCount * CateGorisData[selectedCategoryIndex].price}
                </h1>
                <h5 className="text-[13px] px-0.5 text-black/70 leading-2">
                  {ticketCount} ticket{ticketCount > 1 && "s"}
                </h5>
              </div>
              <div className="flex rounded w-[60%]  items-center gap-3">
                <button
                  onClick={() => {
                    if (selectedCategoryIndex !== null) {
                      console.log(
                        "Selected Category",
                        CateGorisData[selectedCategoryIndex]
                      );
                    }
                  }}
                  className="bg-Primary hover:bg-Primary2 transition-all duration-200 text-white w-full font-semibold py-2.5 rounded-md"
                >
                  Book Now
                </button>
              </div>
            </>
          ) : (
            <h1
              className={`${
                disbale ? "bg-Primary" : "bg-Primary/50"
              } text-white font-[500] items-center flex justify-center hover:cursor-pointer py-3 rounded-md w-full`}
            >
              Continue
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingSection;
