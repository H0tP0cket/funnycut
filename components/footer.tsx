import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="left-0 right-0 mx-auto w-full max-w-6xl   pl-96">
        <div className="py-4 md:flex md:items-center md:justify-between md:py-8 ">
          <div className="text-md  text-white-100">
            &copy; &nbsp;
            {new Date().getFullYear()} | WoahH
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
