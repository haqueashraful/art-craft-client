import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Context } from "../context/MyContextProvider";

const Register = () => {
  const { profileUpdate, registerUser, setLoader } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data.email, data.password)
      .then(() => {
        setLoader(true);
        profileUpdate(data.name, data.photo_url)
        toast.success("Register Successful");
        setLoader(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
   
    reset({
      name: "",
      photo_url: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create your account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Your Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="photo_url" className="block text-sm">
                Photo URL
              </label>
              <input
                {...register("photo_url")}
                type="text"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm w-full flex justify-between items-center"
                >
                  <span>Password</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </label>
              </div>
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
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Have an account?
          <Link to="/login" className="underline text-lg text-blue-800 hover:underline">
            Sign In here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;