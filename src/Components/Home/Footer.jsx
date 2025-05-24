import { Facebook, Instagram, Layers, Ticket, YoutubeIcon } from "lucide-react";
import React from "react";
import { CategoriesRowData } from "../../Constants/CategoriesRow";

function Footer() {
  const companyData = [
    {
      id: 1,
      title: "About Us"
    },
    {
      id: 2,
      title: "Contact Us"
    },
    {
      id: 3,
      title: "Terms & Conditions"
    },
    {
      id: 4,
      title: "Privacy Policy"
    },
    {
      id: 5,
      title: "Refund Policy"
    }
  ];

  const Socials = [
    {
      name: "Instagram",
      icon: <Instagram />
    },
    {
      name: "facebook",
      icon: <Facebook />
    },
    {
      name: "Youtube",
      icon: <YoutubeIcon />
    }
  ];
  return (
    <div className="w-full bg-Primary">
      <div className=" w-full bg-Primary max-w-[1300px] mx-auto">
        <div className="md:flex flex-1 py-8 ">
          <div className="px-2 flex-1">
            <h2 className="text-2xl flex items-center bg-gradient-to-r from-white to-purple-400 text-clip bg-clip-text text gap-2 font-bold text-purple-400">
              <Ticket className="-rotate-45" />
              StagePass
            </h2>
            <p className="text-gray-400 ps-1 mt-2 max-w-xs">
              Your gateway to unforgettable live experiences
            </p>
          </div>

          <div className="md:px-6 px-4 flex max-md:mt-8 max-w-2xl flex-wrap justify-between  md:gap-24 gap-5 ">
            <div>
              <h1 className="font-[600] text-xl text-white pb-2">Website</h1>
              {CategoriesRowData.map((item, index) => (
                <div className="text-gray-400 hover:text-purple-400 cursor-pointer line-clamp-1 mb-1.5 text-sm">
                  {item.name}
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-[600] text-xl text-white pb-2">Company</h1>
              {companyData.map((item, index) => (
                <div className="text-gray-400 hover:text-purple-400 cursor-pointer line-clamp-1 mb-1.5 text-sm">
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-[600] text-xl  text-white pb-2">Socials</h1>
              <div className="space-y-3">
                {Socials.map((item, index) => (
                  <div className="text-gray-400 items-center  hover:text-purple-400 flex gap-3  cursor-pointer  line-clamp-1 mb-1.5 text-sm">
                    {item.icon}
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <hr className="  w-full border-t border-dashed border-gray-400" />
          <h3 className="text-gray-400 mx-auto md:py-5 py-4 px-4 text-xs  text-center w-full flex flex-wrap">
            By accessing this page, you confirm that you have read, understood,
            and agreed to our Terms of Service, Cookie Policy, Privacy Policy,
            and Content Guidelines. All rights reserved.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
