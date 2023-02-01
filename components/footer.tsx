import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="left-0 right-0 mx-auto w-full max-w-6xl bg-gray-900  px-6  sm:px-6">
        <div className="py-4 md:flex md:items-center md:justify-between md:py-8 ">
          <div className="text-md mr-4 text-white">
            &copy; &nbsp;
            {new Date().getFullYear()} | WoahH
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
