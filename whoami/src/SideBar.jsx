import React from 'react';
import { BiCodeAlt, BiSolidAward, BiSolidBriefcase, BiSolidHomeCircle, BiSolidPaperPlane } from "react-icons/bi";
import SideBarIcon from './SideBarIcon';
import logo from "./assets/logo.png";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 w-20 m-0 flex flex-col items-center bg-primary h-screen">
      <div>
        <img className="w-14 h-14 mt-5 mx-3 mb-44" src={logo} alt="A daisy logo icon." />
      </div>
      
      <div className="flex flex-col">
        <SideBarIcon icon={<BiSolidHomeCircle className="w-10 h-10"/>} />
        <div className="border-2 border-line my-7"></div>
        <SideBarIcon icon={<BiCodeAlt className="w-10 h-10"/>} />
        <div className="border-2 border-line my-7"></div>
        <SideBarIcon icon={<BiSolidBriefcase className="w-10 h-10"/>} />
        <div className="border-2 border-line my-7"></div>
        <SideBarIcon icon={<BiSolidAward className="w-10 h-10"/>} />
        <div className="border-2 border-line my-7"></div>
        <SideBarIcon icon={<BiSolidPaperPlane className="w-10 h-10"/>} />
      </div>
    </div>
  );
}

export default SideBar;
