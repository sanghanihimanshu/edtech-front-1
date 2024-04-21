import React, { useState } from "react";
import home from "../assets/home-illustration.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";

export const Register = () => {
  const [uname, setUname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [tutor, setTutor] = useState(false);
  const navigate =useNavigate();
  const registerMutation = useMutation(
    async ({ email, password, username ,name , isTutor }) => {
      const response = await axios.post("http://localhost:5000/auth/register", { email, password ,username,name,isTutor});
      return response.data;
    },
    {
      onSuccess: (data) => {
        alert(data.message);
       navigate('/login');
     
      },
      onError: (error) => {
        alert('Error logging in:', error.message);
      },
    }
  );
  const handleSubmit = () => {
    registerMutation.mutate({ email:email, password:pass, username:uname ,name:name , isTutor:tutor })
  };
  return (
    <>
      <div className="flex flex-row w-screen h-screen items-center justify-center">
        <div>
          <div className="flex border-2 border-gray-300 border-r-0 rounded-tl-lg rounded-bl-lg shadow-xl flex-col bg-[#d9e8fc] h-[654px] justify-center p-4">
            <img src={home} alt="img1" width={400} className="p-4"></img>
            <div className="font-medium flex flex-col mt-2 ms-2 mb-3 tracking-wide">
              <div>
                Over <span className="text-green-500 me-1">10 crore</span>
                learners trust us for their
              </div>
              <span>preparation</span>
            </div>
            <div>
              <span className="me-2">&#x2022;</span>
              Learn from 2,000+ India’s top educators
            </div>
            <div className="flex flex-col">
              <div className="flex-row">
                <span className="me-2">&#x2022;</span>
                Access 3,00,000+ live classes, test series,
              </div>
              <span className="ms-3">courses and more for free</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md max-h-full g">
          <div className="bg-white border-2 border-l-0 border-gray-300 rounded-tr-lg rounded-br-lg shadow-xl">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Register</h3>
            </div>

            <div className="p-4 md:p-5">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="uname"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="uname"
                    className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John_123"
                    value={uname}
                    onChange={(e) => {
                      setUname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </div>
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  value={tutor}
                  checked={tutor}
                  onChange={(e) => {
                    setTutor(!tutor);
                  }}
                  className="w-4 h-4 text-blue-600 cursor-pointer bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 bg-white border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-1"
                  className="ms-2 text-sm font-medium text-black cursor-pointer"
                >
                  Are you a tutor?
                </label>

                <button
                  onClick={handleSubmit}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-black">
                  Already registered?
                  <Link
                    to="/login"
                    className="text-blue-700 ms-1 hover:underline dark:text-blue-500"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
