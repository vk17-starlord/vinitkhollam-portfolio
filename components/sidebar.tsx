"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SidebarProps {
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
    const sidebarVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { 
          x: 0, 
          opacity: 1, 
          transition: { 
            type: "tween", 
            ease: "easeInOut", 
            duration: 0.4 
          } 
        },
        exit: { 
          x: "100%", 
          opacity: 0, 
          transition: { 
            type: "tween", 
            ease: "easeInOut", 
            duration: 0.4 
          } 
        }
      };

  return (

    <motion.div
      className="fixed flex justify-center items-center flex-col top-0 right-0 w-3/4 h-full bg-black text-white z-50 p-6 shadow-lg"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex absolute top-10 right-10 justify-end">
        <button onClick={toggleSidebar} className="text-3xl">
          <i className="bx bx-x"></i>
        </button>
      </div>

      <nav className="mt-8 space-y-6">
        {["Home", "About", "Blogs", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="block text-lg text-center hover:text-gray-400"
            onClick={toggleSidebar}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="mt-8 flex justify-center items-center space-x-4">
        <a className="text-2xl hover:text-gray-400" href="#">
          <i className='bx bxl-linkedin-square'></i>
        </a>
        <a className="text-2xl hover:text-gray-400" href="#">
          <i className='bx bxl-github'></i>
        </a>
        <a className="text-2xl hover:text-gray-400" href="#">
          <i className='bx bxl-wordpress'></i>
        </a>
      </div>
    </motion.div>
  );
};
