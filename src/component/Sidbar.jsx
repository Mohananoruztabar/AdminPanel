"use client"
import React, { useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaPix } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdClass } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { MdDonutSmall } from "react-icons/md";
import { IoMdGrid } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { AppContext } from "@/context/ContextMenu";
import Link from "next/link";



const Slider = () =>{

    const {isToggleSidebar, toggleSidebar , isHideSliderAndHeader, themeMode } = useContext(AppContext)
    const [active, setActive] = useState(null);

    const handleClick = (name) => {
       setActive(prev => prev === name ? null : name);
    };
    


    return(
        <>
            { isHideSliderAndHeader !== true &&(
                <div className={`bg-white w-64 h-screen fixed top-20 left-0 dark:bg-11 max-h-[calc(100% - 80px)] overflow-y-scroll overflow-x-hidden pb-40 slider ${
                   isToggleSidebar ? '-translate-x-full' : 'translate-x-0'} transition-transform duration-300 ease-in-out`}>
                   <ul className="space-y-1">
                        <h5 className="text-06 mx-3 mt-4 mb-2 text-xs font-semibold uppercase tracking-wide dark:text-04">MAIN PAGES</h5>
                        <li className="text-02 px-2 dark:text-10">
                            <Link href=''>
                                <button className={`flex hover:bg-01 dark:hover:bg-bgHover w-full justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'dashboard' ? (themeMode ? 'bg-01' : 'bg-bgHover') : ''}`} onClick={() => handleClick('dashboard')}>
                                    <div className="flex items-center">
                                        <MdDashboard size={20} className={`mr-2 ${active === 'dashboard' ? 'text-03' : ''}`}/>
                                        <span>Dashboard</span>
                                    </div>
                                    <MdChevronRight className={`${active === 'dashboard' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18} />
                                </button>
                            </Link>
                            {
                                active === 'dashboard' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a href="/" className="hover:text-03">Ecommerce</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a href="/analytics" className="hover:text-03">Analytics</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a href="/crm" className="hover:text-03">Crm</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg  transition-all duration-200 group ${active === 'auth' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick('auth')}>
                                <div className="flex items-center">
                                    <IoMdLock size={20} className={`mr-2 ${active === 'auth' ? 'text-03' : ''}`}/>
                                    <span>Authentication</span>
                                </div>
                                <MdChevronRight className={`${active === 'auth' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18} />
                            </button>
                            {
                                active === 'auth' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a href="/login" className="hover:text-03">Loging</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a href='/signUp' className="hover:text-03">Registration</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a href="/forgotpassword" className="hover:text-03">Forgot Password</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'users' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick('users')}>
                                <div className="flex items-center">
                                    <MdAccountCircle size={20} className={`mr-2 ${active === 'users' ? 'text-03' : ''}`}/>
                                    <span className="">Users</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="bg-red-500 text-white text-xs font-bold p-1 rounded">HOT</span>
                                    <MdChevronRight className={`${active === 'users' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18}/>
                                </div>
                            </button>
                            {
                                active === 'users' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a href="/userlist" className="hover:text-03">User List</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a href='/userprofile' className="hover:text-03">User Profile</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a href="/myaccount" className="hover:text-03">My Account</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'product' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick('product')}>
                                <div className="flex items-center">
                                    <FaPix size={20} className={`mr-2 ${active === 'product' ? 'text-03' : ''}`}/>
                                    <span>Products</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="bg-purple-400 text-white text-xs font-bold p-1 rounded">NEW</span>
                                    <MdChevronRight className={`${active === 'product' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18}/>
                                </div>
                            </button>
                            {
                                active === 'product' && (
                                    <ul className="pl-5">
                                       <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a href="/productdetails" className="hover:text-03">Product View</a></li>
                                       <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a href="/productupload" className="hover:text-03">Product Upload</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg  transition-all duration-200 group ${active === 'invoices' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick("invoices")}>
                                <div className="flex items-center">
                                    <MdArticle size={20} className={`mr-2 ${active === 'invoices' ? 'text-03' : ''}`}/>
                                    <span>Invoices</span>
                                </div>
                                <MdChevronRight className={`${active === 'invoices' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18} />
                            </button>
                            {
                                active ===  "invoices" && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a href="/invoicelist" className="hover:text-03">Invoice List</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Invoice Details</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <Link href='/orders'> 
                                <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'orders' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>setActive('orders')}>
                                    <div className="flex items-center">
                                        <MdShoppingCart size={20} className={`mr-2 ${active === 'orders' ? 'text-03' : ''}`}/>
                                        <span className="">Orders</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-03 rounded-full text-white text-xs font-bold px-2 py-1">5</span>
                                    </div>
                                </button>
                            </Link>
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <Link href='/massege'>
                                <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'message' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>setActive('message')}>
                                    <div className="flex items-center">
                                        <MdEmail size={20} className={`mr-2 ${active === 'message' ? 'text-03' : ''}`}/>
                                        <span className="">Messages</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-03 rounded-full text-white text-xs font-bold px-2 py-1">3</span>
                                    </div>
                                </button>
                            </Link>
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <Link href='/notification'>
                                <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'notif' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>setActive('notif')}>
                                    <div className="flex items-center">
                                        <FaBell size={20} className={`mr-2 ${active === 'notif' ? 'text-03' : ''}`}/>
                                        <span className="">Notifications</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-03 rounded-full text-white text-xs font-bold px-2 py-1">9</span>
                                    </div>
                                </button>
                            </Link>
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <Link href='/setting'>
                                <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'setting' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>setActive('setting')}>
                                    <div className="flex items-center">
                                        <IoMdSettings size={20} className={`mr-2 ${active === 'setting' ? 'text-03' : ''}`}/>
                                        <span>Settings</span>
                                    </div>
                                </button>
                            </Link>
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <Link href='/blank'>
                                <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'blank' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>setActive('blank')}>
                                    <div className="flex items-center">
                                        <MdClass size={20} className={`mr-2 ${active === 'blank' ? 'text-03' : ''}`}/>
                                        <span>Blank Page</span>
                                    </div>
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="space-y-1">
                        <h5 className="text-06 mx-3 mt-4 mb-2 text-xs font-semibold uppercase tracking-wide dark:text-04">COMPONENTS</h5>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex hover:bg-01 dark:hover:bg-bgHover w-full justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'ui' ? (themeMode ? 'bg-01' : 'bg-bgHover') : ''}`} onClick={() => handleClick('ui')}>
                                <div className="flex items-center">
                                    <FaBullseye size={20} className={`mr-2 ${active === 'ui' ? 'text-03' : ''}`}/>
                                    <span>UI Elements</span>
                                </div>
                                <MdChevronRight className={`${active === 'ui' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18} />
                            </button>
                            {
                                active === 'ui' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Alerts</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Avatars</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Buttons</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Colors</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg  transition-all duration-200 group ${active === 'form' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick('form')}>
                                <div className="flex items-center">
                                    <FaWpforms size={20} className={`mr-2 ${active === 'form' ? 'text-03' : ''}`}/>
                                    <span>Forms</span>
                                </div>
                                <MdChevronRight className={`${active === 'form' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18} />
                            </button>
                            {
                                active === 'form' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Basic Elements</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Advance Elements</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Editors</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03 cursor-pointer"><a className="hover:text-03">Wizard</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'chart' ? (themeMode ? 'bg-01' : 'bg-bgHover'): '' }`} onClick={()=>handleClick('chart')}>
                                <div className="flex items-center">
                                    <MdDonutSmall size={20} className={`mr-2 ${active === 'chart' ? 'text-03' : ''}`}/>
                                    <span className="">Charts</span>
                                </div>
                                <div className="flex items-center">
                                    <MdChevronRight className={`${active === 'chart' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18}/>
                                </div>
                            </button>
                            {
                                active === 'chart' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Apex</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Float charts</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Chartjs</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg transition-all duration-200 group ${active === 'table' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick('table')}>
                                <div className="flex items-center">
                                    <IoMdGrid size={20} className={`mr-2 ${active === 'table' ? 'text-03' : ''}`}/>
                                    <span>Tables</span>
                                </div>
                                <div className="flex items-center">
                                    <MdChevronRight className={`${active === 'table' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18}/>
                                </div>
                            </button>
                            {
                                active === 'table' && (
                                    <ul className="pl-5">
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Basic Tables</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Data Tables</a></li>
                                        <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Editable Tables</a></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="text-02 px-2 dark:text-10">
                            <button className={`flex w-full hover:bg-01 dark:hover:bg-bgHover justify-between items-center px-3 py-3 rounded-lg  transition-all duration-200 group ${active === 'map' ? (themeMode ? 'bg-01' : 'bg-bgHover') : '' }`} onClick={()=>handleClick("map")}>
                                <div className="flex items-center">
                                    <LuMapPin size={20} className={`mr-2 ${active === 'map' ? 'text-03' : ''}`}/>
                                    <span>Maps</span>
                                </div>
                                <MdChevronRight className={`${active === 'map' ? 'rotate-90' : '' } transition-all duration-300 ease-in-out`} size={18} />
                            </button>
                            {
                                active ===  "map" && (
                                    <ul className="pl-5">
                                       <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Google Maps</a></li>
                                       <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Vector Maps</a></li>
                                       <li className="w-full pl-5 py-1 text-sm font-light border-l border-07 hover:border-l hover:border-03"><a className="hover:text-03">Leaflet Maps</a></li>
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Slider