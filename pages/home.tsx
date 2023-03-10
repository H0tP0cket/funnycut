import { motion } from "framer-motion";

import "animate.css";
import barber from "../public/images/barberhome.png";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
function Intro() {
  return (
    <main className="min-h-screen px-10 lg:px-40 mx-auto max-w-8xl font-sans pb-20 pt-20 bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="animate__fadeInLeft animate__animated">
          <h1 className="text-4xl lg:text-6xl text-white-100 block pb-4 font-bold font-sans leading-tight">
            Hairitage Cuts Finder
          </h1>
          <span className="block pb-6 text-gray-400 text-lg md:text-xl lg:pr-50">
            Let us help you find the perfect haircut for your face shape.
          </span>
          <a
            className="bg-red-100 hover:bg-red-200  text-white font-bold lg:py-4 lg:px-12 rounded-full py-2 px-8"
            href="/main"
          >
            Get Started
          </a>
        </div>
        <div className="pl-40 animate__fadeInRight animate__animated">
          <Image src={barber} alt={""} width={500} height={500}></Image>
        </div>
      </div>
    </main>
  );
}

export default Intro;
