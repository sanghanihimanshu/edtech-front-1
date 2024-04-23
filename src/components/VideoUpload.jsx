import React, { useState } from "react";
import { DropdownCheckbox } from "./DropdownCheckbox";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { userAtom } from "../atoms/atom";
import { useAtom } from "jotai";
import axios from "axios";

export const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [allowed, setAllowed] = useState("cursor-not-allowed");
  const [cname, setCname] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState('');
  const getUser = useAtom(userAtom)[0];
  const { data: Usercoursess } = useQuery(['getSourceCourses'], async () => {
    return (await axios.get(`http://localhost:5000/course/get/` + getUser.username)).data
  }, {
    onSuccess: (data) => {
      setCourses(data[0]._id)
    }
  })

  const addCourse = (courseData) => {
    return axios.post('http://localhost:5000/video/new', courseData)
  }
  const client = useQueryClient();


  const mut = useMutation(addCourse, {
    onError: (e) => {
      alert("wrong input value", e.message)
    },
    onSuccess: (data) => {
      alert("added sucessful")
    }
  })

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setAllowed("");
  };
  const { mutate, isLoading } = useMutation(async (data) => (await axios.put(preSignedUrl, formData, {
    headers: {
      'Content-Type': 'video/mp4',
    },
    onUploadProgress: (progressEvent) => {
      const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      console.log(`Upload Progress: ${percentage}%`);
    },
  })).data, {
    onError: async (e) => {
      alert("wrong input value", e.message)
      await axios.post('http://localhost:5000/video/process',{videoId:mut.data.data.video.id}).then(()=>{console.log("processed")})
    },
    onSuccess: (data) => {
      alert("added sucessful")
    }
  })

  const handleSubmit = async (event) => {

    event.preventDefault();
    let arr = tags.split(" ");

    const videoData = {
      name: cname,
      tags: arr,
      description: description,
      coursesId: courses,
    }
    mut.mutate(
      videoData
    )
    console.log(mut.data.data);
    const formData = new FormData();
    formData.append('file', selectedFile,mut.data.data.video.id+'.mp4');
    console.log("uploding file");
    mutate(mut.data.data.video.url)
    console.log("fileuplodad");
    
    // console.log(cname);
    // console.log(arr);
    setCname("");
    setDescription("");
    setTags("");
    setSelectedFile(null);
    setCourses(new Set([]));
  };
  return (
    <>
      <div className="flex w-screen h-screen justify-center flex-col">
        <span className="self-center mb-5 font-bold text-3xl">
          Upload Video
        </span>
        <div className="flex flex-col items-center h-[500px] bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[600px] self-center">
          <div className="flex flex-col h-full w-full content-start p-8 leading-normal">
            <input
              className="bg-white border-2 rounded-lg p-2 border-b-2 text-gray-900 text-sm block w-full h-[45px] placeholder-gray-400 text-black focus:outline-none"
              type="text"
              placeholder="Title"
              id="title"
              value={cname}
              onChange={(e) => {
                setCname(e.target.value);
              }}
            />
            <textarea
              className="bg-white mt-4 border-2 rounded-lg p-2 border-b-2 text-gray-900 text-sm block w-full h-[100px] placeholder-gray-400 text-black focus:outline-none resize-none"
              type="text"
              placeholder="Tags (Separated by Space)"
              id="tags"
              value={tags}
              onChange={(e) => {
                setTags(e.target.value);
              }}
            />
            <textarea
              className="bg-white mt-4 border-2 rounded-lg p-2 border-b-2 text-gray-900 text-sm block w-full h-[150px] placeholder-gray-400 text-black focus:outline-none resize-none"
              type="text"
              placeholder="Description"
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <DropdownCheckbox courses={Usercoursess} setCourses={setCourses} getcourses={courses} />
            <form
              onSubmit={handleSubmit}
              className="mt-20 flex flex-row justify-between"
            >
              <input type="file" onChange={handleFileChange} />
              <button
                type="submit"
                className={`border-2 rounded-lg p-2 ${allowed}`}
                disabled={isLoading}
                onClick={(e) => handleSubmit(e)}
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};