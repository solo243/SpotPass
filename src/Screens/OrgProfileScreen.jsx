import { Facebook, Instagram, MapPin } from "lucide-react";
import React from "react";
import Footer from "../Components/Home/Footer";
import EventCard2 from "../Components/Utils/EventCard2";
import EventCardHome from "../Components/Home/EventCardHome";
import Nodata from "../assets/Nodata.svg";

function OrgProfileScreen() {
  const AllEvents = [];

  const valid = AllEvents.length > 8 ? AllEvents.slice(0, 9) : AllEvents;

  return (
    <>
      <div className="w-full max-w-[1300px] mx-auto ">
        <div className="sm:py-4 relative sm:px-4 ">
          {/* top user card  */}
          <div className="">
            <div className=" sm:h-60 h-48">
              <img
                src="https://media.feverup.com/image/upload/f_auto,w_1280,h_893,c_lfill,g_auto/v1728910979/fever-mobile-13.jpg"
                className="object-cover h-full w-full sm:rounded-lg"
                alt=""
              />
            </div>
            <div className=" w-full mx-auto  gap-4 flex  md:flex-row flex-col  justify-between ">
              <div className="px-2.5 ">
                <div className="sm:size-36 size-28 flex items-center    -mt-16 sm:-mt-20">
                  <img
                    src="https://i.pinimg.com/736x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex  flex-col max-w-[50rem] pt-3   sm:pt-4">
                  <h1 className="sm:text-2xl text-lg   max-w-[40rem]  line-clamp-3  font-semibold">
                    GOGO Multimedia Pvt ltd
                  </h1>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} color="#4b5563" />
                    <p className="text-gray-600 ">Ahmedabad</p>
                  </div>
                  <div>
                    <h1 className="text-lg  font-semibold pt-4">Description</h1>
                    <p className="line-clamp-3  text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut neque ducimus ex deleniti in aliquam expedita beatae,
                      ea, nulla qui inventore, repudiandae tempora omnis placeat
                      magni. Ut praesentium illo quam?
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="text-lg font-semibold  md:py-2 md:px-3 px-6 ">
                <h1>Follow us</h1>
                <div className="flex items-start gap-4 py-2">
                  <Instagram
                    size={20}
                    className="bg-gradient-to-r  from-pink-300 to-purple-700 text-transparent bg-clip-text"
                  />
                  <Facebook />
                </div>
              </div> */}
            </div>
            {/* All events  */}
            {AllEvents.length > 0 ? (
              <>
                <div className="w-full py-4 pt-10 px-1">
                  <h1 className="sm:text-3xl pb-4 flex-shrink-0 text-2xl px-2 font-semibold ">
                    Upcoming Events
                  </h1>
                  <div>
                    <div className=" w-full flex overflow-auto max-md:px-3 scrollbar-hide flex-shrink-0   md:grid md:grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-3">
                      {valid.map((item, index) => (
                        <EventCardHome key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:py-4 py-2 px-1">
                  <h1 className="sm:text-3xl pb-4 flex-shrink-0 text-2xl px-2 font-semibold ">
                    Past Events
                  </h1>
                  <div>
                    <div className="flex overflow-auto w-full max-md:px-3 scrollbar-hide flex-shrink-0   md:grid md:grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-3">
                      {valid.map((item, index) => (
                        <EventCardHome key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="pt-10">
                <NoDataFound />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const NoDataFound = () => (
  <div className="w-full flex flex-col items-center gap-4 py-6">
    <img src={Nodata} className="sm:size-60 size-48" alt="" />
    <h1 className="text-lg font-semibold ">Ooops! No Data Found</h1>
  </div>
);

export default OrgProfileScreen;
