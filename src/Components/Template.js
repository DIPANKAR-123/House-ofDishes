import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle } from 'react-icons/fc'
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0 h-screen'>
         
         <div className='w-11/12 max-w-[450px]' >
          <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] ' >Login please</h1>
          <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>House of Dishes</span>
            <br />
            <span className='text-blue-100 italic'>Where Every Meal Tells a Delicious Story!</span>
          </p>
          {/* {console.log(formtype)} */}
        
          {/* {if(formtype === 'signup')} */}
          
          </div>

    </div>
  )
}

export default Template