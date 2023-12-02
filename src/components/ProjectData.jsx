import React from "react";
import { motion } from "framer-motion";

export default function ProjectData(project) {
  return (
    <motion.div
      className="p-20 bg-slate-200 flex items-center mt-10"
      initial={{ opacity: "0%", scale: 0.8 }}
      animate={{ opacity: "100%", scale: 1.0 }}
      transition={{ type: "spring" }}
    >
      <img
        src={project.project.logo}
        className=" h-[30%] w-[30%] mr-7 rounded-3xl shadow-lg transition-all duration-500"
      />
      <div>
        <h1
          className={`${
            project.project.type == "Software" ? "text-teal-800" : "font-bold"
          } text-2xl font-bold`}
        >
          {project.project.title}
        </h1>
        <h2
          className={`${
            project.project.type == "Software"
              ? "from-teal-800 to-teal-500"
              : project.project.type == "Video Game"
              ? "from-orange-800 to-orange-500"
              : "from-indigo-700 to-purple-700"
          } text-lg font-semibold bg-gradient-to-br bg-clip-text text-transparent`}
        >
          {project.project.type}
        </h2>
        <h2>{project.project.description}</h2>
        <div className="flex flex-wrap">
          {project.project.tools.map((tool, index) => (
            <h1 key={index} className="p-1 px-3 rounded-lg bg-slate-300 shadow-sm m-1 mt-3 text-teal-950 font-semibold ">
              {tool}
            </h1>
          ))}
        </div>
        <div className=" p-4 mt-3 bg-slate-500 rounded-xl shadow-lg">
          <h2 className="font-bold ml-2 mb-4 text-xl text-slate-100">
            Impacts/Concepts
          </h2>
          {project.project.points.map((point, index) => (
            <motion.div
              className="flex bg-slate-400 my-0.5"
              initial={{ x: -20, opacity: "0%" }}
              animate={{ x: 0, opacity: "100%" }}
              transition={{
                delay: index == 1 ? 1 : (index != 0 ? 0.5 * index : 0.5),
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 500,
              }}
            >
              <div
                className={`${
                  project.project.type == "Software"
                    ? "from-teal-700 to-teal-500"
                    : project.project.type == "Video Game"
                    ? "from-orange-800 to-orange-500"
                    : "from-indigo-700 to-purple-700"
                } p-0.5 bg-gradient-to-b rounded-xl`}
              />
              <h1 className=" text-white rounded-lg mx-2">{point}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
