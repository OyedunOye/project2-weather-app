import React from "react";
import wind from "../assets/windy.png";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiMap } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";

const sideBarMenu = [
  {
    id: 1,
    icon: <TiWeatherPartlySunny />,
    name: "Weather",
  },
  {
    id: 2,
    icon: <TfiMenuAlt />,
    name: "Cities",
  },
  {
    id: 3,
    icon: <CiMap />,
    name: "Map",
  },
  {
    id: 4,
    icon: <VscSettings />,
    name: "Settings",
  },
];

const Sidebar = () => {
  return (
    <nav className="flex flex-col items-center">
      <div className="w-24 m-8 flex box-align-center bg-slate-600 border-none rounded-2xl">
        <img src={wind} alt="wind" className="p-2 cursor-pointer" />
      </div>

      <div className="m-16">
        <ul className="flex flex-col gap-6">
          {sideBarMenu.map((menu) => (
            <li
              key={menu.id}
              className="cursor-pointer flex flex-col items-center gap-2 p-4 hover:bg-slate-500 rounded-2xl"
            >
              <span className="text-2xl">{menu.icon}</span>
              <span>{menu.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  )
};

export default Sidebar;
