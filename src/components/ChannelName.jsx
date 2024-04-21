import React from "react";
import logo from "../assets/edtech-logo.svg";
export const ChannelName = () => {
  return (
    <>
      <div className="flex flex-row mt-4 mb-3 cursor-pointer">
        <img
          src={logo}
          className="self-center rounded-full w-[25px] h-[25px]"
          alt="profile"
        />
        <span className="self-center ms-2 text-sm text-gray-600">
          CodeWithRaees
        </span>
      </div>
    </>
  );
};
