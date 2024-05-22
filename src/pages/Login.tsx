import { Link } from "react-router-dom";
import signup from "../assets/sign-up.png";

const Login = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <form className="flex flex-col items-center justify-center gap-5 w-[40%]">
        <h1 className="font-semibold text-2xl">Sign up</h1>
        <div className="w-4/5">
          <label htmlFor="email">Email Address</label> <br />
          <input type="email" id="email" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" />
        </div>
        <div className="w-4/5">
          <label htmlFor="password">Password</label> <br />
          <input type="password" id="password" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" />
        </div>
        <button className="w-4/5 p-3 rounded-full bg-red-800 text-white hover:bg-red-900">Sign in</button>
        <div className="w-4/5 relative">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
          </div>
        </div>
        <Link to="/register" className="w-4/5 p-3 rounded-full bg-gray-400 text-center text-white hover:bg-red-900">
          Sign up
        </Link>
      </form>
      <div className="flex items-center">
        <img src={signup} alt="Sign up" />
      </div>
    </div>
  );
};

export default Login;
