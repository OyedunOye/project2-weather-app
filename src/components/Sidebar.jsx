import React from "react";
import wind from "../assets/windy.png";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiMap } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";

const sideBarMenu = [
  {
    id: 1,
    icon: TiWeatherPartlySunny,
    name: "Weather",
  },
  {
    id: 2,
    icon: TfiMenuAlt,
    name: "Cities",
  },
  {
    id: 3,
    icon: CiMap,
    name: "Map",
  },
  {
    id: 4,
    icon: VscSettings,
    name: "Settings",
  },
];

const Sidebar = () => {
  return (
    <nav className="flex flex-col items-center">
      <div className="w-14 h-14 m-8 flex box-align-center bg-slate-600 border-none rounded-2xl">
        <img src={wind} alt="wind" className="p-2 object-cover h-full w-full cursor-pointer" />
      </div>

      <div className="m-8">
        <ul className="flex flex-col gap-6">
          {sideBarMenu.map((menu) => (
            <li
              key={menu.id}
              className="cursor-pointer flex flex-col items-center gap-1 p-2 hover:bg-slate-500 rounded-2xl"
            >
          
              {<menu.icon className="w-5 h-5" />}
              <p className="text-sm">{menu.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  )
};

export default Sidebar;
