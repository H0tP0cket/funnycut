import React from "react";
import Navbar from "../components/navbar";
const handleSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault();
};
const Loginform = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center bg-gray-800">
      <Navbar />
      <form>
        <div className="flex flex-col items-center justify-center w-full p-32 bg-gray-800 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-gray-400">Login</h1>
          <div className="flex flex-col w-full mt-8">
            <label htmlFor="email" className="text-left text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 text-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full mt-8">
            <label htmlFor="password" className="text-left text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 text-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full mt-8">
            <label htmlFor="password" className="text-left text-gray-400">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 mt-2 text-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-transparent"
            />
          </div>
          <a
            type="submit"
            href="/main"
            className="w-full px-4 py-2 mt-8 text-white bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus:bg-red-200"
          >
            Login
          </a>
          <div className="grid grid-cols-2 pt-4">
            <div className="text-gray-400">Already have an account?</div>
            <div>
              {" "}
              <a
                href="/signup"
                type="submit"
                className="w-full px-4 py-2 mt-8 text-white bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus:bg-red-200"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Loginform;
