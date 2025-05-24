import React, { useEffect, useState } from "react";

import {
  CalendarIcon,
  Clock,
  Hourglass,
  MapPin,
  Ticket,
  ChevronUp,
  ChevronDown
} from "lucide-react";

import BottomTabBar from "../Components/EventDetail/BottomTabBar";
import HeighlightBox from "../Components/EventDetail/HeighlightBox";
import HorizontalDivider from "../Components/Utils/HorizontalDivider";
import LabelText from "../Components/EventDetail/LabelText";
import NavBar from "../Components/NavBar.jsx/NavBar";
import Footer from "../Components/Home/Footer";

function EventDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showMoreDetails, setShowMoreDetails] = useState(false);
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
      title: "Spinner Film City, Hyderabad"
    },
    {
      icons: <Ticket size={20} />,
      title: "Starting at INR 999"
    }
  ];

  const terms = [
    "For every 2 tickets get 1 jersey free. Offer valid until stocks last.",
    "This ticket entitles the holder (“Holder”) to attend the stadium in respect of the match, details of which are referred to on the ticket (“Stadium” and “Match” respectively).",
    "The entry gates will open approximately 3 (three) hours before the start of the Match or such other time as may be advised / published in respect of the Match, by the BOCCI.",
    "Entry will be refused if the barcode has been tampered with or if the ticket has been defaced, damaged or tampered with in any way.",
    "Each entry ticket is valid for one person only and no re-entry will be allowed.",
    "The ticket only entitles the Holder to access the area of the Stadium in which the relevant seat is located and no other area of the Stadium.",
    "The organizer of the Match (“Organizer”) reserves the right to search / frisk the Holder at any time for security reasons.  "
  ];

  return (
    <div className="min-h-screen pb-10 w-full flex flex-col  bg-white">
      <div className="bg-white  max-w-[1330px] mx-auto w-full flex-1 ">
        <div className="md:pt-5 md:px-5">
          <div className="md:rounded-xl md:border overflow-hidden relative max-h-[500px] lg:h-[460px]">
            {/* Blurred Background Image */}
            <img
              src="https://cdn2.allevents.in/thumbs/thumb67eb919b98b96.jpg"
              alt="blurred"
              className="w-full h-full max-md:max-h-80 object-cover blur-[5px] brightness-50"
            />
            {/* Centered Sharp Image */}
            <div className="absolute py-1 inset-0 flex items-center justify-center">
              <img
                src="https://cdn2.allevents.in/thumbs/thumb67eb919b98b96.jpg"
                alt="sharp"
                className=" h-full max-md:max-h-80  object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative  flex flex-col">
          {/* Main Container  */}
          <div className="lg:pt-5 space-x-4  pb-16 pt-1.5 md:px-5  flex flex-col lg:flex-row gap-5">
            {/* Title and details Container  */}
            <div className="md:flex-[2]    ">
              {/* Title  */}
              <div className="lg:pb-4 max-md:px-3  md:pb-2 pb-3 rounded-md  border-black/15 w-full flex-1">
                <h1 className="font-semibold text-black/90 xl:text-[30px] md:text-[26px] text-[22px] leading-[30px] lg:leading-[42px] md:leading-[36px] ">
                  Mass Appeal Presents: The World Reunion – A Charity Concert.
                </h1>
              </div>

              {/* Highlight Mobile  */}
              <div className="py-2.5 max-md:px-3   lg:hidden">
                <LabelText title={"Highlights"} />
                {heighLists.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 leading-[160%] items-center py-2"
                  >
                    <span className="text-black/75">{item.icons}</span>
                    <p className="text-[#45474D] leading-[130%]  text-md font-[400]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <HorizontalDivider />
              {/* About event Area   */}
              <div className="py-3 max-md:px-3 ">
                <LabelText title={"About Event "} />
                <p
                  className={`text-[#45474D]  ${
                    showMoreDetails ? "line-clamp-none" : "line-clamp-4"
                  } leading-6 text-md font-[400]`}
                >
                  The Risers are taking over Hyderabad and you know what that
                  means. Abhishek Sharma’s explosive strokes, Shami’s fiery
                  spells, and Nitish Kumar Reddy’s clutch moments will turn the
                  stadium into the ultimate experience. Punjab Kings have their
                  big guns too. Shreyas Iyer's experience and Shashank Singh’s
                  fearless hitting can flip the script. But with the crowd on
                  SRH’s side, every six and every wicket will hit harder. SRH is
                  gonna make this one count on the home turf.
                </p>
                <div className="items-center flex gap-1 pt-1">
                  <h1
                    onClick={() => setShowMoreDetails((prev) => !prev)}
                    className="rounded-md cursor-pointer font-[600] inline-block text-sm text-Primary hover:underline"
                  >
                    {showMoreDetails ? "Read Less" : "Read more"}
                  </h1>
                  {showMoreDetails ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
              </div>

              <HorizontalDivider />
              {/* Venue location */}
              <div className="py-3 pb-4 max-md:px-3 ">
                <LabelText title={"Location"} />
                <div className="flex-2 w-full">
                  <h1 className="text-base  text-black/70">
                    Khand, C.B.Patel Cricket Stadium Parking
                  </h1>
                  <div className="flex w-full justify-between md:flex-row flex-col  ">
                    <h4 className="text-[#45474D] line-clamp-3 max-md:leading-5 pb-2 leading-6 text-sm font-[400] flex-1 pr-10">
                      4QFH+7GR, C.B. Patel Rd, Surat, Abba, Gujarat 395007
                    </h4>
                  </div>
                  <iframe
                    title="Google Map Location"
                    className=" md:h-64  h-48 max-md:mt-2 mt-2 rounded-md  w-full border-2 p-1"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Stadium+Road+Motera,+Sabarmati,+Ahmedabad,+Gujarat+380005&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <HorizontalDivider />
              {/* refund Policy  */}
              <div className="py-4 max-md:px-3 ">
                <LabelText title={"Refund Policy"} />
                <p className="text-[#45474D] leading-6 text-md font-[400]">
                  If event is cancelled or Postponed lorem20, then only refund.
                </p>
              </div>

              {/* Terms and condition  */}
              <HorizontalDivider />
              <div className="max-md:px-3 py-5">
                <LabelText title={"Terms And Condition"} />
                <div>
                  <ul className="space-y-3 text-[#45474D] list-disc px-5  pt-2">
                    {terms.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Highlight area  */}
            <>
              <HeighlightBox />
            </>
          </div>
          {/* BottomTab Bar  */}
          <>
            <BottomTabBar />
          </>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
