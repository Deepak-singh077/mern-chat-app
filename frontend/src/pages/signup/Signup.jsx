import React from 'react'
import GenderCheck from './GenderCheck'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-centermin-w-96 mx-auto' >
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >

        <h1 className='text-3xl font-semibold text-center text-gray-300' >Sign Up
          <span className='text-blue-300' > ChatApp</span>
        </h1>

        <form >
          <div className=''>
          <label  className="label p-2 " >
              <span className=" text-base label-text ">Fullname</span>
            </label>
            <input type="text"  placeholder="Enter Fullname" className="w-full input input-bordered h-10"/>
          </div>
          <div>
            <label  className="label p-2 " >
              <span className=" text-base label-text ">Username</span>
            </label>
          <input type="text"  placeholder="Enter Username" className="w-full input input-bordered h-10"/>
          </div>
          <div>
          <label  className="label" >
              <span className="text-base label-text">Password</span>
            </label>
            <input type="text"  placeholder="Enter Password" className="w-full input input-bordered h-10"/>
          </div>
         
          <div>
          <label  className="label" >
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="text"  placeholder="Confirm Password" className="w-full input input-bordered h-10"/>
        
        
          </div>

          <GenderCheck/>
          <a className=' text-sm hover:underline hover:text-blue-600 mt-2 inline-block ' href='#'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' >Sign Up</button>
          </div>
        </form>
      </div>
        
    </div>
  )
}

export default Signup