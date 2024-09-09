import { BiLogOut } from "react-icons/bi";
import React from 'react'
import useLogout from "../../hooks/useLogout.js";

const LogOutButton = () => {

  const {loading,logout} = useLogout();
  return (
   <div className="mt-auto" >
     {!loading ? (
      <BiLogOut  className="w-6 h-8 mb-[-20px] text-white cursor-pointer"
     
      onClick={logout}
      />
     ) :(
      <span className="loading loading-spinner" ></span>
     )}
     </div>
    
  )
}

export default LogOutButton