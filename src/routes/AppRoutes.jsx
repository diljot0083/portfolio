import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Navbar from '../components/navbar/Navbar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/home"
        element={
          <div>
            <Navbar />
            <Home />
          </div>
        }
      />

      <Route
        path="/about"
        element={
          <div>
            <Navbar />
            <About />
          </div>
        }
      />

      <Route
        path="/projects"
        element={
          <div>
            <Navbar />
            <Projects />
          </div>
        }
      />

      <Route
        path="/contact"
        element={
          <div>
            <Navbar />
            <Contact />
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;