import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LetDecor } from "./home/letdecor";
import { Introduction } from "../constants/aboutText";
import { skills } from "../constants";
import { useScroll } from "framer-motion";
const About = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const [active, setActive] = useState(null);

  useEffect(() => {
    let filter = skills;
    filter.sort();
    setFilteredSkills(filter);
  }, []);

  return (
    <motion.div
      className="m-5 mx-20 mb-20"
      initial={{ x: -60, opacity: "0%" }}
      animate={{ x: 0, opacity: "100%", scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3, type: "just" }}
    >
      <motion.h1 className=" ml-5 mb-7 font-eudoxus text-6xl  bg-gradient-to-br from-slate-600 to-purple-600 text-transparent bg-clip-text">
        About
      </motion.h1>
      <div>
        <motion.h2 className="font-eudoxus text-center text-2xl bg-gradient-to-br from-slate-400 to-slate-800 text-transparent bg-clip-text">
          {Introduction}
        </motion.h2>
        <Link to={"/story"}>
          <motion.h2 className="mb-10 font-eudoxus text-center text-2xl bg-gradient-to-br from-indigo-400 to-blue-800 hover:text-slate-500 hover:font-bold transition-all duration-200 text-transparent bg-clip-text">
            right here.
          </motion.h2>
        </Link>
      </div>
      <LetDecor />
      <motion.h1 className=" ml-5 mb-7 font-eudoxus text-6xl  bg-gradient-to-tr from-emerald-600 to-cyan-900 text-transparent bg-clip-text mt-16">
        Skillset
      </motion.h1>
      <motion.div className="flex flex-row-reverse mx-10 justify-center ">
        <div className=" w-1/2 h-96 bg-white border-indigo-200 border-2 rounded-xl shadow-md mt-6">
          <h1 className=" font-eudoxus m-5 text-3xl">Deep Dive</h1>
          <h2 className="font-eudoxus text-zinc-500 ml-5 text-xl">
            {active != null
              ? null
              : "Click a card to get a closer look at any of the skillset!"}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap mt-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: -20, opacity: "0%" }}
              animate={{ y: 0, opacity: "100%" }}
              whileHover={{scale: 1.05}}
              transition={{
                delay: 0.5 + index * 0.5,
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 500,
              }}
              className=" w-[30%] cursor-pointer h-2/6 mx-1 my-0.5 bg-slate-100 hover:bg-white rounded-lg shadow-md hover:scale-115 scale-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="my-6 mx-3">
                <div className="flex justify-between">
                  <h1
                    className={`${
                      skill.headcolor != undefined
                        ? skill.headcolor
                        : "bg-gradient-to-br from-indigo-400 to-blue-800 text-transparent bg-clip-text"
                    } text-xl font-eudoxus  `}
                  >
                    {skill.skill}
                  </h1>
                  <img
                    src={skill.icon}
                    className="h-5 w-5 mr-1 hover:shadow-md hover:h-6 hover:w-6 transition-all duration-200"
                  />
                </div>
                <div className="flex items-center">
                  <p className={`${skill.color} text-xl`}>{skill.field}</p>
                </div>
                <p className="font-light text-xl">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
