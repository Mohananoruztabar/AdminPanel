"use client"
import React, { useEffect, useState , useContext } from "react"
import Container from "@/component/Container"
import { IoHomeOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { AppContext } from "@/context/ContextMenu";
import img1 from "../../../public/avatar-1-a2938076.jpg"
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineVerified } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdAddModerator } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";


const MyAccount = () =>{

    const [connectionChecked, setConnectionChecked] = useState(false);
    const [messageChecked, setMessageChecked] = useState(false);
    const [membershipChecked, setMembershipChecked] = useState(false);
    const [tipsChecked, setTipsChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [active, setActive] = useState(1);
    const [togglePass , setTogglePass] = useState(false)
    const [newPass , setNewPass] = useState(false)
    const [confiPass , setConfiPass] = useState(false)
    const {isToggleSidebar, toggleSidebar , setIsHideSliderAndHeader, themeMode } = useContext(AppContext) 
    const [openBtn , setOpenBtn] = useState(1)

    const handelclick = (id) =>{
        setOpenBtn(prev => prev == id ? 1 : id)
        setActive(id);  
    }

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);
    

    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-5">
                    <h4 className="">User</h4>
                    <span className="border-l border-06 ml-2"></span>
                    <IoHomeOutline className="ml-2" size={20} />
                    <MdChevronRight className="ml-2" size={25} />
                    <h4>My Account</h4>
                </div>
                <section className="mt-5 my-16 bg-white dark:bg-11 p-3 rounded-lg">
                    <ul className="flex">
                        <li>
                            <button className={`px-4 py-2 rounded cursor-pointer ${active === 1 ? "bg-blue-500 text-white" : 'text-black dark:text-white bg-white dark:bg-11'}`}
                                onClick={() => handelclick(1)}>Edit Profile
                            </button>
                        </li>
                        <li className="ml-4">
                            <button className={`px-4 py-2 rounded cursor-pointer ${active === 2 ? "bg-blue-500 text-white" : 'text-black dark:text-white bg-white dark:bg-11'}`}
                                onClick={() => handelclick(2)}>Change Password
                            </button>
                        </li>
                        <li className="ml-4">
                            <button className={`px-4 py-2 rounded cursor-pointer ${active === 3 ? "bg-blue-500 text-white" : 'text-black dark:text-white bg-white dark:bg-11'}`}
                                onClick={() => handelclick(3)}>Other Settings
                            </button>
                        </li>
                    </ul>
                    {
                        openBtn == 1 &&
                        (
                            <div className="m-8 p-5 ">
                                <div className="flex items-center gap-2">
                                    <h3 className="whitespace-nowrap text-02 dark:text-04 font-extrabold">Public InFormation</h3>
                                    <span className="bg-07 w-full h-[0.5px]"></span>
                                </div>
                                <div className="m-8 flex">
                                    <div className="w-1/3">
                                        <figure className="relative after:absolute after:w-32 after:h-32 after:content-[''] after:rounded-full after:-top-1 after:-left-1 after:border-blue-600 after:border-2">
                                            <img className="w-30 h-30 rounded-full" src={img1.src} alt="" />
                                        </figure>
                                        <div className="flex items-center gap-2 mt-4">
                                            <input id="fileUpload" type="file" className="hidden"/>
                                            <label htmlFor="fileUpload" className="flex bg-01 dark:bg-bgHover items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer">
                                                <IoMdCloudUpload className="text-02 dark:text-10" size={22}/>
                                                <span className="text-02 dark:text-10">Upload</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex justify-between">
                                            <fieldset className="border group border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                                <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Fullname</legend>
                                                <input type="text" className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="Tahmina Bonny" />
                                            </fieldset>
                                            <fieldset className="border group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                                <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Username</legend>
                                                <input type="text" className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="@tahminaconer" />
                                            </fieldset>
                                        </div>
                                        <fieldset className="border group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover mt-5">
                                            <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Biograpy</legend>
                                            <textarea name="" className="outline-0 w-full mt-1 px-2 py-2 dark:text-10 text-02 font-semibold rounded-lg h-24" defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"></textarea>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="whitespace-nowrap text-02 dark:text-04 font-extrabold">Private InFormation</h3>
                                    <span className="bg-07 w-full h-[0.5px]"></span>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <fieldset className="border group border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Unique Id</legend>
                                        <input type="text" className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="#783404edft97e3445" />
                                    </fieldset>
                                    <fieldset className="border group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Role</legend>
                                        <select className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="" id="">
                                            <option value="" disabled>select option</option>
                                            <option value="">member</option>
                                            <option value="">admin</option>
                                            <option value="">vendor</option>
                                            <option value="">founder</option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="border group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Status</legend>
                                        <select className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="" id="">
                                            <option value="" disabled>select option</option>
                                            <option value="">approved</option>
                                            <option value="">pending</option>
                                            <option value="">blocked</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <fieldset className="border group border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Email</legend>
                                        <input type="text" className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="demo@example.com" />
                                    </fieldset>
                                    <fieldset className="border group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Phone</legend>
                                        <input type="text" className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="+8801838288389" />
                                    </fieldset>
                                    <fieldset className="border group border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Website</legend>
                                        <input type="text" className="outline-0 w-72 mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="https://mironmahmud.com/" />
                                    </fieldset>
                                </div>
                                <fieldset className="border group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover mt-5">
                                    <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Address</legend>
                                    <textarea name="" className="outline-0 w-full mt-1 px-2 py-2 dark:text-10 text-02 font-semibold rounded-lg h-24" defaultValue="3379  Monroe Avenue, Fort Myers, Florida(33912)"></textarea>
                                </fieldset>
                                <div className="flex items-center gap-2 mt-8">
                                    <h3 className="whitespace-nowrap text-02 dark:text-04 font-extrabold">Private InFormation</h3>
                                    <span className="bg-07 w-full h-[0.5px]"></span>
                                </div>
                                <div className="flex mt-5 gap-6">
                                    <fieldset className="border w-full group border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Facebook</legend>
                                        <input type="text" className="outline-0 w-full mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="https://example.com/" />
                                    </fieldset>
                                    <fieldset className="border w-full group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Twitter</legend>
                                        <input type="text" className="outline-0 w-full mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="https://example.com/" />
                                    </fieldset>
                                </div>
                                <div className="flex gap-6 mt-5">
                                    <fieldset className="border w-full group border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Linkedin</legend>
                                        <input type="text" className="outline-0 w-full mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="https://example.com/" />
                                    </fieldset>
                                    <fieldset className="border w-full group dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Instagram</legend>
                                        <input type="text" className="outline-0 w-full mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="@tahminaconer" />
                                    </fieldset>
                                </div>
                                <div className="flex mt-5 gap-6">
                                    <fieldset className="border group w-full border-06 dark:border-02 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">Youtube</legend>
                                        <input type="text" className="outline-0 w-full mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="https://example.com/" />
                                    </fieldset>
                                    <fieldset className="border group w-full dark:border-02 border-06 focus-within:border-blue-600 rounded-lg px-4 bg-01 dark:bg-bgHover">
                                        <legend className="text-02 group-focus-within:text-blue-600 dark:text-04 text-sm">pinterest</legend>
                                        <input type="text" className="outline-0 w-full mt-1 px-2 dark:text-10 py-2 text-02 font-semibold rounded-lg" defaultValue="https://example.com/" />
                                    </fieldset>
                                </div>
                                <button className="bg-blue-600 px-6 py-3 my-16 gap-2 rounded-lg flex items-center justify-center text-white">
                                    <MdOutlineVerified className="text-white" size={20}/>
                                    Save Changes
                                </button>
                            </div>
                        )
                    }
                    {
                        openBtn == 2 &&
                        (
                            <div className="m-8 p-5">
                                <div className="flex items-center gap-2">
                                    <h3 className="whitespace-nowrap text-02 dark:text-04 font-extrabold">Generate Password</h3>
                                    <span className="bg-07 w-full h-[0.5px]"></span>
                                </div>
                                <div className="flex m-2 items-center dark:border-02 rounded-lg px-3 py-2 group bg-white border dark:bg-12 border-06 mt-8 focus-within:border-blue-600">
                                    <MdLock className="text-02 mr-2 group-focus-within:text-blue-600 dark:text-10" size={20}/>
                                    <input className="border-0 outline-0 w-full placeholder:text-02" type={`${togglePass === true ? 'text' : 'password'}`} placeholder="current password" />
                                    <span onClick={() => setTogglePass(!togglePass)} className="cursor-pointer dark:text-10">
                                        {togglePass === true ? <IoMdEye size={18}/> : <IoMdEyeOff size={18}/>}
                                    </span>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex m-2 dark:border-02 items-center rounded-lg px-3 py-2 group dark:bg-12 bg-white border border-06 mt-5 focus-within:border-blue-600">
                                        <MdAddModerator className="text-02 mr-2 group-focus-within:text-blue-600 dark:text-10" size={20}/>
                                        <input className="border-0 outline-0 w-full placeholder:text-02" type={`${newPass === true ? 'text' : 'password'}`} placeholder="new password" />
                                        <span onClick={() => setNewPass(!newPass)} className="cursor-pointer dark:text-10">
                                           {newPass === true ? <IoMdEye size={18}/> : <IoMdEyeOff size={18}/>}
                                        </span>
                                    </div>
                                    <div className="flex m-2 dark:border-02 items-center rounded-lg px-3 py-2 group dark:bg-12 bg-white border border-06 mt-5 focus-within:border-blue-600">
                                        <MdVerifiedUser className="text-02 mr-2 group-focus-within:text-blue-600 dark:text-10" size={20}/>
                                        <input className="border-0 outline-0 w-full dark:text-10 placeholder:text-02" type={`${confiPass === true ? 'text' : 'password'}`} placeholder="confirm password" />
                                        <span onClick={() => setConfiPass(!confiPass)} className="cursor-pointer dark:text-10">
                                           {confiPass === true ? <IoMdEye size={18}/> : <IoMdEyeOff size={18}/>}
                                        </span>
                                    </div>
                                </div>
                                <button className="bg-blue-600 px-6 py-3 my-16 gap-2 rounded-lg flex items-center justify-center text-white">
                                    <MdOutlineVerified className="text-white" size={20}/>
                                    Save Changes
                                </button>
                            </div>
                        )
                    }
                    {
                        openBtn == 3 && 
                        (
                            <div className="m-8 p-5">
                                <div className="flex items-center gap-2">
                                    <h3 className="whitespace-nowrap text-02 dark:text-04 font-semibold">Activity Email Settings</h3>
                                    <span className="bg-07 w-full h-[0.5px]"></span>
                                    <h3 className="whitespace-nowrap text-02 dark:text-04 font-semibold">Product Email Settings</h3>
                                    <span className="bg-07 w-full h-[0.5px]"></span>
                                </div>
                                <div className="mt-8 flex gap-2">
                                    <div className="w-1/2">
                                        <label className="flex items-center gap-4 cursor-pointer py-2">
                                            <input type="checkbox" className="hidden" checked={connectionChecked} onChange={() => setConnectionChecked(!connectionChecked)}/>
                                            <div className={`w-12 h-6 rounded-full relative transition-all ${connectionChecked ? 'bg-blue-600' : 'bg-gray-400'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${connectionChecked ? 'left-7' : 'left-1'}`}></div></div>
                                            <span className="dark:text-10">Someone adds you as a connection</span>
                                        </label>
                                        <label className="flex items-center gap-4 cursor-pointer py-2">
                                            <input type="checkbox" className="hidden" checked={messageChecked} onChange={() => setMessageChecked(!messageChecked)}/>
                                            <div className={`w-12 h-6 rounded-full relative transition-all ${messageChecked ? 'bg-gray-400' : 'bg-blue-600'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${messageChecked ? 'left-1' : 'left-7'}`}></div></div>
                                            <span className="dark:text-10">you're sent a direct message</span>
                                        </label>
                                        <label className="flex items-center gap-4 cursor-pointer py-2">
                                            <input type="checkbox" className="hidden" checked={membershipChecked}  onChange={() => setMembershipChecked(!membershipChecked)}/>
                                            <div className={`w-12 h-6 rounded-full relative transition-all ${membershipChecked ? 'bg-blue-600' : 'bg-gray-400'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${membershipChecked ? 'left-7' : 'left-1'}`}></div></div>
                                            <span className="dark:text-10">New membership approval</span>
                                        </label>
                                        <label className="flex items-center gap-4 cursor-pointer py-2">
                                            <input type="checkbox" className="hidden" checked={tipsChecked} onChange={() => setTipsChecked(!tipsChecked)}/>
                                            <div className={`w-12 h-6 rounded-full relative transition-all ${tipsChecked ? 'bg-blue-600' : 'bg-gray-400'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${tipsChecked ? 'left-7' : 'left-1'}`}></div></div>
                                            <span className="dark:text-10">Tips on getting more out of PCT-themes</span>
                                        </label>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="flex items-center gap-2 cursor-pointer py-2">
                                            <input type="checkbox" className="w-4 h-4"/>
                                            <span className="dark:text-10">Someone adds you as a connection</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer py-2">
                                            <input type="checkbox" className="w-4 h-4"/>
                                            <span className="dark:text-10">you're sent a direct message</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer py-2">
                                            <input type="checkbox" className="w-4 h-4"/>
                                            <span className="dark:text-10">New membership approval</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer py-2">
                                            <input type="checkbox" className="w-4 h-4"/>
                                            <span className="dark:text-10">Send Copy To Personal Email</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </Container>
    )
}
export default MyAccount