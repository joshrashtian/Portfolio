import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { motion } from "framer-motion";
import GitHub from "../assets/projects/github.png";
import Globe from "../assets/projects/globe.png";
import { Codebases } from "../components/projects/Codebases";
import ProjectData from "./ProjectData";

export const Projects = () => {
  const Categories = ["All", "Software", "Video Production", "Video Game"];
  const [selected, setSelected] = useState("");
  const [filteredList, setFilter] = useState(projects);
  const [featured, setFeatured] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(undefined)
  const [currentFilter, setCurrentFilter] = useState(null)

  useEffect(() => {
    let feature = "yes";
    const featuredRow = featured.filter((project) =>
      project.featured.includes(feature)
    );
    console.log(featuredRow);
    setFeatured(featuredRow);
  }, []);

  useEffect(() => {
    const value = selected;
    if (value != "All") {
      const filter = projects.filter((project) => project.type.includes(value));
      setFilter(filter);
    } else {
      setFilter(projects);
    }
  }, [selected]);

  const changeFilter = (tool) => {
    if(tool != null){
    const filter = projects.filter((project) => project.tools.includes(tool))
    setCurrentFilter(tool)
    setFilter(filter)
    } else {
    setCurrentFilter(null)
    setFilter(projects)
    }
  }



  return (
    <div>
      <motion.h1
        transition={{ duration: 0.3 }}
        initial={{ x: -90, opacity: "0%" }}
        animate={{ x: 0, opacity: "100%" }}
        className="font-bold text-6xl m-4 bg-gradient-to-br from-indigo-600 via-pink-900 to-pink-800 bg-clip-text text-transparent transition-all duration-300"
      >
        Featured Projects
      </motion.h1>
      <div className="flex flex-wrap mx-2">
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            transition={{ type: "tween", delay: 0.3 * index, duration: 0.25 }}
            initial={{ y: -20, opacity: "0%" }}
            animate={{ y: 0, opacity: "100%" }}
            className=" p-2 bg-slate-100 m-1 mx-3 flex rounded-[16px] shadow-lg hover:shadow-2xl transition-all duration-400 items-center"
          >
            <img
              src={project.logo != undefined ? project.logo : GitHub}
              className="h-28 w-28 rounded-xl ml-2 hover:h-32 hover:w-32 transition-all hover:shadow-lg"
            />
            <div className="ml-3">
              <div className="flex mt-3">
                <h1 className="mr-2 font-bold">{project.title} - </h1>
                <h1
                  className={`${
                    project.type === "Software"
                      ? "text-cyan-700"
                      : project.type === "Video Game"
                      ? "text-red-500"
                      : "text-orange-400"
                  } font-bold`}
                >
                  {project.type}
                </h1>
              </div>
              <h2>{project.description}</h2>

              <h1 className="mr-2 font-light">
                {" "}
                {
                  (project.status = "Work In Progress"
                    ? "Date Completed: "
                    : null)
                }{" "}
                {project.date}
              </h1>
              <div className="flex flex-row">
                {project.tools.map((tool) => (
                  <div className="mx-1 cursor-grabbing bg-slate-200 hover:bg-slate-300 p-1 px-2 rounded-lg transition-all">
                    <h1 className="text-sm font-light ">{tool}</h1>
                  </div>
                ))}
              </div>
              {project.source_code != undefined ? (
                <div className=" w-[190px] h-9 text-center hover:justify-between flex bg-slate-800 rounded-[20px] hover:rounded-[10px] hover:w-48 hover:bg-slate-600 transition-all duration-400 shadow-sm my-2 group">
                  <img
                    src={GitHub}
                    className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
                  />
                  <a
                    className="font-bold align-middle group-hover:mr-2 mt-1 text-white"
                    href={
                      project.source_code != undefined
                        ? project.source_code
                        : null
                    }
                  >
                    {project.source_code != undefined
                      ? "View Source Code"
                      : null}
                  </a>
                </div>
              ) : null}
              {project.website != undefined ? (
                <div className=" w-36 h-9 text-center hover:justify-between flex bg-green-700 rounded-[20px] hover:rounded-[10px] hover:w-40 hover:bg-green-800 transition-all duration-400 shadow-sm my-2 group">
                  <img
                    src={Globe}
                    className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
                  />
                  <a
                    className="font-bold align-middle group-hover:mr-3 text-white mt-1 mr-2 transition-all"
                    href={project.website != undefined ? project.website : null}
                  >
                    Visit Website
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
      {
        selectedProject != undefined ? 
        <ProjectData project={selectedProject} filter={changeFilter}/> :
        null
      }
      <motion.h1
        transition={{ type: "tween", delay: 0.5, duration: 0.5 }}
        initial={{ x: -40, opacity: "0%" }}
        animate={{ x: 0, opacity: "100%" }}
        className="font-bold text-6xl m-4 bg-gradient-to-br from-indigo-600 via-pink-900 to-pink-800 bg-clip-text text-transparent transition-all duration-300"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap mx-2">
        {Categories.map((category, index) => (
          <motion.button
            className="w-48 h-10 shadow-md bg-blue-400 hover:bg-blue-600 hover:rounded-xl m-1 rounded-3xl text-white font-[700] transition-all duration-200"
            type="button"
            transition={{
              type: "tween",
              delay: index == 0 ? 0.5 : 0.6 * index,
              duration: index < 2 ? 0.2 * index : 0.15 * index,
            }}
            initial={{
              y: 10 * (index % 2 ? -(index / 2) : index / 2),
              opacity: "0%",
            }}
            animate={{ y: 0, opacity: "100%" }}
            key={index}
            onClick={() => {
              setSelected(category) + console.log(selected);
            }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      { currentFilter != null ?
      <div className="flex ml-3 items-center">
        <h1 className=" font-eudoxus text-xl">Current Filter:</h1>
        <div onClick={() => {changeFilter(null)}} className=" p-2 bg-slate-200 cursor-pointer hover:bg-slate-600 ml-1 rounded-2xl transition-all duration-200 group ">
          <h1 className=" font-eudoxus text-xl hover:text-white transition-all duration-200 "> {currentFilter}</h1>
        </div>
      </div>
       : null }
      
      <div className="flex flex-wrap mt-10">
        {filteredList.map((project, index) => (
          <>
            <Tilt options={{ max: 15, transition: true, perspective: 2000 }}>
              <motion.div
                key={index}
                className="p-5 bg-white m-2 mx-3 flex rounded-[16px] shadow-lg hover:shadow-2xl hover:bg-slate-100 transition-all duration-400 "
                transition={{ delay: 0.1 * index, duration: 0.5, velocity: 5 }}
                initial={{ opacity: "0%", scale: 0.5 }}
                animate={{ opacity: "100%", scale: 1 }}
                onClick={() => {setSelectedProject(project) + window.scrollTo(0, 400)}}
              >
                <img
                  src={project.logo != undefined ? project.logo : GitHub}
                  className="h-28 w-28 rounded-xl hover:h-32 hover:w-32 transition-all hover:shadow-lg"
                />
                <div className="ml-3">
                  <div className="flex">
                    <h1 className="mr-2 font-medium">{project.title} - </h1>
                    <h1
                      className={`${
                        project.type === "Software"
                          ? "text-cyan-700"
                          : project.type === "Video Game"
                          ? "text-red-500"
                          : "text-orange-400"
                      }`}
                    >
                      {project.type}
                    </h1>
                  </div>
                  <h2>{project.description}</h2>

                  <h1 className="mr-2 font-light">
                    {" "}
                    {
                      (project.status = "Work In Progress"
                        ? "Date Completed: "
                        : null)
                    }{" "}
                    {project.date}
                  </h1>
                  <div className="flex flex-row">
                    {project.tools.map((tool) => (
                      <div className="mx-1 cursor-grabbing bg-slate-200 hover:bg-slate-300 p-1 px-2 rounded-lg transition-all">
                        <h1 className="text-sm font-light ">{tool}</h1>
                      </div>
                    ))}
                  </div>
                  {project.source_code != undefined ? (
                    <div className=" w-[190px] h-9 text-center hover:justify-between flex bg-slate-800 rounded-[20px] hover:rounded-[10px] hover:w-48 hover:bg-slate-600 transition-all duration-400 shadow-sm my-2 group">
                      <img
                        src={GitHub}
                        className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
                      />
                      <a
                        className="font-bold align-middle group-hover:mr-2 mt-1 text-white"
                        href={
                          project.source_code != undefined
                            ? project.source_code
                            : null
                        }
                      >
                        {project.source_code != undefined
                          ? "View Source Code"
                          : null}
                      </a>
                    </div>
                  ) : null}
                  {project.website != undefined ? (
                    <div className=" w-36 h-9 text-center hover:justify-between flex bg-green-700 rounded-[20px] hover:rounded-[10px] hover:w-40 hover:bg-green-800 transition-all duration-400 shadow-sm my-2 group">
                      <img
                        src={Globe}
                        className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
                      />
                      <a
                        className="font-bold align-middle group-hover:mr-3 text-white mt-1 mr-2 transition-all"
                        href={
                          project.website != undefined ? project.website : null
                        }
                      >
                        Visit Website
                      </a>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </Tilt>
          </>
        ))}
      </div>
      <h1 className="font-bold text-[20px] ml-2">Codebases</h1>
      <div className="mt-2">
        <Codebases />
      </div>
    </div>
  );
};
