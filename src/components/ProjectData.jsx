import React from "react";
import { motion } from "framer-motion";
import GitHub from "../assets/projects/github.png"
import Globe from "../assets/projects/globe.png"

export default function ProjectData(project) {
  return (
    <motion.div
      className="p-20 bg-slate-200 flex items-center mt-10"
      initial={{ opacity: "0%", scale: 0.8 }}
      animate={{ opacity: "100%", scale: 1.0 }}
      transition={{ type: "spring" }}
    >
      <motion.img
        src={project.project.logo}
        className=" h-[30%] w-[30%] mr-7 rounded-3xl shadow-lg transition-all duration-500"
        initial={{ scale: 0.8, opacity: "0%" }}
        whileHover={{ scale: 1.1 }}
        animate={{ scale: 1, opacity: "100%" }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }}
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
            <h1
              key={index}
              className="p-1 px-3 rounded-lg bg-slate-300 shadow-sm m-1 mt-3 text-teal-950 font-semibold "
            >
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
              key={index}
              transition={{
                delay: 0.5 + index * 0.5,
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
        <motion.div
        initial={{ x: -20, opacity: "0%" }}
        animate={{ x: 0, opacity: "100%" }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }} >
        {project.project.source_code != undefined ? (
          <div className=" w-52 h-9 flex bg-slate-800 items-center justify-center hover:justify-evenly rounded-[10px] hover:rounded-[6px] hover:scale-[1.1] hover:bg-slate-600 transition-all duration-400 shadow-sm my-2 group">
            <img
              src={GitHub}
              className="w-6 h-6 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
            />
            <a
              className="font-bold align-middle text-white transition-all duration-400"
              href={
                project.project.source_code != undefined
                  ? project.project.source_code
                  : null
              }
            >
              {project.project.source_code != undefined
                ? "View Source Code"
                : null}
            </a>
          </div>
        ) : null}
        {project.project.website != undefined ? (
          <div className=" w-52 h-10 items-center text-center justify-center hover:justify-evenly flex bg-teal-700 rounded-[20px] hover:rounded-[10px] hover:scale-[1.1] hover:bg-teal-800 transition-all duration-400 shadow-sm my-2 group">
            <img
              src={Globe}
              className="w-5 h-5 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
            />
            <a
              className="font-bold align-middle group-hover:mr-3 text-white transition-all duration-300"
              href={project.project.website != undefined ? project.project.website : null}
            >
              Visit Website
            </a>
          </div>
        ) : null}
        </motion.div>
      </div>
    </motion.div>
  );
}
