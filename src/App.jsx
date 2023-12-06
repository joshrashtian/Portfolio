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

function App () {
  return (
    <>
    <Navigation />
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Journey />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    <BottomRow />
    </>
  )
}

export default App;
