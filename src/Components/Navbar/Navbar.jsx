import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 z-20 fixed w-screen p-5 border-t-gray-200 border-t-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="" className="p-3 text-white font-bold text-4xl">
            START FRAMEWORK
          </Link>
          <div className=" md:hidden font-bold text-3xl border-gray-400">
            <i className="fa-solid fa-bars text-white p-2" onClick={()=>{setToggle(!toggle)}}></i>
          </div>

          {toggle && (
            <div className="w-full md:block md:w-auto">
              <ul className=" flex flex-col p-4 gap-5 md:p-0 mt-4 rounded-lg font-bold text-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                <li className=" list-none">
                  <NavLink to="about" className="p-3 text-white">
                    About
                  </NavLink>
                </li>
                <li className=" list-none">
                  <NavLink to="portfolio" className="p-3 text-white">
                    Portfolio
                  </NavLink>
                </li>
                <li className=" list-none">
                  <NavLink to="contact" className="p-3 text-white">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
            <div className="hidden w-full md:block md:w-auto">
              <ul className=" flex flex-col p-4 md:p-0 mt-4 border  rounded-lg font-bold text-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                <li className=" list-none">
                  <NavLink to="about" className="p-3 text-white">
                    About
                  </NavLink>
                </li>
                <li className=" list-none">
                  <NavLink to="portfolio" className="p-3 text-white">
                    Portfolio
                  </NavLink>
                </li>
                <li className=" list-none">
                  <NavLink to="contact" className="p-3 text-white">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
}
