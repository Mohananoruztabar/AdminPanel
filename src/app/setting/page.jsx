"use client"
import React, { useEffect, useRef, useState , useContext } from "react"
import Container from "@/component/Container"
import { AppContext } from "@/context/ContextMenu";
import { MdOutlineVerified } from "react-icons/md";





const Setting = () =>{

    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);
    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-4">
                    <h4 className="">Settings</h4>
                </div>
                <section className="bg-white dark:bg-11 mt-5 p-8 mb-16 rounded-lg">
                    <div className="flex items-center gap-2">
                        <h3 className="whitespace-nowrap text-02 dark:text-04 font-extrabold">Information</h3>
                        <span className="bg-07 w-full h-[0.5px]"></span>
                    </div>
                    <div className="mt-5 flex gap-4">
                        <div className="w-1/3">
                           <p className="text-02 dark:text-10 leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-between gap-8">
                                <div className="w-full">
                                    <label htmlFor="titl1" className="dark:text-10 mb-1 block text-xs font-medium">SITE TITLE</label>
                                    <input id="titl1" type="text" className="border text-sm dark:border-02 border-07 bg-01 dark:bg-bgHover px-3 py-2 w-full rounded-lg dark:placeholder:text-02" placeholder="type here"/>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="titl2" className="dark:text-10 mb-1 block text-xs font-medium">TAGLINE</label>
                                    <input id="titl2" type="text"  className="border text-sm dark:border-02 border-07 bg-01 px-3 py-2 dark:bg-bgHover w-full rounded-lg dark:placeholder:text-02" placeholder="type here"/>
                                </div>
                            </div>
                            <div className="flex justify-between gap-8 mt-5">
                                <div className="w-full">
                                    <label htmlFor="titl3" className="dark:text-10 mb-1 block text-xs font-medium">EMAIL ADDRESS</label>
                                    <input id="titl3" type="text" className="border text-sm dark:border-02 border-07 bg-01 dark:bg-bgHover px-3 py-2 w-full rounded-lg dark:placeholder:text-02" placeholder="type here"/>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="titl4" className="dark:text-10 mb-2 block text-xs font-medium">WEBSITE URL</label>
                                    <input id="titl4" type="text"  className="border text-sm dark:border-02 border-07 bg-01 px-3 py-2 dark:bg-bgHover w-full rounded-lg dark:placeholder:text-02" placeholder="type here"/>
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                <label htmlFor="" className="dark:text-10 mb-2 block text-xs font-medium">DESCRIPTION</label>
                                <textarea className="border dark:border-02 border-07 bg-01 px-3 py-2 dark:bg-bgHover w-full rounded-lg dark:placeholder:text-02 h-32" placeholder="type here" ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                        <h3 className="whitespace-nowrap text-02 dark:text-04 font-extrabold">Accessibility</h3>
                        <span className="bg-07 w-full h-[0.5px]"></span>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <div className="w-1/3">
                            <p className="text-02 dark:text-10 leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="w-2/3">
                            <label className="flex items-center gap-2 cursor-pointer pb-1 text-02 dark:text-10">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span>Send notification on each user registration</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer py-2 text-02 dark:text-10">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span>All registration is enabled on this site</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer py-2 text-02 dark:text-10">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span>You're sent a direct message</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer py-2 text-02 dark:text-10">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span>New membership approval</span>
                            </label>    
                        </div>
                    </div>
                    <button className="bg-blue-600 px-6 py-3 gap-1 cursor-pointer my-16 rounded-lg flex items-center justify-center text-white">
                            <MdOutlineVerified className="text-white" size={20}/>
                            Save Changes
                        </button>
                </section>
            </div>
        </Container>
    )
}
export default Setting