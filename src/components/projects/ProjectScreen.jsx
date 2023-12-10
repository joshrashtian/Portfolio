import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specialProjects } from "../../constants";
import { AppleStore } from "../../constants/imageindex";
import ErrorPage from "../404";

export const ProjectScreen = () => {
  const { id } = useParams();
  const [project, setProject] = useState({title: ''});

  useEffect(() => {
    for (let i = 0; i < specialProjects.length; i++) {
      if (specialProjects[i].title == id) {
        setProject(specialProjects[i]);
        break;
      }
    }
    console.log(id)
    console.log(project)
    
  });

  if (project.title.length === 0) {
   return <ErrorPage />  
  }

  return (
    <div className=" mx-20 mt-10 h-screen">
      <div className="flex items-center">
        <h1 className=" font-eudoxus text-6xl">{project.title}</h1>
        <div className="p-0.5 px-2 bg-slate-100 items-center ml-2 rounded-xl">
          <h2 className="font-eudoxus text-teal-600">{project.state}</h2>
        </div>
      </div>
      <h2 className="font-eudoxus text-slate-500 text-2xl">{project.desc}</h2>
      <div className="flex mt-7">
        <div className="bg-gray-200 p-5 rounded-3xl shadow-sm">
          <h1 className="text-3xl font-eudoxus mb-3">Description</h1>
          <h2 className="font-eudoxus text-slate-500">{project.about}</h2>
          {project.downloadType == "iOS" ? (
            <div>
                <h2 className="text-3xl font-eudoxus mt-24 mb-3">Download</h2>
                <img src={AppleStore} className=" w-96  rounded-3xl" />
            </div>
          ) : null}
        </div>
        <img
          src={project.img}
          className={`${
            project.type == "Mobile Application" ? "h-1/5 w-2/5 " : ""
          } rounded-3xl ml-6`}
        />
      </div>
    </div>
  );
};
