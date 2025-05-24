import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx/NavBar";
import { ArrowRight, Search } from "lucide-react";
import EventCardHome from "../Components/Home/EventCardHome";
import CategoriesRow from "../Components/Home/CategoriesRow";
import { CategoriesRowData } from "../Constants/CategoriesRow";
import Footer from "../Components/Home/Footer";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

function Home() {
  const AllEvents = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 2, 2];

  const valid = AllEvents.length > 8 ? AllEvents.slice(0, 9) : AllEvents;

  console.warn("Waring", valid);

  const navigation = useNavigate();

  return (
    <div className="bg-white scrollbar-hide w-full flex flex-col ">
      <div className="w-full md:px-4 relative max-w-[1300px]  flex flex-col mx-auto flex-1 ">
        <div className="relative mx-auto   md:mt-6  items-end flex max-h-[30rem] md:h-[20rem] h-[17.5rem] w-full">
          <img
            src="https://media.feverup.com/image/upload/f_auto,w_1280,h_893,c_lfill,g_auto/v1728910979/fever-mobile-13.jpg"
            className="absolute object-cover md:rounded-xl z-10 w-full h-full "
            alt=""
          />
          <div className="z-20   p-6 pb-10 w-full    text-white  mx-auto flex flex-col me-1 ">
            <div className="w-[22rem] ">
              <div className="">
                <h1 className="text-2xl font-[800] pb-2 md:text-4xl">
                  Ahmadabad
                </h1>
                <span className="md:text-xl  font-[400] text-lg ">
                  More Than Moments: <br /> Discover What’s On
                </span>
              </div>
              <div
                onClick={() => navigation("/allevents")}
                className="bg-white cursor-pointer flex  items-center mt-4 px-4  w-full h-12 rounded-full"
              >
                <Search size={22} className="text-gray-800" />
                <h1
                  onClick={() => navigation("/allevents")}
                  className=" border-none  text-gray-400 cursor-pointer  w-full  px-2 outline-none  text-sm"
                >
                  Search events and experiences
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Categories Row  */}
        <div className=" w-full px-2 py-4 pt-6">
          <h1 className="text-[23px] font-[700] ">Categories</h1>
          <div className="flex overflow-x-auto justify-between lg:gap-9 md:gap-6 gap-4 py-4  scrollbar-hide">
            {CategoriesRowData.map((item, index) => (
              <CategoriesRow item={item} index={index} />
            ))}
          </div>
        </div>
        {/* Main Content  */}
        <div className="md:py-4  pb-8 px-2">
          <div className="flex items-center pb-4 justify-between">
            <h1 className="text-[23px] font-[700] ">Top Events</h1>
            <Link to={"/allevents"}>
              <div className="flex gap-1 hover:underline cursor-pointer hover:text-Primary items-center">
                <h5 className="text-sm ">All Events</h5>
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className=" w-full flex scrollbar-hide flex-shrink-0 overflow-x-auto  md:grid md:grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-3">
            {valid.map((item, index) => (
              <EventCardHome key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* Main Footer  */}
      <div className="w-full bg-Primary ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
