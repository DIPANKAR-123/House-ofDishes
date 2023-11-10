import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

function Dashboard() {
  const userData= useSelector((state) => state.user.userData);
  const { user, isAuthenticated, isLoading } = useAuth0();
console.log("reduxuser", userData)


  return (
    <div className='flex flex-col gap-8 justify-center items-center text-white text-3xl h-full'>
   <div>Welcome  {userData.name}  to House of Dishes
    </div>
    <span className='text-blue-100 italic'>Where Every Meal Tells a Delicious Story!</span>
    <div>
 
    This is Dashboard section 
    </div>
    <div>
    <h2>Email id: {userData.email}</h2>
  

    </div>

      </div>
  )
}

export default Dashboard