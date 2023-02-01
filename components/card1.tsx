import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import "animate.css";

function Card(project: any) {
  return (
    <div key={project.id} className="h-auto">
      <div className="h-full py-3 ">
        <img
          src={project.image}
          alt=" random imgee"
          className="= w-full rounded-lg object-cover object-center shadow-md"
          height={100}
          width={100}
        />
        <motion.div
          whileHover={{
            transition: { duration: 0.3 },
            y: -20,
            scale: 1.03,
          }}
          className="relative -mt-16 px-4  "
        >
          <div className="rounded-lg bg-gray-850 p-6 shadow-lg text-white-100">
            <h4 className="mt-1 truncate text-xl uppercase leading-tight text-white">
              {project.name}
            </h4>

            <div className="mt-1 overflow-hidden text-white-100">
              <p>{project.style}</p>
            </div>
            <div className="mt-4">
              <span className="text-md font-semibold text-red-800">
                Extra info: {project.etc}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
