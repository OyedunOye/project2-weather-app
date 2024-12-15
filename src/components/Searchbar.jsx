import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <form className="w-full relative">
      <input
        type="text"
        className="w-full py-2 px-6 bg-slate-800 rounded-[10px] border-none outline-none"
        placeholder="Search city...."
      />

      <button className="absolute h-5 w-5 right-6 top-1/2 -translate-y-1/2">
        <FaSearch className="w-full h-full opacity-80 hover:opacity-100" />
      </button>
    </form>
  );
};

export default Searchbar;
