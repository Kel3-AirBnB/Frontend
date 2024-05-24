import { Link, useNavigate } from "react-router-dom";
import signup from "../assets/sign-up.png";
// import { useAuth } from "@/utils/contexts/auth";
import { LoginType, loginSchema } from "@/utils/apis/login/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogin } from "@/utils/apis/login/api";

const Login = () => {
  const navigate = useNavigate();
  // const { changeToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (body: LoginType) => {
    // console.log(body);
    try {
      const result = await userLogin(body);
      console.log(result);
      navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center py-12">
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center justify-center gap-5 w-[40%]">
        <Link to="/" aria-label="homepage" title="Booking" className="inline-flex items-center bg-transparent">
          <svg className="w-8 text-red-700" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} stroke="#b91c1c" fill="none">
            <rect x={3} y={1} width={7} height={12} />
            <rect x={3} y={17} width={7} height={6} />
            <rect x={14} y={1} width={7} height={6} />
            <rect x={14} y={11} width={7} height={12} />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-red-700 uppercase"> Booking</span>
        </Link>
        <h1 className="font-semibold text-xl">Sign in</h1>
        <div className="w-4/5">
          <label htmlFor="email">Email Address</label> <br />
          <input type="email" id="email" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" placeholder="name@mail.com" {...register("email")} disabled={isSubmitting} aria-disabled={isSubmitting} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="w-4/5">
          <label htmlFor="password">Password</label> <br />
          <input type="password" id="password" className="w-full border border-gray-300 rounded-md h-10 focus:outline-none p-2" placeholder="**********" {...register("password")} disabled={isSubmitting} aria-disabled={isSubmitting} />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <button className="w-4/5 p-3 rounded-full bg-red-800 text-white hover:bg-red-900" disabled={isSubmitting} aria-disabled={isSubmitting}>
          Sign in
        </button>
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
