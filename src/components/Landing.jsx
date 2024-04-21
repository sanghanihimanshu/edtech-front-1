import React from "react";
import img1 from "../assets/home-illustration.svg";
export const Landing = () => {
  return (
    <>
      <div className="flex w-screen h-full justify-center items-center sm:mt-20">
        <div className="flex flex-col sm:flex-row w-3/4 justify-center items-center">
          <div className="flex w-full sm:w-1/2 text-[24px] sm:text-[44px] flex-col">
            <div className="flex font-bold flex-col">
              Crack your goal with
              <span> India’s top educators</span>
            </div>
            <span className="text-[12px] sm:text-sm font-medium mt-2">
              Over <span className="text-green-500"> 10 crore</span> learners
              trust us for their preparation
            </span>
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 mt-5 w-2/3 sm:w-[480px] text-sm font-medium text-white-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700"
            >
              Join for Free
            </button>
          </div>
          <div className="hidden sw-2/3 sm:block w-1/2">
            <img src={img1} alt="Landing" />
          </div>
        </div>
      </div>
    </>
  );
};
