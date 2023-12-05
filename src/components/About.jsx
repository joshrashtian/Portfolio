import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LetDecor } from "./home/letdecor";
import { Introduction } from "../constants/aboutText";
import { skills } from "../constants";
import { useScroll } from "framer-motion"
const About = () => {

  const [filteredProjects, setFilteredProjects] = useState(skills)
  useEffect(() => {
    let filter = skills
    filter.sort();
    setFilteredProjects(filter)
  }, [])

  return (
    <motion.div
      className="m-5"
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
        Exprience / Specialities
      </motion.h1>
      <div className="flex flex-row flex-wrap justify-center mt-6">
      {
        filteredProjects.map((skill, index) => (
        
            <motion.div key={index} initial={{y: -20, opacity: '0%'}} animate={{y: 0, opacity: '100%'}} transition={{delay: 0.5 + (index * 0.5), duration: 0.5, type: 'spring', damping: 25, stiffness: 500}}  className=" w-[15%] h-1/5 mx-2 my-0.5 bg-slate-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="my-6 mx-3">
                <div className="flex justify-between">
                  <h1 className={`${ skill.headcolor != undefined ? skill.headcolor : 'bg-gradient-to-br from-indigo-400 to-blue-800 text-transparent bg-clip-text' } text-xl font-eudoxus  `} >{skill.skill}</h1>
                  <img src={skill.icon} className="h-5 w-5 mr-1 hover:shadow-md hover:h-6 hover:w-6 transition-all duration-200" />
                </div>
                <div className="flex items-center">
                  <p className={`${ skill.color } text-xl`}>{skill.field}</p>
                </div>
                <p className="font-light text-xl">{skill.desc}</p>
              </div>
            </motion.div>
         
        ))
      }
       </div>
    </motion.div> 
  );
};

export default About;
