import React, { useState } from "react";
import { DropdownCheckbox } from "./DropdownCheckbox";

export const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [allowed, setAllowed] = useState("cursor-not-allowed");
  const [cname, setCname] = useState("");
  const [tags, setTags] = useState("");
  const [courses, setCourses] = useState(new Set([]));
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setAllowed("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // let arr = tags.split(" ");
    window.alert("Course Created Successfully");
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
              className="bg-white border-2 rounded-lg p-2 border-b-2 text-gray-900 text-sm block w-full h-[45px] placeholder-gray-400 text-white focus:outline-none"
              type="text"
              placeholder="Title"
              id="title"
              value={cname}
              onChange={(e) => {
                setCname(e.target.value);
              }}
            />
            <textarea
              className="bg-white mt-4 border-2 rounded-lg p-2 border-b-2 text-gray-900 text-sm block w-full h-[100px] placeholder-gray-400 text-white focus:outline-none resize-none"
              type="text"
              placeholder="Tags (Separated by Space)"
              id="tags"
              value={tags}
              onChange={(e) => {
                setTags(e.target.value);
              }}
            />
            <textarea
              className="bg-white mt-4 border-2 rounded-lg p-2 border-b-2 text-gray-900 text-sm block w-full h-[150px] placeholder-gray-400 text-white focus:outline-none resize-none"
              type="text"
              placeholder="Description"
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <DropdownCheckbox courses={courses} setCourses={setCourses} />
            <form
              onSubmit={handleSubmit}
              className="mt-20 flex flex-row justify-between"
            >
              <input type="file" onChange={handleFileChange} />
              <button
                type="submit"
                className={`border-2 rounded-lg p-2 ${allowed}`}
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
