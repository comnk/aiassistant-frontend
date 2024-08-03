import { RiGoogleFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex justify-center py-8">
        <h1 className="text-3xl font-bold">Logo</h1>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-md p-8">
          <form className="flex flex-col items-center">
            <h2 className="text-center text-[32px] font-semibold mb-6">
              Create an account
            </h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-[320px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-[320px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-[320px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-[0.6s]"
              >
                Continue
              </button>
            </div>
            <div className="text-center mb-4">
              <p>
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
            <div className="text-center flex items-center mb-4 w-[320px]">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="mb-4">
              <button className="w-[320px] flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition duration-[0.6s]">
                <RiGoogleFill
                  size={20} 
                  className="mr-2" 
                />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
