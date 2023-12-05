import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import logo from "../assets/home/joshrashtian.png"
import jjr from "../assets/jjr.png"

const Navigation = () => {
  const [active, setActive] = useState("");

  return (
    <motion.nav initial={{opacity: '0%'}} animate={{opacity: '100%'}} transition={{delay: 1, duration: 1}} className="bg-gradient-to-r mx-64 mt-6 rounded-3xl from-indigo-800 to-purple-900 transition-all duration-300">
      <motion.div className="w-full h-24 mx-3 flex flex-row items-center justify-between rounded-b-lg ">
        <Link
          to="/"
          className=" h-20 justify-between flex items-center  rounded-3xl hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-800 hover:via-purple-700 transition-all duration-500 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/*(<h2 className="text-xl font-bold text-white ml-5">Joshua Rashtian</h2>*/}
          <motion.img src={jjr} whileHover={{scale: 1.1}} transition={{duration: 0.2, type: 'spring', damping: 25, stiffness: 600}} className="h-12 w-12 ml-3"/>
          <img src={logo} className=" h-32 w-64 mt-2 ml-3"/>
        </Link>
        <ul className="list-none sm:flex flex-row gap-10 items-center mx-20 ">
          {navLinks.map((link, index) => (
            <motion.li 
              initial={active == "" ? {opacity: '0%', y: -20} : {opacity: '100%', y: 0}}
              animate={active == "" ? {opacity: '100%', y: 0 } : {opacity: '100%', y: 0}}
              transition={{delay: (2 + (index * 0.2)), duration: 1.2, type: 'just'}}
              key={link.id}
              className={`${
                active === link.title ? "text-white font-bold bg-purple-900 p-2 rounded-2xl" : "text-gray-400"
              } hover:text-white hover:duration-300 hover:text-lg hover:shadow-lg cursor-pointer font-eudoxus`}
            onClick={() => {setActive(link.title)}}
            >
              <Link to={link.id}>{link.title}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
