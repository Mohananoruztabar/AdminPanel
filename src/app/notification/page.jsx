"use client"
import React, { useEffect, useRef, useState , useContext } from "react"
import { AppContext } from "@/context/ContextMenu";
import img1 from "../../../public/avatar-1-a2938076.jpg"
import img2 from "../../../public/04.webp"
import img3 from "../../../public/05.webp"
import img4 from "../../../public/9.jpg"
import img5 from "../../../public/download.jpg"
import Container from "@/component/Container";
import { IoIosMore } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


const Notification = () =>{

    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext) 

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);
    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-4">
                    <h4 className="text-xl">Notification</h4>
                </div>
                <section className="mt-5 rounded-lg p-3 bg-white dark:bg-11 mb-14">
                    <div className="flex items-center justify-between">
                        <h3 className="dark:text-04 font-semibold text-02">All Notification</h3>
                        <IoIosMore className="dark:text-10 font-semibold text-02 cursor-pointer" size={22}/>
                    </div>
                    <ul className="my-5 p-2">
                        <li className="flex  justify-between border-b border-07 py-4 dark:border-02">
                            <div className="flex gap-3 items-center">
                                <figure>
                                    <img className="w-16 h-16 rounded-full" src={img1.src} alt="" />
                                </figure>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-02 dark:text-10"><b>Tahmina</b> announce to 50% discount <b>New Exclusive long kurti</b></h4>
                                    <p className="text-02 dark:text-10 text-sm">about few minutes ago!</p>
                                </div>
                            </div>
                            <IoCloseSharp className="text-02 dark:text-10 hover:text-blue-600 cursor-pointer" size={22}/>
                        </li>
                        <li className="flex  justify-between border-b border-07 py-6 dark:border-02">
                            <div className="flex gap-3 items-center">
                                <figure>
                                    <img className="w-16 h-16 rounded-full" src={img2.src} alt="" />
                                </figure>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-02 dark:text-10"><b>Jubayer</b>  write to his latest blog  <b>Best fashion outfit this winter</b></h4>
                                    <p className="text-02 dark:text-10 text-sm">about few minutes ago!</p>
                                </div>
                            </div>
                            <IoCloseSharp className="text-02 dark:text-10 hover:text-blue-600 cursor-pointer" size={22}/>
                        </li>
                        <li className="flex  justify-between border-b border-07 py-6 dark:border-02">
                            <div className="flex gap-3 items-center">
                                <figure>
                                    <img className="w-16 h-16 rounded-full" src={img3.src} alt="" />
                                </figure>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-02 dark:text-10"><b>Rebeka</b>  give a review to  <b>Exclusive Designed Multicolor long Kaptan</b></h4>
                                    <p className="text-02 dark:text-10 text-sm">about few minutes ago!</p>
                                </div>
                            </div>
                            <IoCloseSharp className="text-02 dark:text-10 hover:text-blue-600 cursor-pointer" size={22}/>
                        </li>
                        <li className="flex  justify-between border-b border-07 py-6 dark:border-02">
                            <div className="flex gap-3 items-center">
                                <figure>
                                    <img className="w-16 h-16 rounded-full" src={img4.src} alt="" />
                                </figure>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-02 dark:text-10"><b>Mahmudul</b>  added to his favorite list  <b>Leather belt steve madden</b></h4>
                                    <p className="text-02 dark:text-10 text-sm">about few minutes ago!</p>
                                </div>
                            </div>
                            <IoCloseSharp className="text-02 dark:text-10 hover:text-blue-600 cursor-pointer" size={22}/>
                        </li>
                        <li className="flex  justify-between py-6 ">
                            <div className="flex gap-3 items-center">
                                <figure>
                                    <img className="w-16 h-16 rounded-full" src={img5.src} alt="" />
                                </figure>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-02 dark:text-10"><b>Labonno</b>  leave her comment to  <b>Dressni Breathable female Dress</b></h4>
                                    <p className="text-02 dark:text-10 text-sm">about few minutes ago!</p>
                                </div>
                            </div>
                            <IoCloseSharp className="text-02 dark:text-10 hover:text-blue-600 cursor-pointer" size={22}/>
                        </li>
                    </ul>
                </section>
            </div>
        </Container>
    )
}
export default Notification