import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/services/SupabaseClient";

import { User } from "@/type/Types";

export default function SignUp() {
  const [signInData, setSignInData] = useState<User>({
    Name: "",
    Password: "",
    Email: "",
  });
  const [Error, setError] = useState("");

  const Navigate = useNavigate();

  const handleSignin = async (e: any) => {
    e.preventDefault();
    let { data: user } = await supabase
      .from("user_table")
      .select("name")
      .eq("email", signInData.Email);
      console.log(user)
    if (user?.length) {
      setError("email already exit");
    } else {
      let { data, error } = await supabase.auth.signInWithOtp({
        email: signInData.Email,
      });
          console.log('heelllo21')
      if (error) {
        setError('You reach to your signup limit try after 30 min')
      } else {
        console.log("hello");
        setError(`A verify email is send to the ${signInData.Email} `)
        localStorage.setItem("signUpData", JSON.stringify(signInData));
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] ">
        <div className="flex justify-center items-center flex-col border-2 w-[85vw] md:w-[420px] pb-5 rounded-[10px] ">
          <div className="w-full  flex flex-col justify-end  pb-20 mb-7 bg-custom_shade4 rounded-br-[150px] ">
            <div className="w-full flex flex-col  items-start ml-5 mt-2 ">
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Create
              </p>
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Account
              </p>
              <p className="text-xm font-medium text-white mt-4 z-10 text-left">
                Please sign-up to continue!
              </p>
            </div>
          </div>

          <div className="w-[80vw] md:w-[400px]  flex flex-col items-center mt-10 mx-3">
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Enter your name"
                name="Name"
                value={signInData.Name}
                onChange={(e) =>
                  setSignInData({
                    ...signInData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={signInData.Email}
                onChange={(e) =>
                  setSignInData({
                    ...signInData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-red-400"
              />
              <input
                type="password"
                placeholder="Password example(123#aB)"
                name="Password"
                value={signInData.Password}
                onChange={(e) =>
                  setSignInData({
                    ...signInData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-red-400"
              />
            </div>
            {Error && (
              <span className=" text-red-500 text-center font-Montserrat font-bold ">
                {Error}
              </span>
            )}
            <button
              type="submit"
              className="w-[80%] max-w-150 px-4 py-2 text-white text-base font-semibold rounded-full cursor-pointer transition duration-300 ease-in-out bg-gradient-to-r from-red-400 to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:brightness-103 my-5"
              onClick={(e) => handleSignin(e)}
            >
              SignUp
            </button>
            <span className="text-[1.3rem] text-gray-400 font-medium ">
              Already have an account?
              <Link
                to="/Login"
                className="text-[1.2rem] text-primary font-medium underline border-b border-dashed pl-2"
              >
                Signin
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
