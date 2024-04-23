import React from "react";
import logo from "../assets/edtech-logo.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
export const ChannelName = ({ courseId }) => {
    const navigate = useNavigate();
    const { isLoading, data: courses, error, isError } = useQuery(['courses', courseId], async () => {
      return (await axios.get(`http://localhost:5000/course/get/` + courseId)).data;
    });
console.log(courses);
    return (
      <>
        <div className="flex flex-row mt-4 mb-3 cursor-pointer" onClick={() => navigate("/" + courseId)}>
          <img
            src={logo}
            className="self-center rounded-full w-[25px] h-[25px]"
            alt="profile"
          />
          <span className="self-center ms-2 text-sm text-gray-600">
            {isLoading ? <h1>loading</h1> : courses[0] && courses[0].name}
          </span>
        </div>
      </>
    );
  }