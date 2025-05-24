import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import NavBar from "../Components/NavBar.jsx/NavBar";
import { Camera, MapPin, Pencil, Plus } from "lucide-react";
import EventCardHome from "../Components/Home/EventCardHome";
import Footer from "../Components/Home/Footer";

function ProfileScreen() {
  return (
    <div className="w-full bg-white relative  flex flex-col flex-1  ">
      <div className="mx-auto max-w-[1300px]  w-full flex-1    ">
        <div className=" px-2 py-8">
          <div className="w-full  flex flex-col items-center gap-3">
            <div className="relative">
              <img
                className="size-20 rounded-md"
                src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg"
                alt=""
              />
              <div className="absolute -bottom-[12px] border-2 border-black/20 cursor-pointer bg-white  p-1.5 rounded-full  -right-2">
                <Camera size={20} />
              </div>
            </div>

            <div className="py-2">
              <h1 className="text-xl text-center  font-semibold">
                Harshil Rana
              </h1>
              <div className="flex items-center gap-0.5 justify-center">
                <MapPin size={15} color="#6b7280" />
                <h4 className=" text-sm text-gray-500">Ahmedabad</h4>
              </div>
            </div>
          </div>

          {/* Update and Follow list  */}
          <div className=" w-full h-10 mx-auto items-center flex justify-center gap-3">
            <button className="bg-[#0f172a] flex  gap-1.5 hover:bg-black/80 w-[10rem] transition-all ease-in-out duration-150 items-center justify-center delay-75  py-2 rounded-md  border-gray-300">
              <Plus color="white" size={18} />
              <h1 className="text-white text-sm font-semibold uppercase ">
                List Event
              </h1>
            </button>
            <button className="bg-gray-100 hover:bg-gray-300 w-[11rem] flex items-center justify-center transition-all ease-in-out duration-150 delay-75  gap-1.5 py-2 rounded-md border border-Border ">
              <Pencil size={16} />
              <h1 className="text-sm font-semibold uppercase text-black">
                Update Profile
              </h1>
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-Border/10" />
      </div>
      <div className="flex-1 flex flex-col items-baseline h-fit bg-red-300 justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default ProfileScreen;
