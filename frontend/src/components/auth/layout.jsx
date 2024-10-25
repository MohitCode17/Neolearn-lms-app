import React from "react";
import { Outlet } from "react-router-dom";
import backgroundImage from "../../assets/learning.png";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section with Image and Welcome Message */}
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Darker Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-zinc-900 to-gray-800 opacity-80"></div>

        {/* Text Content with Animation */}
        <div className="relative max-w-xl space-y-6 text-left text-white z-10 transition-all duration-500">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to NeoLearn
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Empower your journey of knowledge with curated courses, expert-led
            guidance, and a community that fosters growth. NeoLearn is where
            learning meets inspiration, tailored just for you.
          </p>
        </div>
      </div>

      {/* Right Section for Form Outlet */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6 py-12 sm:px-8 lg:px-10 transition-all duration-300 ease-in-out">
        <div className="w-full max-w-md space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
