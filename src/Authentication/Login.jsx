import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash,  FaGithub, FaGoogle, } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { Context } from "../context/MyContextProvider";

const Login = () => {
  const { signInWithGitHub, logInUser, signInWithGoogle, setLoader, isChecked } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const googleSignIn = () => {
    signInWithGoogle()
      .then((user) => {
        console.log(user)
        setLoader(true);
        toast.success("Login with Google Successful");
        setLoader(false);
        navigate(location?.state ? location.state : "/");
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  
  const gitHubSignIn = () => {
    signInWithGitHub()
      .then(() => {
        setLoader(true);
        setLoader(false);
        toast.success("Login with GitHub Successful");
        navigate(location?.state ? location.state : "/");
        setLoader(false);
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.message);
      })
  };
  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then(() => {
        setLoader(true);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful");
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error.message);
      });
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className={`w-full my-10 mx-auto max-w-md p-8 space-y-3 rounded-xl ${isChecked ? "bg-base-200 " : "bg-base-100 text-white"}`}>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-base-content">
              Username
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              })}
              type="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300  text-base-content focus:border-violet-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="password"
              className=" text-base-content flex justify-between items-center"
            >
              <span>Password</span>
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {
                  showPassword ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
               
              </span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])/,
                  message:
                    "Password must contain at least one uppercase and one lowercase letter",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 text-base-content focus:border-violet-600"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <div className="flex justify-end text-xs text-base-content">
              <Link to="#">Forgot Password?</Link>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600"
          >
            Sign in
          </button>
        </form>
        
        <p className="text-xs text-center sm:px-6 text-base-content">
          Don’t have an account?{" "}
          <Link to="/register" className="underline text-lg text-blue-800">
            Sign up
          </Link>
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-base-content">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={googleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FaGoogle className=" size-8" />
          </button>
          <div>
            <p>Or</p>
          </div>
          <button onClick={gitHubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub className=" size-8" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;