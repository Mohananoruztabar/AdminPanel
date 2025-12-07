"use client"
import React, { useEffect, useState , useContext } from "react"
import Container from "@/component/Container"
import { IoExtensionPuzzle } from "react-icons/io5";
import { AppContext } from "@/context/ContextMenu";




const Blank = () =>{

    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);
    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-5">
                    <h4 className="text-xl">Blank Page</h4>
                </div>
                <div className="flex flex-col gap-4 w-full min-h-[calc(100vh-8rem)] items-center justify-center text-06 dark:text-10 ">
                    <IoExtensionPuzzle size={130}/>
                    <h3 className="text-2xl">Blank This Page</h3>
                </div>
            </div>
        </Container>
    )
}
export default Blank
