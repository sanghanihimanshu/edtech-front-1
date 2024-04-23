// // import React from "react";
// // import { Replay } from "vimond-replay";
// // import CompoundVideoStreamer from "vimond-replay/video-streamer/compound";
// // export const VideoPlayer = ({ src }) => {
// //   return (
// //     <Replay source={src} initialPlaybackProps={{ isPaused: true }}>
// //       <CompoundVideoStreamer />
// //     </Replay>
// //   ); 
// // };


// import React from "react";
// import { Searchbar } from "./Searchbar";
// import logo from "../assets/edtech-logo.svg";
// import { VideoCardsSm } from "./VideoCardsSm";
// import RadioButton from "./RadioButton";
// import ReactPlayer from "react-player";
// import { useQueryClient,useQuery} from "react-query";
// import axios from "axios";
// import { QuizDisplay } from "./QuizDisplay";
// export const VideoPlayer = ({ src }) => {


//   const QueryClient = useQueryClient()
//   // const { isLoading, data:quizdata, error, isError } = useQuery(['quiz'], async () => {
//   //   return await axios.post(`https://e03f-35-202-28-126.ngrok-free.app/process`,{
//   //       'keyid': "WhatsApp Video 2024-04-21 at 2.04.12 PM",
//   //   })
//   // }, {
//   //   onSuccess: () => {
//   //     console.log(quizdata)
//   //   }
//   // })



//   return (
    
//     <div className="flex flex-row w-full h-full justify-between">
//       <div className="flex w-4/6 flex-col gap-4 overflow-auto">
//         <div className="flex flex-row justify-center items-center">
//           <a href="/" className="flex items-center space-x-3 mt-4 -ms-16 me-24">
//             <img src={logo} className="h-8" alt="Edtech" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
//               EdTech
//             </span>
//           </a>
//           <div className="self-center w-3/5">
//             <Searchbar />
//           </div>
//         </div>
//         <div className="flex flex-row justify-center items-center self-center w-[875px] h-[470px] h-full bg-black">
//           <ReactPlayer
//             url={"https://dyznew8dbds5w.cloudfront.net/WhatsApp Video 2024-04-21 at 2.04.12 PM/output.mpd"}
//             width="835px"
//             height="465px"
//             config={{ file: { forceDASH: true } }}
//             controls={true}
//           />
//         </div>
//         <span className="font-bold text-2xl ms-14 -mb-4">
//           Video Title: The Video Title
//         </span>
//         <span className="text-md ms-14">
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </span>
//         <div className="flex flex-row ms-14 -mt-4">
//           <span className="self-center text-sm text-gray-600">500 Likes</span>
//           <span className="ms-2">&#x2022;</span>
//           <span className="self-center ms-2 text-sm text-gray-600">
//             2 years ago
//           </span>
//         </div>
//         <button
//           className="p-2 text-black bg-gray-200 ms-14 hover:bg-white border-2 rounded-lg w-[130px] h-[45px] -mt-2"
//           onClick={() => {
//             document
//               .getElementById("test")
//               .scrollIntoView({ behavior: "smooth" });
//           }}
//         >
//           Take a quiz!
//         </button>

//         <span
//           className="font-bold text-2xl ms-14 underline underline-offset-2"
//           id="test"
//         >
//           Chapter - 1
//         </span>
//         <span className="ms-14">Each question carries 2 points!</span>
//         <QuizDisplay src={"WhatsApp Video 2024-04-21 at 2.04.12 PM"}/>
//       </div>
//       <div className="w-[550px] flex-col border-none border-r-2 border-black">
//         <div className="mt-10 font-medium text-lg mb-3">
//           Videos from the course
//         </div>
//         <VideoCardsSm />
//         <VideoCardsSm />
//         <VideoCardsSm />
//         <VideoCardsSm />
//         <VideoCardsSm />
//         <VideoCardsSm />
//         <VideoCardsSm />
//       </div>
//     </div>
//   );
// };
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


import React, { useState } from "react";
import { Searchbar } from "./Searchbar";
import logo from "../assets/edtech-logo.svg";
import { VideoCardsSm } from "./VideoCardsSm";
import RadioButton from "./RadioButton";
import ReactPlayer from "react-player";
import { useQueryClient, useQuery } from "react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";





export const VideoPlayer = ({ src }) => {


  


  function handleSubmit(e){
    e.preventDefault()
    console.log(selectedOption)

    console.log(arr)
  }  
  
const {videoId}=useParams()

  console.log(videoId);
  const QueryClient = useQueryClient()
  const { isLoading, data:quizdata, error, isError } = useQuery(['quiz'], async () => {
      return await axios.post("https://fa90-35-238-231-109.ngrok-free.app/process",{
        'keyid': videoId,
        'name':'sarthak'
    })
  }, {
      onSuccess: (data) => {
          console.log(data.data)
        }
      })
      
      if (isLoading) {
        
          return <h1>Loading please wait</h1>
        }
        if (isError) {
            return (<h1>{error.message}</h1>)
          }
  const quizz =quizdata.data
  


  const handleOptionChange = (event) => {
    console.log(event.target.value);
  };


  const quizzdata = Object.entries(quizz).map(([question, answers]) => 
  {


    const uniqueArray = [...new Set(answers)];
   return  (

      <>
        <span className="text-lg font-medium ms-14">
          {question}
        </span>
        <div className="ms-14">
          <RadioButton props={uniqueArray} handleOptionChange={handleOptionChange}  />
        </div>
      </>
    )
  });







  return (

    <div className="flex flex-row w-full h-full justify-between">
      <div className="flex w-4/6 flex-col gap-4 overflow-auto">
        <div className="flex flex-row justify-center items-center">
          <Link to="/" className="flex items-center space-x-3 mt-4 -ms-16 me-24">
            <img src={logo} className="h-8" alt="Edtech" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              EdTech
            </span>
          </Link>
          <div className="self-center w-3/5">
            <Searchbar />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center self-center w-[875px] h-[470px] h-full bg-black">
          <ReactPlayer
           url={`https://dyznew8dbds5w.cloudfront.net/${videoId}/output.mpd`}
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

       <form onSubmit={(e)=>handleSubmit(e)}>

        {quizzdata}
        <button type="submit" onClick={handleSubmit} className="p-2 text-black bg-white ms-14 hover:bg-gray-200 border-2 rounded-lg w-[130px] h-[45px] -mt-2 mb-3">
          Submit
        </button>
       </form>
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
