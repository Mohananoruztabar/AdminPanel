"use client"
import React, { useContext, useState , useEffect, useRef} from "react";
import { AppContext } from "@/context/ContextMenu";
import { IoHomeOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdFeed } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdHotelClass } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import img1 from "../../../public/avatar-1-a2938076.jpg"


const UserProfile = () =>{

    const {isToggleSidebar, toggleSidebar,setIsHideSliderAndHeader, themeMode } = useContext(AppContext)
    const tagref = useRef([])

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);

    const [openmenu , setOpenmenu] = useState(null)

    const handelClick = (id) =>{

        const defaultColor = themeMode ? "white" : "#112143";

        setOpenmenu(item => item == id ? null : id)

        tagref.current[id].style.background = "#22c55e"

        setTimeout(() => {
            tagref.current[id].style.background = defaultColor 
        }, 200);
    }




    return(
        <div className={`min-h-screen pt-20 px-6 dark:bg-12 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
            <div className="flex text-02 dark:text-04 mt-4">
                <h4 className="">Users</h4>
                <span className="border-l border-06 ml-2"></span>
                <IoHomeOutline className="ml-2" size={20} />
                <MdChevronRight className="ml-2" size={25} />
                <h4>User Profile</h4>
            </div>
            <section className="flex mt-10 gap-4 pb-10">
                <div className="w-1/3 bg-white dark:bg-11 rounded-lg p-3 pb-20">
                   <div className="flex items-center justify-between relative">
                        <h3 className="text-02 dark:text-04 font-semibold">User_information</h3>
                        <IoIosMore className="text-02 dark:text-10" ref={el => tagref.current[1] = el} onClick={()=>handelClick(1)} size={25}/>
                        {
                            openmenu == "1"  && 
                                (
                                    <ul className="absolute shadow-2xl z-30 top-7 right-0 bg-white p-1 rounded-lg dark:bg-12 cursor-pointer">
                                        <li className="flex text-02 gap-2 py-1 px-1 pe-4 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdEdit size={18}/>
                                            <h3 className="text-sm">Edit</h3>
                                        </li>
                                        <li className="flex text-02 gap-2 py-1 px-1 pe-4 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdDelete size={18}/>
                                            <h3 className="text-sm">Delet</h3>
                                        </li>
                                        <li className="flex text-02 gap-2 py-1 px-1 pe-4 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdDownload size={18}/>
                                            <h3 className="text-sm">Downloads</h3>
                                        </li>
                                    </ul>
                                )
                            }
                    </div>
                    <div className="flex relative mt-8 mx-2">
                        <img className="w-14 h-14 rounded-full" src={img1.src} alt="" />
                        <span className="w-16 h-16 rounded-full border-2 border-blue-600 absolute -top-1 -left-1"></span>
                        <div className="ml-3 flex flex-col justify-center">
                            <h3 className="font-semibold dark:text-04">Tahmina Bonny</h3>
                            <p className="text-xs text-02 dark:text-10">@tahminaconer</p>
                        </div>
                    </div>
                    <div className="flex mt-5 gap-2 mx-2">
                        <h3 className="text-02 font-semibold dark:text-04">Communication</h3>
                        <span className="h-[0.5px] w-full bg-07 block mt-4"></span>
                    </div>
                    <ul className="mt-8 mx-2">
                        <li className="flex gap-3 my-2">
                            < BiSolidPhoneCall className="text-blue-600" size={22}/>
                            <h4 className="text-02 dark:text-10 text-sm">+91 987-654-3210</h4>
                        </li>
                        <li className="flex gap-3 my-2">
                            <MdFeed className="text-blue-600" size={22}/>
                            <h4 className="text-02 dark:text-10 text-sm">demo@example.com</h4>
                        </li>
                        <li className="flex gap-3 my-2">
                            <MdPublic className="text-blue-600" size={22}/>
                            <h4 className="text-02 dark:text-10 text-sm">examplehotash.com</h4>
                        </li>
                        <li className="flex gap-3 my-2">
                            <FaMap className="text-blue-600" size={22}/>
                            <h4 className="text-02 dark:text-10 text-sm">1Hd- 50, 010 Avenue, NY 90001 United States</h4>
                        </li>
                    </ul>
                    <div className="flex mt-5 gap-2 mx-2">
                        <h3 className="text-02 font-semibold dark:text-04">Biography</h3>
                        <span className="h-[0.5px] w-full bg-07 block mt-4"></span>
                    </div>
                    <p className="mt-5 text-02 dark:text-10 text-sm mx-2 leading-6">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                    <div className="flex mt-5 gap-2 mx-2">
                        <h3 className="text-02 font-semibold dark:text-04">Elsewhere</h3>
                        <span className="h-[0.5px] w-full bg-07 block mt-4"></span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <button className="flex justify-center gap-1 items-center text-sm text-white px-3 py-2 bg-blue-800 rounded-lg">
                            <FaFacebookF />
                            Facebook
                        </button>
                        <button className="flex justify-center gap-1 items-center text-sm text-white px-3 py-2 bg-blue-400 rounded-lg">
                            <FaTwitter />
                            Twitter
                        </button>
                         <button className="flex justify-center gap-1 items-center text-sm text-white px-3 py-2 bg-blue-600 rounded-lg">
                            <IoLogoLinkedin />
                            Linkedin
                        </button>
                         <button className="flex justify-center gap-1 items-center text-sm text-white px-3 py-2 bg-green-400 rounded-lg">
                            <IoLogoWhatsapp />
                            Facebook
                        </button>
                         <button className="flex justify-center gap-1 items-center text-sm text-white px-3 py-2 bg-red-600 rounded-lg">
                            <FaYoutube />
                            You Tube
                        </button>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="grid grid-cols-3 gap-3">
                       <div className="bg-purple-500 rounded-lg p-4 relative">
                            <h4 className="text-white text-2xl font-semibold">5789</h4>
                            <p className="mt-2 text-white">total_orders</p>
                            <MdShoppingCart className="absolute -top-5 right-0 text-purple-300" size={50}/>
                        </div>
                        <div className="bg-yellow-400 rounded-lg p-4 relative">
                            <h4 className="text-white text-2xl font-semibold">2373</h4>
                            <p className="mt-2 text-white">total_reviews</p>
                            <MdHotelClass className="absolute -top-5 right-0 text-yellow-300" size={50}/>
                        </div>
                        <div className="bg-green-400 rounded-lg p-4 relative">
                            <h4 className="text-white text-2xl font-semibold">7893</h4>
                            <p className="mt-2 text-white">total_products</p>
                            <MdShoppingBag className="absolute -top-5 right-0 text-green-300" size={50}/>
                        </div>
                    </div>
                    <section className="bg-white dark:bg-11 rounded-lg p-3 mt-4">
                        <div className="flex items-center justify-between relative">
                            <h3 className="text-02 dark:text-04 font-semibold">Recent Activities</h3>
                            <IoIosMore className="text-02 dark:text-10" ref={el => tagref.current[2] = el} onClick={()=>handelClick(2)} size={25}/>
                            {
                                openmenu == "2"  && 
                                (
                                    <ul className="absolute shadow-2xl z-30 top-7 right-0 bg-white p-1 rounded-lg dark:bg-12 cursor-pointer">
                                        <li className="flex cursor-pointer text-02 gap-2 py-1 px-3 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdEdit size={20}/>
                                            <h3>Edit</h3>
                                        </li>
                                        <li className="flex text-02 cursor-pointer gap-2 py-1 px-3 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdDelete size={20}/>
                                            <h3>Delet</h3>
                                        </li>
                                        <li className="flex text-02 cursor-pointer gap-2 py-1 px-3 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdDownload size={20}/>
                                            <h3>Download</h3>
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                        <ul className="mt-5 mx-2">
                            <li className="border-l border-dashed border-l-06 px-4 after:content-[''] after:w-3 after:h-3 after:absolute after:bg-02 after:rounded-full after:top-0 after:-left-2 relative hover:after:bg-blue-600 hover:after:shadow-2xs">
                                <div className="flex gap-2 items-center">
                                    <h4 className="whitespace-nowrap text-gray-600 dark:text-04">Your account is logged in</h4>
                                    <span className="bg-07 h-[0.5px] w-full"></span>
                                    <p className="text-sm whitespace-nowrap text-02 dark:text-10">45 min ago</p>
                                </div>
                                <div>
                                    <p className="text-02 font-light mt-2 dark:text-10">Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.</p>
                                    <div className="flex relative my-5 mx-2 gap-2 items-center">
                                        <img className="w-10 h-10 rounded-full" src={img1.src} alt="" />
                                        <h3 className="font-semibold dark:text-04 text-02 text-sm">Tahmina Bonny</h3>
                                    </div>
                                </div>
                            </li>
                            <li className="border-l border-dashed border-l-06 px-4 after:content-[''] after:w-3 after:h-3 after:absolute after:bg-02 after:rounded-full after:top-0 after:-left-2 relative hover:after:bg-blue-600 hover:after:shadow-2xs">
                                <div className="flex gap-2 items-center">
                                    <h4 className="whitespace-nowrap text-gray-600 dark:text-04">Current language has been changed</h4>
                                    <span className="bg-07 h-[0.5px] w-full"></span>
                                    <p className="text-sm whitespace-nowrap text-02 dark:text-10">24 hr ago</p>
                                </div>
                                <div>
                                    <p className="text-02 font-light mt-2 dark:text-10">Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    )
}
export default UserProfile