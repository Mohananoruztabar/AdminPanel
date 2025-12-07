"use client"
import React , {useState , useEffect , useContext} from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { AppContext } from "@/context/ContextMenu";


const ForgotPassword = () =>{
    const[togglePsaa , setTogglePass] = useState(false)
    const[toggleConfig , setToggleConfig] = useState(false)
    const {setIsHideSliderAndHeader} = useContext(AppContext)
    useEffect(()=>{
        setIsHideSliderAndHeader(true);
    },[])

    
    
    
        return(
            <div className="flex w-full h-screen justify-center items-center border-2 flex-col" style={{background: 'url(/login_bg.jpg)'}}>
                <div className="border border-06 rounded-lg bg-01 p-5">
                    <div className="flex m-2 mt-5 items-center border border-06 rounded-lg px-3 py-2 group bg-white focus-within:border-03" >
                        <MdEmail className="text-02 mr-3 group-focus-within:text-03" size={20}/>
                        <input className="border-0 outline-0" type="text" placeholder="enter your email" />
                    </div>
                    <div className="bg-blue-800 flex justify-center items-center px-3 py-2 mt-5 rounded-lg mx-1">
                        <button className="text-white font-extrabold">Get Link</button>
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

export default ForgotPassword