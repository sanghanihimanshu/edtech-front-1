import React from "react";
import { VideoCards } from "../components/VideoCards";
import { Searchbar } from "../components/Searchbar";
import { SidePanel } from "../components/SidePanel";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/atom";
import { useQuery } from "react-query";
import axios from "axios";

export const Hero = () => {

  const getUser =useAtom(userAtom)[0];
  const { isLoading, data:coursess, error, isError } = useQuery(['courses'], async () => {
    return (await axios.get(`http://localhost:5000/course/get`)).data
  })
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/6 p-3 pt-2 overflow-auto">
          <SidePanel />
        </div>
        <div className="flex w-5/6 flex-col gap-4 overflow-auto">
          <div className="flex flex-row justify-center items-center">
            <div className="self-center w-3/4">
              <Searchbar />
            </div>
            <span className="self-center font-bold text-xl cursor-pointer hover:underline underline-offset-2 ms-20">
              Logout
            </span>
          </div>
          {
            coursess?.map((info)=>{
              return <VideoCards name={info.name} description={info.description} username={info.username} courseId={info._id}/>
            })
          }
        </div>
      </div>
    </>
  );
};
