"use client"
import React, { useContext, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Container from './Container'
import logo1 from "../../public/logo-sm-BUdp6hNq.png"
import img1 from "../../public/avatar-1-a2938076.jpg"
import img2 from "../../public/04.webp"
import img3 from "../../public/9.jpg"
import img4 from "../../public/05.webp"
import img5 from "../../public/download.jpg"
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiMenuFold2Line } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdMoreVert } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdOutlineStarBorder } from "react-icons/md";
import Search from './Search';
import { AppContext } from '@/context/ContextMenu'
import Link from 'next/link'



const Navbar = ()=>{



    const {isToggleSidebar, toggleSidebar, isLogin, isHideSliderAndHeader, setThemeMode, themeMode, logout } = useContext(AppContext)
    const [clickOn , setClickOn] = useState(false)
    const [bellOn , setBellOn] = useState(false)
    const reftag = useRef()
    const reftag1 = useRef()

    const handel1 = () => {
        
        toggleSidebar()  
    }

    const handelClick1 = () => {
        const defaultColor = themeMode ? "white" : "#112143";
    
        if (reftag.current) {
            reftag.current.style.background = "#22c55e"
            setTimeout(() => {
                if (reftag.current) { 
                   reftag.current.style.background = defaultColor;
                }
            }, 100);
        }
        setClickOn(!clickOn)
    }

    const handelClick2 = () => {
        if (reftag1.current) { 
            reftag1.current.style.background = "#22c55e"
            setTimeout(() => {
                if (reftag1.current) { 
                    reftag1.current.style.background = "#f0f5ff"
                }
            }, 100);
        }
        setBellOn(!bellOn)
    }

    return(
        <>
            {  isHideSliderAndHeader !== true && (
                <div className='h-20 w-full fixed top-0 left-0 z-50 backdrop-blur-[10px] bg-white/75 dark:bg-11 '>
                    <Container>
                        <div className='place-items-center h-20 grid grid-cols-12'>
                            <div className='flex items-center justify-self-start col-span-2 justify-start'>
                                <img className='w-[50px]' src={logo1.src} alt="" />
                                <span className='font-bold text-2xl dark:text-white'>Rizz</span>
                            </div>
                            <div className='flex items-center col-span-3 justify-self-center'>
                                <button className='h-11 w-11 rounded-full bg-01 items-center justify-center flex mr-4 text-02 hover:bg-04 transition-all duration-300 ease-in-out dark:bg-bgHover' onClick={handel1}>
                                    {
                                        isToggleSidebar === false ? <CgMenuLeftAlt size={25} className='hover:text-03 dark:text-06'/> : <RiMenuFold2Line ize={25} className='hover:text-03 dark:text-06' />
                                    }
                                </button>
                                <Search />
                            </div>
                            <div className='flex items-center justify-self-end col-span-7'>
                                <button className='h-11 w-11 rounded-full bg-01 dark:bg-bgHover items-center justify-center flex mr-4 text-02 hover:bg-04 transition-all duration-300 ease-in-out' onClick={()=>setThemeMode(!themeMode)}>
                                    {
                                        themeMode == true ? <MdLightMode size={25} className='hover:text-03'/> : <MdNightlight size={25} className='hover:text-03 dark:text-06'/>
                                    }
                                </button>
                                <button className='h-11 w-11 rounded-full bg-01 items-center justify-center flex mr-4 text-02 hover:bg-04 transition-all duration-300 ease-in-out dark:bg-bgHover'><IoMdCart size={25} className='hover:text-03 dark:text-06'/> </button>
                                <button className='h-11 w-11 rounded-full bg-01 items-center justify-center flex mr-4 text-02 hover:bg-04 transition-all duration-300 ease-in-out dark:bg-bgHover'><MdEmail size={25} className='hover:text-03 dark:text-06'/> </button>
                                <div className='relative'>
                                    <button className='h-11 w-11 relative rounded-full bg-01 items-center justify-center flex mr-4 text-02 hover:bg-04 transition-all duration-300 ease-in-out dark:bg-bgHover' ref={reftag1} onClick={handelClick2}><FaBell size={25} className='hover:text-03 dark:text-06'/>
                                    <span className='absolute bg-03 w-6 h-6 -top-2 -right-2 flex justify-center items-center rounded-full text-sm text-white'>34</span></button>
                                    {
                                        bellOn && (
                                            <div className='bg-white dark:bg-12 absolute top-16 -right-16 rounded-xl h-96 flex flex-col'>
                                                <div className='flex justify-between items-center m-2 '>
                                                    <h3 className='text-xl font-extrabold dark:text-04'>Notifications (34)</h3>
                                                    <IoMdSettings className='dark:text-04' size={20}/>
                                                </div>
                                                <ul className='overflow-y-auto overflow-x-hidden flex-1 scrollbar-custom'>
                                                    <li className='flex w-64 justify-between m-2 dark:border-0 dark:text-10 bg-01 rounded-sm border-b dark:bg-11 border-gray-100 last:border-b-0 relative'>
                                                        <img className='h-11 w-11 rounded-full m-1 object-cover relative' src={img1.src} alt="" />
                                                        <div className="absolute top-[30] bg-05 rounded-full p-1">
                                                            <MdFavoriteBorder className="text-white w-4 h-4" />
                                                        </div>
                                                        <div className='text-left text-sm'>
                                                            <p className='w-[80%] mx-2 dark:text-10'><strong>Lobonno</strong> leave her comment to <strong>Dressni Breathable</strong></p>
                                                            <div className='flex justify-between'>
                                                                <h3 className=' mx-2'><strong>Female Dress</strong></h3>
                                                                <MdMoreVert size={20}/>
                                                            </div>
                                                            <h6 className='text-03 mx-2 font-extrabold'>25 minutes ago!</h6>
                                                        </div>
                                                    </li>
                                                    <li className='flex w-64 justify-between m-2 bg-01 dark:bg-11 dark:border-0 rounded-sm border-b border-gray-100 last:border-b-0 relative'>
                                                        <img className='h-11 w-11 rounded-full relative m-1' src={img2.src} alt="" />
                                                        <div className="absolute top-[30] bg-03 rounded-full p-1">
                                                           <MdOutlineForum className="text-white w-4 h-4" />
                                                        </div>
                                                        <div className='text-left text-sm dark:text-10'>
                                                            <p className='w-[80%] mx-2'><strong>Jubayer</strong> write to his latest blog <strong>Best Fashion Outfit</strong></p>
                                                            <div className='flex justify-between'>
                                                                <h3 className=' mx-2'><strong>This Winter</strong></h3>
                                                                <MdMoreVert size={20}/>
                                                            </div>
                                                            <h6 className='text-03 mx-2 font-extrabold'>4 days ago!</h6>
                                                        </div>
                                                    </li>
                                                    <li className='flex w-64 justify-between dark:bg-11 m-2 bg-01 dark:border-0 rounded-sm border-b border-gray-100 last:border-b-0 relative'>
                                                        <img className='h-11 w-11 rounded-full relative m-1' src={img3.src} alt="" />
                                                        <div className="absolute top-[30] bg-blue-600 rounded-full p-1">
                                                            <MdOutlineCampaign className="text-white w-4 h-4" />
                                                        </div>
                                                        <div className='text-left text-sm dark:text-10'>
                                                            <p className='w-[80%] mx-2'><strong>John Doe</strong> added to his favorite list <strong>Leather Belt</strong></p>
                                                            <div className='flex justify-between'>
                                                                <h3 className=' mx-2'><strong>Steve Madden</strong></h3>
                                                                <MdMoreVert size={20}/>
                                                            </div>
                                                            <h6 className='text-03 mx-2 font-extrabold'>25 minutes ago!</h6>
                                                        </div>
                                                    </li>
                                                    <li className='flex w-64 justify-between m-2 bg-01 dark:bg-11 dark:border-0 rounded-sm border-b border-gray-100 last:border-b-0 relative'>
                                                        <img className='h-11 w-11 rounded-full relative m-1' src={img4.src} alt="" />
                                                        <div className="absolute top-[30] bg-purple-600 rounded-full p-1">
                                                            <CiEdit className="text-white w-4 h-4" />
                                                        </div>
                                                        <div className='text-left text-sm dark:text-10'>
                                                            <p className='w-[80%] mx-2'><strong>Tahmina</strong> announce to 50% discount <strong>Nwe Exclusive Long Kurti</strong></p>
                                                            <div className='flex justify-between'>
                                                                <h3 className=' mx-2'><strong>Long Kurti</strong></h3>
                                                                <MdMoreVert size={20}/>
                                                            </div>
                                                                <h6 className='text-03 mx-2 font-extrabold'>12 hours ago!</h6>
                                                            </div>
                                                    </li>
                                                    <li className='flex w-64 justify-between m-2 dark:bg-11 bg-01 rounded-sm border-b border-gray-100 last:border-b-0 relative'>
                                                        <img className='h-11 w-11 rounded-full relative m-1' src={img5.src} alt="" />
                                                        <div className="absolute top-[30] bg-yellow-500 rounded-full p-1">
                                                            <MdOutlineStarBorder className="text-white w-4 h-4" />
                                                        </div>
                                                        <div className='text-left text-sm dark:text-10'>
                                                            <p className='w-[80%] mx-2'><strong>Rebeka</strong> give a review to <strong>Exclusive Designed Multicolor Long Kaptan</strong></p>
                                                            <div className='flex justify-between'>
                                                                <h3 className=' mx-2'><strong>Female Dress</strong></h3>
                                                                <MdMoreVert size={20}/>
                                                            </div>
                                                            <h6 className='text-03 mx-2 font-extrabold'>1 weeks ago!</h6>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <button className='bg-03 text-white text-sm rounded-sm py-1 font-extrabold m-1'>VIEW ALL NOTIFICATION</button>
                                            </div>
                                        )
                                    }
                        
                                </div>
                                { isLogin !== true ?  
                                    <Link href='/login'>
                                        <button className='text-white bg-03 rounded-lg px-3 py-2 mx-2'>sign in</button>
                                    </Link> :
                                    <div className='flex items-center relative cursor-pointer' ref={reftag} onClick={handelClick1}>
                                        <div className='flex items-center'>
                                            <img className='w-11 h-11 rounded-full mx-2 border-03 border-2' src={img1.src} alt="" />
                                            <div>
                                                <h4 className='flex dark:text-01'>Amelia Doe <IoMdArrowDropdown className='mt-1' /></h4>
                                                <h5 className='text-sm text-02 dark:text-10'>@ameliadoe</h5>
                                            </div>
                                        </div>
                                        {clickOn && (
                                            <div className='bg-white dark:bg-12 absolute left-1 bottom-[-130] rounded-xl'>
                                                <button className='w-full rounded-lg dark:hover:bg-bgHover dark:border-0 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0'>
                                                    <div className='px-2 py-2 w-full flex'>
                                                        <IoPerson className='text-lg text-gray-600 mr-3'/> 
                                                        <span className='text-sm text-02'>My Account</span>
                                                    </div>
                                                </button>
                                                <button className='w-full rounded-lg dark:hover:bg-bgHover dark:border-0 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0'>
                                                    <div className='px-2 py-2 w-full flex'>
                                                        <MdPrivacyTip className='text-lg text-gray-600 mr-3'/>
                                                        <span className='text-sm text-02'>Reset Password</span>
                                                    </div>
                                                </button>
                                                <button onClick={() => logout()} className='w-full rounded-lg dark:hover:bg-bgHover dark:border-0 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0'>
                                                    <div className='px-2 py-2 w-full flex'>
                                                        <MdLock className='text-lg text-red-500 mr-3 '/>
                                                        <span className='text-sm text-red-500 '>Logout</span>
                                                    </div>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </>
    )
}

export default Navbar