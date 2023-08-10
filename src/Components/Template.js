 import React from "react"
 import frame from "../assets/frame.png"  
 import SignupForm from "./SignupForm"
 import LoginForm from "./LoginForm"
 import {FcGoogle} from "react-icons/fc"
 const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) =>{
     return(
          <div className="flex justify-between w-11/12 max-w-[1160px] gap-x-12 gap-y-0 py-2 mx-auto">
                    <div className="max-w-[450px] w-11/12">
                              <h1 className="font-semibold text-white text-[1.475rem] leading-[2.3rem]">{title}</h1>
                              <p className="leading-[1.625rem] text-[1.125rem] mt-2">
                                        <span className="text-richblack-100">{desc1}</span>
                                        <br />
                                        <span className="text-blue-100 italic">{desc2}</span>
                              </p>
                  
                           {formtype ==="signup" ?(<SignupForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                           <div className="flex w-full my-4 items-center gap-x-2">
                              <div className="w-full h-[1px] bg-richblack-700 "></div>
                              <p className="text-richblack-200 font-medium leading-[1.375rem]">Or</p>
                              <div  className="w-full h-[1px] bg-richblack-700 "></div>
                           </div>

                           <button className="flex items-center w-full justify-center rounded-[8px] text-richblack-100
                           font-medium border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-3 hover:border-richblack-200"
                           >
                              <FcGoogle/>
                              Sign up with Google</button>

                    </div>

                    <div className="realtive max-w-[450px] w-11/12">
                              <img src={frame}
                              width={450}
                              heigth={400}
                              loading="lazy"
                              className="absolute top-28 right-40"
                              />

                              <img src={image}
                              alt="student"
                              width={450}
                              height={400}
                              loading="lazy"
                              className="absolute top-24 "
                              />
                    </div>
          </div>
     )
 }
 export default Template;