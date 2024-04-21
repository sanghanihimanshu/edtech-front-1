import React from "react";
import search from "../assets/mglass.png";

export const Searchbar = () => {
  return (
    <div className="flex flex-row items-center mt-2 h-[75px] bg-white w-[700px] self-center">
      <div className="flex flex-row h-2/3 w-5/6 content-start leading-normal border-2 border-r-0 rounded-l-full">
        <input
          type="text"
          id="search"
          className="bg-white text-gray-900 text-sm block w-full ms-5 h-[45px] focus:outline-none placeholder-gray-400 text-white focus:border-none"
          placeholder="Search"
          required
        />
      </div>
      <div className="bg-gray-300 h-2/3 w-[75px] border-2 border-l-0 rounded-r-full flex justify-center cursor-pointer">
        <img src={search} className="h-[27px] self-center" alt="search" />
      </div>
    </div>
  );
};
