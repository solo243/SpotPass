import React, { useEffect } from "react";
import EventCard2 from "../Components/Utils/EventCard2";
import { Categories } from "../Constants/Categories";
import NavBar from "../Components/NavBar.jsx/NavBar";
import EventCardHome from "../Components/Home/EventCardHome";
import { ChevronDown, Funnel, MapPin, Search } from "lucide-react";
import Footer from "../Components/Home/Footer";
import { CgClose } from "react-icons/cg";

function AllEventScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CategoriesRowData = [
    {
      id: 0,
      name: "All Events",
      img: "https://media.istockphoto.com/id/857615704/photo/blurred-defocused-background-of-public-event-exhibition-hall-business-trade-show-or-commercial.jpg?s=612x612&w=0&k=20&c=h-0q8kbiwY7m93CGMIwSg1u98VxALTqNXUzNo5BiHDs="
    },
    {
      id: 1,
      name: "Concerts",
      img: "https://media.istockphoto.com/id/1076526844/photo/hand-holding-microphone.jpg?s=612x612&w=0&k=20&c=mhPh4lHbhD-g22ZBvMRmCV3BTdPLGvm-WBausRRKBK8="
    },

    {
      id: 7,
      name: "Art and Culture",
      img: "https://media.istockphoto.com/id/1349066319/photo/three-actresses-in-period-costumes-on-theatre-stage.jpg?s=612x612&w=0&k=20&c=x3sjqNcfGHUuRT58vGFo0Q4pL4Ep3ebBc8Ls520SSbs="
    },

    {
      id: 4,
      name: "Comedy Shows",
      img: "https://media.istockphoto.com/id/923225792/photo/handsome-man-with-microphone.jpg?s=612x612&w=0&k=20&c=YcWRGwKq5zft-wKkZW8IhQDeADxwQWK1BN6R61Gu03A="
    },

    {
      id: 3,
      name: "Workshop",
      img: "https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.jpg?s=612x612&w=0&k=20&c=gCVqR1YvUT6qZhazjpNNGzlpgh_sQQJNzXNsh0ZZEh0="
    },
    {
      id: 2,
      name: "Sports",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2QdxWJhyBFsbhqB12DJvsV0HOEhd6g34yQ&s"
    },
    {
      id: 6,
      name: "Education",
      img: "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE="
    },
    {
      id: 5,
      name: "Festival Shows",
      img: "https://media.istockphoto.com/id/588223710/photo/diwali-oil-lamp.jpg?s=612x612&w=0&k=20&c=Mwl1S6C-CemmHoDPx4kwE8XKNcRRlZLRmKkpdfkM4VU="
    },

    {
      id: 8,
      name: "Resorts",
      img: "https://media.istockphoto.com/id/1446558097/photo/a-rectangular-new-swimming-pool-with-tan-concrete-edges-in-the-fenced-backyard-of-a-new.jpg?s=612x612&w=0&k=20&c=JxPb1SP8xxPAMLyBAyM513sNRa31puOl1vZ-WZ3SXm4="
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="w-full bg-white ">
        <div className="flex items-center justify-center w-full max-w-[1300px] mx-auto">
          <div className="flex w-full flex-col py-6  px-1">
            <div className="relative lg:px-1 md:px-2 px-1  md:pb-6 pb-4">
              <div className="md:pb-8 pb-6 max-md:space-y-4 md:flex items-center gap-4">
                <div className="border  max-w-xl border-black/20 flex items-center gap-2 px-3 w-full h-12 rounded-md ">
                  <Search className="size-7 text-black" />
                  <input
                    type="text"
                    className="w-full h-full px-1  outline-none text-base text-black"
                    placeholder="Search events and experiences"
                  />
                  <div className="p-3 cursor-pointer block">
                    <CgClose size={19} className="text-black" />
                  </div>
                </div>
                {/* Location box   */}
                <div className="w-full flex  gap-3 items-center  ">
                  {/* <div className="md:w-flex-1 md:w-auto w-fit gap-2 cursor-pointer items-center flex  px-3  h-11 border border-black/20 rounded-md">
                    <MapPin className="size-5" />
                    <h1 className="font-medium text-base">Ahemdabad</h1>
                    <ChevronDown size={18} />
                  </div> */}

                  <div className="relative">
                    <div className="md:w-flex-1  md:w-auto w-fit gap-2 cursor-pointer items-center flex  px-4  h-11 border border-black/20  rounded-md">
                      <Funnel size={18} />
                      <h1 className="font-medium  text-base">Filter</h1>
                      <ChevronDown size={18} />
                    </div>
                    <div className=" h-10 w-10 absolute top-"></div>
                  </div>
                </div>
              </div>

              <div className="flex  items-center justify-between pb-2 ">
                <h1 className="text-[25px] md:text-[35px] whitespace-nowrap font-[800]  ">
                  All Events
                </h1>
              </div>

              <div className="w-full flex  md:gap-3 gap-2 overflow-x-auto scrollbar-hide">
                {CategoriesRowData.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0  border-gray-300  border px-2 py-2 text-center text-[15px] cursor-pointer hover:bg-Primary hover:text-white  transition duration-200 flex items-center  delay-100 ease-in-out font-[500]  rounded-full"
                  >
                    <h1 className="px-2.5">{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full md:px-2 px-1  scrollbar-hide  md:grid md:grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <EventCardHome />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-Primary ">
        <Footer />
      </div>
    </div>
  );
}

export default AllEventScreen;
