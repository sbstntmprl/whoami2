import { BiCodeAlt, BiSolidAward, BiSolidBriefcase, BiSolidHomeCircle, BiSolidPaperPlane } from "react-icons/bi";
import logo from "./assets/logo.png";


function SideBar() {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-20 m-0 flex items-center flex-col bg-primary ">
        <div>
          <img className="w-14 h-14 mt-5 mx-3 mb-44" src={logo} alt="A daisy logo icon." />
        </div>
        <div className="flex flex-col">
          <i><BiSolidHomeCircle className="w-10 h-10  text-background"/></i>
          <div class="border-2 border-line my-7"></div>
          <i><BiCodeAlt className="w-10 h-10 text-background"/></i>
          <div class="border-2 border-line my-7"></div>
          <i><BiSolidBriefcase className="w-10 h-10 text-background"/></i>
          <div class="border-2 border-line my-7"></div>
          <i><BiSolidAward className="w-10 h-10 text-background"/></i>
          <div class="border-2 border-line my-7"></div>
          <i><BiSolidPaperPlane className="w-10 h-10 text-background"/></i>
        </div>
      </div>
    </>
  )
}

export default SideBar