import axios from "axios";
// import { useAtom } from "jotai";
import React, { useState } from "react";
// import { userAtom } from "../atom/authatoms";
import { useMutation } from "react-query";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [getauth,setAuth] = useAtom(userAtom)
  
  const loginMutation = useMutation(
    async ({ email, password }) => {
      const response = await axios.post("http://localhost:4000/auth/login", { email, password });
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("Login successful, token:", data);
        // storeTokenInDatabase(data);
      },
      onError: (error) => {
        console.error('Error logging in:', error.message);
      },
    }
  );
 
  const handlesubmit = () => {
    loginMutation.mutate({email,password:pass})
  }
  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full g">
          <div className="relative bg-white border-2 border-gray-300 rounded-lg shadow-xl">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Sign in to Edtech
              </h3>
            </div>

            <div className="p-4 md:p-5">
              <div className="space-y-4" >
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
                    required
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
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  className="w-full text-white mt-2 bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                  onClick={()=>handlesubmit()}
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-black">
                  Not registered?
                  <a
                    href="/"
                    className="text-blue-700 ms-1 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};