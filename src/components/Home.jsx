import React, { useState } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IMG0 from "../assets/personimages/IMG0.png";

export const Home = () => {
  return (
    <motion.div>
      <div className="flex justify-evenly">
        <div className="mt-40">
          <motion.h1 initial={{x: -100, opacity: '0%'}} animate={{x: 0, opacity: '100%'}}  transition={{duration: 1}} className=" text-5xl ml-10 mt-36 font-eudoxus text-slate-500 ">
            Hello, my name is
          </motion.h1>
          <motion.h1
            drag
            dragTransition={{ timeConstant: 200, min: -50, max: 100, bounceStiffness: 100}}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1, stiffness: 50, restDelta: 0.001,  type: 'tween' }}
            className=" text-8xl ml-10 font-eudoxus bg-gradient-to-br from-indigo-600 via-pink-900 to-pink-800 bg-clip-text text-transparent hover:text-slate-600 transition-all duration-300 cursor-grab "
          >
            Joshua Rashtian
          </motion.h1>
          <motion.h1 initial={{x: 100, opacity: '0%'}} animate={{x: 0, opacity: '100%'}}  transition={{delay: 1, duration: 1}} className=" text-5xl ml-10 mt-2 font-eudoxus bg-gradient-to-br from-pink-900 to-cyan-800 bg-clip-text text-transparent">
            ...and I'm here to help build the future.
          </motion.h1>
          <motion.h1 initial={{y: -50, opacity: '0%'}} animate={{y: 0, opacity: '100%'}}  transition={{delay: 3, duration: 1}} className=" text-2xl ml-10 mt-2 font-bold bg-gradient-to-br from-pink-900 to-cyan-800 bg-clip-text text-transparent">
            (well or whatever I am passionate about)
          </motion.h1>
        </div>
        <motion.img
          src={IMG0}
          initial={{scale: 0.5, x: 100, opacity: '0%'}} animate={{scale: 1, x: 0, opacity: '100%'}} whileHover={{scale: 1.1}} transition={{delay: 2, duration: 0.7}}
          className=" h-2/5 w-1/5 mt-3 hover:scale-[1.1] hover:shadow-2xl shadow-lg rounded-3x transition-all duration-500 rounded-3xl"
        />
      </div>
      <motion.div initial={{opacity: '0%'}} animate={{opacity: '100%'}} transition={{delay: 4, duration: 1, type: 'just'}} className="text-center justify-center mt-10">
      <Link to="/about" className="p-4 px-7 text-white font-bold bg-gradient-to-tr from-indigo-700 to-purple-700 rounded-xl hover:bg-slate-800 hover:p-5 hover:px-8 duration-300 ">
          Learn About Me 
      </Link>
      </motion.div>
    </motion.div>
  );
};
