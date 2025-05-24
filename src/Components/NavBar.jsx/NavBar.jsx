import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Drama,
  MapPin,
  MenuIcon,
  Plus,
  Ticket,
  User,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const menuRef = useRef(null); // ref for outside click detection

  const Menuitem = [
    {
      title: "All Events",
      icon: <Drama size={22} />,
      navigate: "/allevents"
    },
    {
      title: "List Your Event",
      icon: <Plus size={23} />,
      navigate: "/listyourevent"
    },
    {
      title: "My Tickets",
      icon: <Ticket className="-rotate-45" size={20} />
    },
    {
      title: "User",
      icon: <User size={20} />,
      navigate: "/profile"
    }
  ];

  const handleClick = (item) => {
    if (item.navigate) {
      navigation(item.navigate);
    }
    setmenuOpen(false);
  };

  // ✅ Detect outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full md:sticky top-0 left-0 z-50 items-center flex md:px-5 px-3 justify-between h-16 bg-Primary">
      <div className="flex w-full max-w-[1290px] mx-auto justify-between items-center">
        <div
          onClick={() => navigation("/")}
          className="cursor-pointer hover:text-[21px] transition-all duration-200 ease-in-out items-center flex gap-2 text-Bg2 font-semibold text-xl uppercase"
        >
          <Ticket className="-rotate-45 text-white" /> Stage Pass
        </div>
        <div className="relative">
          <div className="flex gap-4 md:hidden items-center" ref={menuRef}>
            <div className="text-white max-w-[7rem] flex gap-1 items-center cursor-pointer p-[7px] bg-Primary2 border border-Border rounded text-sm">
              <MapPin size={16} />
              <h6 className="line-clamp-1 overflow-hidden whitespace-nowrap text-ellipsis font-[500]">
                Ahmedabad
              </h6>
              <ChevronDown size={13} />
            </div>
            <div
              onClick={() => setmenuOpen((prev) => !prev)}
              className="bg-Primary2 cursor-pointer border-Border border p-1.5 rounded"
            >
              {menuOpen ? (
                <X size={22} className="text-white" />
              ) : (
                <MenuIcon size={22} className="text-white" />
              )}
            </div>
            {/* Menu items */}
            {menuOpen && (
              <div className="bg-[#fdfdfd] shadow-xl border-2 z-50 md:hidden flex rounded-lg absolute top-11 right-2">
                <ul className="flex flex-col max-w-[200px]">
                  {Menuitem.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleClick(item)}
                      className="flex w-[210px] hover:font-semibold font-[400] cursor-pointer py-3 gap-3 px-3 p-2"
                    >
                      {item.icon}
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="text-Bg2 flex max-md:hidden gap-4 font-medium">
            <li
              onClick={() => navigation("/allevents")}
              className="border-2 border-Border py-2 px-3 rounded flex items-center cursor-pointer gap-1.5 transition-all duration-300 ease-in-out hover:bg-Primary2 text-sm"
            >
              <Drama size={19} />
              All Events
            </li>
            <li className="border-2 border-Border py-2 px-3 rounded flex items-center cursor-pointer gap-1.5 transition-all duration-300 ease-in-out hover:bg-Primary2 text-sm">
              <Plus size={19} />
              List Your Event
            </li>
            <li className="border-2 border-Border py-2 px-3 rounded flex items-center cursor-pointer gap-1.5 transition-all duration-300 ease-in-out hover:bg-Primary2 text-sm">
              <MapPin size={17} />
              Ahmedabad
            </li>
            <li
              onClick={() => navigation("/profile")}
              className="border-2 border-Border p-2 rounded-full flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-Primary2 text-sm"
            >
              <User size={20} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
