import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Projects from "../pages/Projects";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ResumePage from '../pages/ResumePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ResumePage" element={<ResumePage />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router