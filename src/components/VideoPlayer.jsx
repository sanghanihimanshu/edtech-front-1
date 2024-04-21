// import React from "react";
// import { Replay } from "vimond-replay";
// import CompoundVideoStreamer from "vimond-replay/video-streamer/compound";
// export const VideoPlayer = ({ src }) => {
//   return (
//     <Replay source={src} initialPlaybackProps={{ isPaused: true }}>
//       <CompoundVideoStreamer />
//     </Replay>
//   ); 
// };


import React from "react";
import { Searchbar } from "./Searchbar";
import logo from "../assets/edtech-logo.svg";
import { VideoCardsSm } from "./VideoCardsSm";
import RadioButton from "./RadioButton";
import ReactPlayer from "react-player";
import { useQueryClient,useQuery} from "react-query";
import axios from "axios";
export const VideoPlayer = ({ src }) => {


  const QueryClient = useQueryClient()
  const { isLoading, data:quizdata, error, isError } = useQuery(['quiz'], async () => {
    return await axios.post(`https://3ee8-34-16-230-37.ngrok-free.app/process`,{
        'keyid': "java",
    })
  }, {
    onSuccess: () => {
      console.log(quizdata)
    }
  })

  if (isLoading) {

    return <h1>Loading please wait</h1>
  }
  if (isError) {
    return (<h1>{error.message}</h1>)
  }



  return (
    
    <div className="flex flex-row w-full h-full justify-between">
      <div className="flex w-4/6 flex-col gap-4 overflow-auto">
        <div className="flex flex-row justify-center items-center">
          <a href="/" className="flex items-center space-x-3 mt-4 -ms-16 me-24">
            <img src={logo} className="h-8" alt="Edtech" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              EdTech
            </span>
          </a>
          <div className="self-center w-3/5">
            <Searchbar />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center self-center w-[875px] h-[470px] h-full bg-black">
          <ReactPlayer
            url={src}
            width="835px"
            height="465px"
            config={{ file: { forceDASH: true } }}
            controls={true}
          />
        </div>
        <span className="font-bold text-2xl ms-14 -mb-4">
          Video Title: The Video Title
        </span>
        <span className="text-md ms-14">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </span>
        <div className="flex flex-row ms-14 -mt-4">
          <span className="self-center text-sm text-gray-600">500 Likes</span>
          <span className="ms-2">&#x2022;</span>
          <span className="self-center ms-2 text-sm text-gray-600">
            2 years ago
          </span>
        </div>
        <button
          className="p-2 text-black bg-gray-200 ms-14 hover:bg-white border-2 rounded-lg w-[130px] h-[45px] -mt-2"
          onClick={() => {
            document
              .getElementById("test")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Take a quiz!
        </button>

        <span
          className="font-bold text-2xl ms-14 underline underline-offset-2"
          id="test"
        >
          Chapter - 1
        </span>
        <span className="text-lg font-medium ms-14">
          1. This is the first question?
        </span>
        <div className="ms-14">
          <RadioButton />
        </div>
        <span className="text-lg font-medium ms-14">
          2. This is the first question?
        </span>
        <div className="ms-14">
          <RadioButton />
        </div>
        <span className="text-lg font-medium ms-14">
          3. This is the first question?
        </span>
        <div className="ms-14">
          <RadioButton />
        </div>
        <span className="text-lg font-medium ms-14">
          4. This is the first question?
        </span>
        <div className="ms-14">
          <RadioButton />
        </div>
        <span className="text-lg font-medium ms-14">
          5. This is the first question?
        </span>
        <div className="ms-14">
          <RadioButton />
        </div>
        <button className="p-2 text-black bg-white ms-14 hover:bg-gray-200 border-2 rounded-lg w-[130px] h-[45px] -mt-2 mb-3">
          Submit
        </button>
      </div>
      <div className="w-[550px] flex-col border-none border-r-2 border-black">
        <div className="mt-10 font-medium text-lg mb-3">
          Videos from the course
        </div>
        <VideoCardsSm />
        <VideoCardsSm />
        <VideoCardsSm />
        <VideoCardsSm />
        <VideoCardsSm />
        <VideoCardsSm />
        <VideoCardsSm />
      </div>
    </div>
  );
};
