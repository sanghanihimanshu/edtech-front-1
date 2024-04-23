import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import thumbnail from "../assets/thumbnail.webp"
export const ViewCourse = () => {
  let { courseId } = useParams();
  const { isLoading, data: video, error, isError } = useQuery(['video', courseId], async () => {
    return (await axios.post(`http://localhost:5000/video/get`, { coursesId:courseId })).data;
  });

  function Card({ imageUrl, name, description }) {
    return (
      <div className="w-[450px] rounded overflow-hidden shadow-lg p-5 m-2">
        <img className="w-[400px] h-[275px]" src={thumbnail} alt={name} />
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
        {isLoading ? (
          <>loading</>
        ) : isError ? (
          <>Error: {error.message}</>
        ) : Array.isArray(video) ? (
          video.map((cardData) => (
            <Link key={cardData._id} to={"/video/"+cardData._id}>
              <Card {...cardData} />
            </Link>
          ))
        ) : (
          <>No video data available</>
        )}
      </div>
    </div>
  );
};
