import React, { useState } from "react";

export const CourseCreate = () => {
  const [cname, setCname] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let arr = tags.split(" ");
    window.alert("Course Created Successfully");
    setCname("");
    setDescription("");
    setTags("");
  };
  return (
    <>
      <div className="flex w-screen h-screen justify-center flex-col">
        <span className="self-center mb-5 font-bold text-3xl">
          Create Course
        </span>
        <div className="flex flex-col items-center h-[500px] bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[600px] self-center">
          <form className="flex flex-col h-full w-full content-start p-8 leading-normal">
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
            <button
              type="button"
              onClick={handleSubmit}
              className={`border-2 mt-2 rounded-lg p-2 hover:bg-gray-300`}
            >
              Save Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
