
const Login = () => {
    return (
     <div className=" flex  flex-col items-center justify-center min-w-96 mx-auto" >
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
       bg-opacity-0 " >
        <h1 className=" text-3xl font-semibold text-center text-gray-200" >
         Login
          <span className="text-blue-400" >ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label  className="label p-2 " >
              <span className=" text-base label-text ">Username</span>
            </label>
          <input type="text"  placeholder="Enter Username" className="w-full input input-bordered h-10"/>
          </div>
          <div className="" >
            <label  className="label" >
              <span className="text-base label-text">Password</span>
            </label>
            <input type="text"  placeholder="Enter Password" className="w-full input input-bordered h-10"/>
          </div>

          <a href="#" className="text-sm hover:text-blue-500 mt-2 inline-block" >{"Don't"} have account?</a>
       <div>
        <button className="btn btn-block btn-sm mt-2 bg-slate-500 text-white " >Login</button>
       </div>
        </form>
      </div>

     </div>
    );
  };
  
  export default Login;
  