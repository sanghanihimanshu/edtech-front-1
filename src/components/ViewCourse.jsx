import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const ViewCourse = () => {
  let { courseId } = useParams();
  console.log(courseId);
  const { isLoading, data:video, error, isError } = useQuery(['courses'], async () => {
    return (await axios.get(`http://localhost:5000/video/get`),{courseId}).data
  })

  function Card({ imageUrl, name, description }) {
    return (
      <div className="w-[450px] rounded overflow-hidden shadow-lg p-5 m-2">
        <img className="w-[400px] h-[275px]" src={imageUrl} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <span className="text-2xl self-center mt-4 font-bold">
        Course Content
      </span>
      <div className="flex flex-wrap justify-center">
        {video?.map((cardData) => (
          <Card key={cardData._id} {...cardData} />
        ))}
      </div>
    </div>
  );
};
