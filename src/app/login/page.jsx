"use client"
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { AppContext } from "@/context/ContextMenu";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";

const Login = () =>{


  const[togglePsaa , setTogglePass] = useState(false)
  const {setIsHideSliderAndHeader , login} = useContext(AppContext)
  const router = useRouter();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("1234");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsHideSliderAndHeader(true);
    return () => setIsHideSliderAndHeader(false); 
  }, []);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async () => {

    if (!isValidEmail(email)) {
      alert("Please enter a valid email!");
      return;
    }
    if (password.length < 4) {
      alert("Password must be at least 4 characters.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email === "test@test.com" && password === "1234") {
        alert("Login successful ✅");
        login(); 
        router.push("/");
      } else {
       alert("Email or password is incorrect ❌");
      }
    } catch {
      alert("Server connection error");
    } finally {
      setLoading(false);
    }
  };



  return(
    <div className="flex w-full h-screen justify-center items-center border-2 flex-col" style={{background: 'url(/login_bg.jpg)'}}>
      <div className="border border-06 rounded-lg bg-01 p-5">
        <div className="flex m-2 items-center border border-06 rounded-lg px-3 py-2 group bg-white focus-within:border-03" >
          <MdEmail className="text-02 mr-3 group-focus-within:text-03" size={20}/>
          <input className="border-0 outline-0" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="enter your email" />
        </div>
        <div className="flex m-2 items-center rounded-lg px-3 py-2 group bg-white border border-06 mt-5 focus-within:border-03" onClick={()=>setTogglePass(!togglePsaa)}>
          <MdLock className="text-02 mr-2 group-focus-within:text-03" size={20}/>
          <input className="border-0 outline-0" value={password} onChange={(e) => setPassword(e.target.value)} type={`${togglePsaa === true ? 'text' : 'password'}`} placeholder="enter your password" />
          <span onClick={() => setTogglePass(!togglePsaa)} className="cursor-pointer">
            {  
              togglePsaa === true ? <IoMdEyeOff size={18}/> : <IoMdEye size={18}/>
            }
          </span>
        </div>
        <div className="flex m-2 items-center rounded-lg px-3 py-2 group bg-white border border-06 mt-5 focus-within:border-03">
          <MdVerifiedUser className="text-02 mr-2 group-focus-within:text-03" size={20}/>
          <select id="" className="text-02 outline-0 border-0 ">
            <option value="">Select User Role</option>
            <option value="">Admin</option>
            <option value="">Member</option>
            <option value="">Client</option>
            <option value="">Maneger</option>
            <option value="">Vendor</option>
          </select>
        </div>
        <div className="bg-blue-800 flex justify-center items-center px-3 py-2 mt-5 rounded-lg mx-1">
          <button className="text-white font-extrabold" onClick={handleLogin} disabled={loading}>{loading ? "loading..." : "ENTER"}</button>
        </div>
        <div className="mt-5 text-center">
          <Link href='/forgotpassword'>
            <h4 className="text-02 text-sm hover:border-b hover:border-02 inline-block">FORGOT PASSWORD</h4>
          </Link>
        </div>
        <div className="relative w-full mt-5 flex justify-center items-center after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-full after:h-0.5 after:bg-06">
          <span className="relative z-10 bg-01 w-9 h-9 text-02 rounded-full flex justify-center items-center border border-06">or</span>
        </div>
        <div className="bg-08 rounded-lg flex justify-center items-center px-3 py-2 mt-5 mx-1">
          <button className="text-white font-normal flex items-center"><SlSocialTwitter className="mr-1" size={20}/> Continue with Twitter</button>
        </div>
        <div className="bg-blue-600 rounded-lg flex justify-center items-center px-3 py-2 mt-5 mx-1">
          <button className="text-white font-normal flex items-center"><FiFacebook className="mr-1" size={20}/> Continue with Facebook</button>
        </div>
      </div>
      <div className="border-06 border rounded-lg bg-01 mt-4 px-9 py-4">
        <div className="flex">
          <h5 className="text-02">Don't have an account?</h5>
            <Link href='/signUp'>
              <h3 className="text-blue-800 ml-2">Register</h3>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Login