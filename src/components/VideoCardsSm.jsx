import home from "../assets/home-illustration.svg";
import logo from "../assets/edtech-logo.svg";
import React from "react";
import { Link } from "react-router-dom";

export const VideoCardsSm = () => {
  return (
    <>
      <Link
        href="/"
        className="flex flex-col items-center h-[125px] bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[510px] hover:bg-gray-100 mb-3"
      >
        <img
          className="object-cover rounded-t-lg md:h-[115px] md:w-[200px] border-2 border-transparent rounded-lg ms-1 me-2 p-1"
          src={home}
          alt="textfile"
        />
        <div className="flex flex-col mt-1 h-full content-start leading-normal">
          <h5 className=" text-sm font-sm tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>

          <div className="flex flex-row">
            <span className="self-center text-sm text-gray-600">500 Likes</span>
            <span className="ms-2">&#x2022;</span>
            <span className="self-center ms-2 text-sm text-gray-600">
              2 years ago
            </span>
          </div>
          <p class="mt-1 text-xs text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </Link>
    </>
  );
};
