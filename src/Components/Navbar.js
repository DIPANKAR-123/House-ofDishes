import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Toaster } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch,useSelector } from "react-redux";
import { setUser } from "../store/reducers/userSlice";
import toast from 'react-hot-toast'

function Navbar(props) {
   
    // const isLoggedIn=props.isLoggedIn;
    // const setIsLoggedIn=props.setIsloggedIn;
    // const [isLoggedIn,setIsLoggedIn] =useState(props.isLoggedIn);
    const dispatch = useDispatch();
    const userData= useSelector((state) => state.user.userData);
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();
    dispatch(setUser(user));
    
    function check(){
        toast.success("hiji");
    }
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <h1 className='text-white text-xl bold'>House of Dishes</h1>
            {/* <img src={logo} alt="logo" width={160} height={32} /> */}
        </Link>

        <nav>
            <ul className='text-white flex gap-x-6 text-xl'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* 4 button  */}
           {/* {check()} */}
           

           { console.log("hiki")}
            {/* {console.log(isLoggedIn)} */}
            {console.log("hanji logged in")}
             <div className="flex items-center gap-x-4 text-richblack-100">
        {!userData && (
          
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white"  onClick={() => loginWithRedirect()}>Log In</button>
        )}
        {!userData && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white">
              Sign Up
            </button>
          </Link>
        )}
        {userData && (
          
            
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
          
        )}
        {userData && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-white">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar