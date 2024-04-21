import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/atom";
import { useQuery } from "react-query";
import axios from "axios";
import { ChannelName } from "./ChannelName";
import logo from "../assets/edtech-logo.svg";
export const SidePanel = () => {
  
  const getUser =useAtom(userAtom)[0];
  const {data:Usercoursess} = useQuery(['userCourses'], async () => {
    return (await axios.get(`http://localhost:5000/usercourse/get?userId=`+getUser.id)).data
  })
  console.log(Usercoursess);
  return (
    <>
      <div className="h-screen w-1/6 fixed">
        <a
          href="/"
          className="flex items-center space-x-3 mt-4 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Edtech" />
          <span className="self-center te xt-2xl font-semibold whitespace-nowrap text-black">
            EdTech
          </span>
        </a>
        <div className="mt-10 font-medium text-lg">Courses Enrolled</div>
        {
          Usercoursess?.map((info)=>{
            console.log(info);
            return <ChannelName courseId={info.courseId}/>
          })
        }
      </div>
    </>
  );
};
