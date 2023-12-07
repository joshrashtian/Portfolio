import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import Journey from "./components/Journey";
import About from "./components/About";
import ErrorPage from "./components/404";
import { Blog } from "./components/Blog";
import BottomRow from "./components/BottomRow";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectHub } from "./components/projects/ProjectHub";
import { ProjectScreen } from "./components/projects/ProjectScreen";

function App () {
  return (
    <>
    <Navigation />
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Journey />} />
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path="" element={<ProjectHub />} />
            <Route path="database" element={<Projects />}/>
            <Route path=":id" element={<ProjectScreen />}/>
          </Route>
          <Route path="/blog" element={<Blog />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    <BottomRow />
    </>
  )
}

export default App;
