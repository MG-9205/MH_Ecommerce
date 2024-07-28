import useUser from "@/customHooks/useUser";
import { setUserState } from "@/store/feature/UserSlice";
import { useAppDispatch } from "@/store/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch=useAppDispatch()
  const {Login}=useUser()
  const [LoginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  const [Error, setError] = useState("");


  const Navigate = useNavigate();

  const handleLogin = async (event:any) => {
    event.preventDefault();
    const user=await Login(LoginData.Email,LoginData.Password)
       if(!user){
        setError('no user found incorrect Email and password')
        return
       }else{
        setError('')
        dispatch(setUserState({
          Name:user.name,
          Email:LoginData.Email,
          id:user.id
        })
      )
      Navigate('/')
       }
      
    
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="flex justify-center items-center flex-col border-2 w-[85vw] md:w-[420px] pb-5 rounded-[10px] ">
          <div className="w-full  flex flex-col justify-end  pb-20 mb-7 bg-custom_shade4 rounded-br-[150px] ">
            <div className="w-full flex flex-col  items-start ml-5 mt-2 ">
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Welcome
              </p>
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Back
              </p>
              <p className="text-xm font-medium text-white mt-4 z-10 text-left">
                Please sign-in to continue!
              </p>
            </div>
          </div>

          <div className="w-[80vw] md:w-[400px]  flex flex-col items-center mt-10 mx-3">
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Enter the Email"
                name="Email"
                value={LoginData.Email}
                onChange={(e) =>
                  setLoginData({
                    ...LoginData,
                    [e.target.name]: [e.target.value],
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-primary"
              />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={LoginData.Password}
                onChange={(e) =>
                  setLoginData({
                    ...LoginData,
                    [e.target.name]: [e.target.value],
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-primary"
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
              onClick={(e) => handleLogin(e)}
            >
              Signin
            </button>
            <span className="text-[1.3rem] text-gray-400 font-medium ">
              Don't have an accoun?
              <Link
                to="/SignUp"
                className="text-[1.2rem] text-primary font-medium underline border-b border-dashed pl-2"
              >
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
