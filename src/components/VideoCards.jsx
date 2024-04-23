import React from "react";
import home from "../assets/home-illustration.svg";
import logo from "../assets/edtech-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { userAtom } from "../atoms/atom";
import { useAtom } from "jotai";

export const VideoCards = ({name,description,username,courseId}) => {
  const navigate =useNavigate();
  const getUser = useAtom(userAtom)[0]
  const queryclient = useQueryClient();
  const NewCourse = useMutation(
    async ({ courseId, userId}) => {
      const response = await axios.post("http://localhost:5000/usercourse/new", { courseId, userId });
      return response.data;
    },
    {
      onSuccess: () => {
      alert('Successfully enrolled');
      queryclient.invalidateQueries(['userCourses'])
       navigate('/'+courseId);
     
      },
      onError: (error) => {
        alert('Error logging in:', error.message);
      },
    }
  );
 
  const handlesubmit = (courseId) => {
    NewCourse.mutate({courseId,userId:getUser.id})
  }
  return (
    <div className="flex flex-col items-center h-[275px] bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[1200px]">
      <img
        className="object-cover rounded-t-lg md:h-[250px] md:w-[400px] border-2 border-gray-100 rounded-lg ms-4"
        src={home}
        alt="textfile"
      />
      <div className="flex flex-col h-full content-start p-6 leading-normal">
        <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900">
          {name}
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
            {username}
          </span>
        </div>
        <p class="mt-3 text-sm text-gray-700">
         {description}
        </p>
        <div className="flex flex-row">
          <Link to={"/"+courseId}>
            <button className="mt-3 me-3 w-[150px] h-[35px] border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:border-gray-700">
              View Course
            </button>
          </Link>
          <button className="mt-3 w-[150px] h-[35px] border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:border-gray-700" onClick={()=>handlesubmit(courseId)}>
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  );
};
