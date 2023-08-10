import React from "react"
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import { toast } from "react-hot-toast";
const Navbar = (props)=>{
          let isLoggedIn = props.isLoggedIn;
          let setIsLoggedIn= props.setIsLoggedIn;

   return (
         
          <div className="flex justify-between items-center w-11/12 py-4 mx-auto max-w-[1160px]">
             <Link to="/" >
                    <img src={logo} alt="logo" width={160}
                    heigth={32} loading="lazy"/>
             </Link>

             <nav>
                    <ul className="flex text-white gap-x-6 text-lg">
                              <li className="group">
                                        <Link to="/">Home
                                        </Link>
                                        <div className="w-full h-[2px] bg-white opacity-0 transition-all duration-200
                                         group-hover:opacity-100 mt-3 " ></div>
                              </li>
                              <li className="group">
                                        <Link to="/">About</Link>
                                        <div className="w-full h-[2px] bg-white opacity-0 transition-all duration-200
                                         group-hover:opacity-100 mt-3 " ></div>
                              </li>
                              <li className="group" >
                                        <Link to="/">Contact</Link>
                                        <div className="w-full h-[2px] bg-white opacity-0 transition-all duration-200
                                         group-hover:opacity-100 mt-3 " ></div>
                              </li>
                    </ul>
             </nav>

             <div className="flex items-center gap-x-4">
                    {  !isLoggedIn &&
                              <Link to="/login" >
                                        <button className="bg-richblack-700 text-white py-[8px] px-[12px]
                                        rounded-[8px] hover:border-b-2 ">Log In</button>
                              </Link>
                    }
                    
                    { !isLoggedIn &&
                              <Link to="/signup" >
                                        <button  className="bg-richblack-700 text-white py-[8px] px-[12px]
                                        rounded-[8px] hover:border-b-2 ">Sign Up</button>
                              </Link>
                    }
                    
                    { isLoggedIn &&
                              <Link to="/" onClick={()=>{
                                   setIsLoggedIn(false);
                                   toast.success("Logged Out");      
                              }}>
                                        <button  className="bg-richblack-700 text-white py-[8px] px-[12px]
                                        rounded-[8px] hover:border-b-2 ">Log Out</button>
                              </Link>
                    }
                    
                    {  isLoggedIn &&
                              <Link to="/dashboard" >
                                        <button  className="bg-richblack-700 text-white py-[8px] px-[12px]
                                        rounded-[8px] hover:border-b-2 ">Dashboard</button>
                              </Link>
                    }
             </div>
          </div>
   )
}
export default Navbar;