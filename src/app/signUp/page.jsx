"use client"
import React , {useState , useEffect , useContext} from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { AppContext } from "@/context/ContextMenu";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


const SignUp = () =>{


    const[togglePsaa , setTogglePass] = useState(false)
    const[toggleConfig , setToggleConfig] = useState(false)
    const {setIsHideSliderAndHeader} = useContext(AppContext)

    useEffect(()=>{
        setIsHideSliderAndHeader(true);
    },[])

    
    
    
    return(
        <div className="flex w-full h-screen justify-center items-center border-2 flex-col" style={{background: 'url(/login_bg.jpg)'}}>
            <div className="border border-06 rounded-lg bg-01 p-5">
                <div className="flex m-2 items-center border border-06 rounded-lg px-3 py-2 group bg-white focus-within:border-03" >
                    <MdAccountCircle className="text-02 mr-3 group-focus-within:text-03" size={20}/>
                    <input className="border-0 outline-0" type="text" placeholder="enter your name" />
                </div>
                <div className="flex m-2 mt-5 items-center border border-06 rounded-lg px-3 py-2 group bg-white focus-within:border-03" >
                    <MdEmail className="text-02 mr-3 group-focus-within:text-03" size={20}/>
                    <input className="border-0 outline-0" type="text" placeholder="enter your email" />
                </div>
                <div className="flex m-2 items-center rounded-lg px-3 py-2 group bg-white border border-06 mt-5 focus-within:border-03">
                    <MdLock className="text-02 mr-2 group-focus-within:text-03" size={20}/>
                    <input className="border-0 outline-0" type={`${togglePsaa === true ? 'text' : 'password'}`} placeholder="enter your password" />
                    <span onClick={() => setTogglePass(!togglePsaa)} className="cursor-pointer">
                        {togglePsaa === true ? <IoMdEye size={18}/> : <IoMdEyeOff size={18}/>}
                    </span>
                </div>
                <div className="flex m-2 items-center rounded-lg px-3 py-2 group bg-white border border-06 mt-5 focus-within:border-03">
                    <MdVerifiedUser className="text-02 mr-2 group-focus-within:text-03" size={20}/>
                    <input className="border-0 outline-0" type={`${toggleConfig === true ? 'text' : 'password'}`} placeholder="confirm your password" />
                    <span onClick={() => setToggleConfig(!toggleConfig)} className="cursor-pointer">
                        {toggleConfig === true ? <IoMdEye size={18}/> : <IoMdEyeOff size={18}/>}
                    </span>
                </div>
                <div className="flex m-2 mt-5 items-center" >
                    <input id="text1" className="mr-2" type="checkbox" />
                    <label htmlFor="text1" className="text-02 text-sm">I agree to the all Terms & Condiotions</label>
                </div> 
                <div className="bg-blue-800 flex justify-center items-center px-3 py-2 mt-5 rounded-lg mx-1">
                    <button className="text-white font-extrabold">Sign In</button>
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
                <div className="flex mt-5 mx-5">
                    <h5 className="text-02 p-3">Don't have an account?</h5>
                    <Link href='/login'>
                        <h3 className="text-blue-800 p-3">Login</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp