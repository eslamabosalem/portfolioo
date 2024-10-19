import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentmode") || "light");

  useEffect(() => {
    const handleScroll = () => {
   
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <header className="flex justify-between items-center px-10 mt-7 py-8">
      <div className="jj">
        <Link to="/">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="images/me-modified.png"
            className="avatar w-6"
            alt=""
          />
        </Link>
      </div>
      <button onClick={() => setShowModel(true)} className="menu">
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav className="bgHeader p-4 rounded-3xl shadow-black">
        <ul className="flex gap-8">
          <li>
            <Link to="/about" className="title">About</Link>
          </li>

          <li>
            <Link to="/project" className="title">Projects</Link>
          </li>

          <li>
            <Link to="/uses" className="title">Uses</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          localStorage.setItem("currentmode", newTheme);
          setTheme(newTheme);
        }}
      >
        <i className="fa-regular fa-moon"></i>
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model mx-auto mt-40 rounded-3xl py-5 px-9">
            <li className="flex justify-end items-center mx-3">
              <button onClick={() => setShowModel(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <Link to="/about" className="title">About</Link>
            </li>

            <li>
              <Link to="/project" className="title">Projects</Link>
            </li>

            <li>
              <Link to="/uses" className="title">Uses</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
