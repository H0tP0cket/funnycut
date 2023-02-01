import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import "animate.css";

function Butoon(project: any, shape: string) {
  return (
    <button
      className="border rounded py-2 px-3 text-gray-700"
      value={project.headShape}
      onClick={() => project.setHeadShape(shape)}
    ></button>
  );
}

export default Butoon;
