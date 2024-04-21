import React from "react";
import home from "../assets/home-illustration.svg";
import logo from "../assets/edtech-logo.svg";
import { Link } from "react-router-dom";

export const VideoCards = () => {
  return (
    <div className="flex flex-col items-center h-[275px] bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[1200px]">
      <img
        className="object-cover rounded-t-lg md:h-[250px] md:w-[400px] border-2 border-gray-100 rounded-lg ms-4"
        src={home}
        alt="textfile"
      />
      <div className="flex flex-col h-full content-start p-6 leading-normal">
        <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>

        <div className="flex flex-row">
          <span className="self-center text-sm text-gray-600">500 Likes</span>
          <span className="ms-2">&#x2022;</span>
          <span className="self-center ms-2 text-sm text-gray-600">
            2 years ago
          </span>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src={logo}
            className="self-center rounded-full w-[25px] h-[25px]"
            alt="profile"
          />
          <span className="self-center ms-2 text-sm text-gray-600">
            CodeWithRaees
          </span>
        </div>
        <p class="mt-3 text-sm text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex flex-row">
          <Link to="/viewCourse">
          
          </Link>
          <button className="mt-3 w-[150px] h-[35px] border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:border-gray-700">
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  );
};
