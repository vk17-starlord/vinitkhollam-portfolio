"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header className="relative bg-transparent top-0 z-50 py-2">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full transition duration-150 ease-in-out"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleSidebar}>
          <i className="bx bx-menu"></i>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Blogs", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="text-white text-sm relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Icons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <a className="text-white text-2xl hover:text-3xl transition duration-150 ease-in-out" href="#">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a className="text-white text-2xl hover:text-3xl transition duration-150 ease-in-out" href="#">
            <i className='bx bxl-github'></i>
          </a>
          <a className="text-white text-2xl hover:text-3xl transition duration-150 ease-in-out" href="#">
            <i className='bx bxl-wordpress'></i>
          </a>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>{isOpen && <Sidebar toggleSidebar={toggleSidebar} />}</AnimatePresence>
    </motion.header>
  );
}
