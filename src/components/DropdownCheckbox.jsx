import React, { useState } from "react";

export const DropdownCheckbox = ({ courses, setCourses, getcourses }) => {
  const [val, setVal] = useState("hidden");

  const handleClick = () => {
    if (val === "hidden") {
      setVal("block");
    } else {
      setVal("hidden");
    }
  };
  return (
    <>
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="text-black absolute top-[480px] mt-5 mb-2 w-[250px] bg-gray-300 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={handleClick}
      >
        {courses?.length === 0 ? "Select Course" : "Courses Selected"}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDefaultCheckbox"
        className={`z-10 ${val} absolute top-[550px] w-48 bg-white divide-y divide-gray-100 rounded-lg shadow bg-white dark:divide-gray-600`}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          {
            courses?.map((info) => (<li>
              <div className="flex items-center cursor-pointer">
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  value="Course 1"
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 bg-white border-gray-500"
                  onChange={(e) => {
                    setCourses(info._id);
                    // console.log(courses);
                  }}
                  checked={info._id==getcourses}
                />
                <label
                  htmlFor="checkbox-item-1"
                  className="ms-2 text-sm font-medium text-black"
                >
                  {info.name}
                </label>
              </div></li>))
          }
        </ul>
      </div>
    </>
  );
};
