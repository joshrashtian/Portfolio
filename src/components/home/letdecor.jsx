import React, { useState, useEffect } from "react";
import { exprience } from "../../constants";

export const LetDecor = () => {
  const [selected, setSelected] = useState({});

  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className="p-7 bg-gray-100 m-2 rounded-[20px] shadow-md">
      <div className=" flex items-center">
        <p className="text-[30px] font-[300] text-center font-mono bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent ">
          let
        </p>
        <p className="text-[30px] font-[300] text-center font-mono ml-3 bg-gradient-to-t from-slate-700 to-slate-400 bg-clip-text text-transparent">
          Exprience
        </p>
        <p className="text-[30px] font-[300] text-center font-mono ml-3 text-gray-500">
          =
        </p>
        <div className="ml-5 bg-gradient-to-br from-slate-800 to-slate-600 p-3 px-12 rounded-lg">
          <div className="flex justify-evenly items-center">
            <p className="text-xl font-[300] font-mono text-blue-400">[</p>
            {exprience.map((category) => (
              <p
                key={selected}
                onMouseOver={() => {
                  setSelected(category);
                }}
                className={`${
                  category == selected
                    ? "bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent"
                    : "text-white"
                } text-xl hover:text-2xl mx-1 hover:shadow-sm hover:rounded-lg hover:shadow-emerald-700 hover: font-[300] font-mono cursor-pointer transition-all duration-300`}
              >
                {category.title}
                {category.title != "Graphic Designer" ? "," : null}
              </p>
            ))}
            <p className="text-xl font-[300] mx-1  font-mono text-blue-400">
              ]
            </p>
          </div>
        </div>
      </div>
      {selected != {} ? (
        <Exprience
          title={selected.title}
          desc={selected.desc}
          img={selected.img}
        />
      ) : null}
    </div>
  );
};

const Exprience = (category) => {
  console.log(category);
  return (
    <div className="p-5">
      <p className="font-bold text-2xl font-mono bg-gradient-to-tr from-purple-600 to-amber-700 bg-clip-text text-transparent ">
        {category.title}
      </p>
      <p className="bg-gradient-to-tr from-purple-950 to-slate-600 bg-clip-text text-transparent">
        {category.desc}
      </p>
    </div>
  );
};
