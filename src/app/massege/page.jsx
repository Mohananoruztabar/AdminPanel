"use client"
import React, { useContext, useState , useEffect} from "react";
import { AppContext } from "@/context/ContextMenu";
import { MdDialpad } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import Search from "@/component/Search";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdMarkChatRead } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import img1 from "../../../public/avatar-1-a2938076.jpg"
import img2 from "../../../public/04.webp"
import img3 from "../../../public/9.jpg"
import img4 from "../../../public/05.webp"




const Message = () =>{


    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)
    const[openmenu , setOpenMenu] = useState(null)

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);

    const handelClick = (id) =>{
        setOpenMenu(prev => prev === id ? null : id);
    }
    
    return(
        <div className={`min-h-screen pt-20 px-6 dark:bg-12 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
            <section className="flex mt-10 gap-4 pb-10">
                <div className="w-1/3 bg-white dark:bg-11 rounded-lg p-3 pb-30">
                    <div className="flex items-center justify-between">
                        <Search />
                        <span className="w-10 h-10 bg-01 rounded-lg flex items-center justify-center dark:bg-bgHover dark:text-10"><MdDialpad className="text-02" size={25}/></span>
                    </div>
                    <ul className="mt-8">
                        <li className="hover:bg-01 dark:hover:bg-12 rounded-sm py-3 px-1 my-2">
                            <div className="flex relative">
                                <img className="w-12 h-12 rounded-full" src={img1.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute -top-1 -left-1"></span>
                                <span className="bg-green-500 border w-3 h-3 absolute top-9 left-8 rounded-full"></span>
                                <div className="ml-3">
                                    <h3 className="font-semibold dark:text-04">Tahmina Bonny <span className="text-xs text-06">~ now</span></h3>
                                    <p className="text-xs text-blue-600 dark:text-10">whats your current career opport</p>
                                </div>
                                <span className="w-6 h-6 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center mt-1">03</span>
                                <span onClick={()=>handelClick(1)} className="w-7 h-7 ml-16 bg-01 dark:bg-bgHover rounded-full flex items-center justify-center"><IoMdMore className="text-02" size={20}/></span>
                                {
                                    openmenu == "1" && (
                                        <ul className="absolute z-30 top-7 right-0 bg-white shadow-xl p-1 rounded-lg dark:bg-12 cursor-pointer">
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdAccountCircle size={18}/>
                                                <h3 className="text-sm">View Profile</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdMarkChatRead size={18}/>
                                                <h3 className="text-sm">Mark As Unread</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdDelete size={20}/>
                                                <h3 className="text-sm">Delet Messages</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <IoIosRemoveCircle size={18}/>
                                                <h3 className="text-sm">Block Messages</h3>
                                            </li>
                                        </ul>
                                    )
                                }
                            </div>
                        </li>
                        <li className="hover:bg-01 dark:hover:bg-12 rounded-sm py-3 px-1 my-2">
                            <div className="flex relative">
                                <img className="w-12 h-12 rounded-full" src={img2.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute -top-1 -left-1"></span>
                                <span className="bg-gray-400 border w-3 h-3 absolute top-9 left-8 rounded-full"></span>
                                <div className="ml-3">
                                    <h3 className="font-semibold dark:text-04">Shipon Ahmed <span className="text-xs text-06">~ 7m</span></h3>
                                    <p className="text-xs text-blue-600 dark:text-10">whats your current career opportunity</p>
                                </div>
                                <span onClick={()=>handelClick(2)} className="w-7 h-7 ml-14 bg-01 dark:bg-bgHover rounded-full flex items-center justify-center"><IoMdMore className="text-02" size={20}/></span>
                                {
                                    openmenu == '2' && (
                                        <ul className="absolute z-30 top-7 right-0 bg-white p-1 shadow-xl rounded-lg dark:bg-12 cursor-pointer">
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdAccountCircle size={18}/>
                                                <h3 className="text-sm">View Profile</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdMarkChatRead size={18}/>
                                                <h3 className="text-sm">Mark As Unread</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdDelete size={18}/>
                                                <h3 className="text-sm">Delet Messages</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <IoIosRemoveCircle size={18}/>
                                                <h3 className="text-sm">Block Messages</h3>
                                            </li>
                                        </ul>
                                    )
                                }
                            </div>
                        </li>
                        <li className="hover:bg-01 dark:hover:bg-12 rounded-sm py-3 px-1 my-2">
                            <div className="flex relative">
                                <img className="w-12 h-12 rounded-full" src={img3.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute -top-1 -left-1"></span>
                                <span className="bg-gray-400 border w-3 h-3 absolute top-9 left-8 rounded-full"></span>
                                <div className="ml-3">
                                    <h3 className="font-semibold dark:text-04">Shah Nasrullah <span className="text-xs text-06">~ 9s</span></h3>
                                    <p className="text-xs text-blue-600 dark:text-10">whats your current career opportunity</p>
                                </div>
                                <span onClick={()=>handelClick(3)} className="w-7 h-7 ml-14 bg-01 dark:bg-bgHover rounded-full flex items-center justify-center"><IoMdMore className="text-02" size={20}/></span>
                                {
                                    openmenu == '3' && (
                                        <ul className="absolute z-30 top-7 right-0 bg-white shadow-xl p-1 rounded-lg dark:bg-12 cursor-pointer">
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                               <MdAccountCircle size={18}/>
                                                <h3 className="text-sm">View Profile</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdMarkChatRead size={18}/>
                                                <h3 className="text-sm">Mark As Unread</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <MdDelete size={18}/>
                                                <h3 className="text-sm">Delet Messages</h3>
                                            </li>
                                            <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                                <IoIosRemoveCircle size={18}/>
                                                <h3 className="text-sm">Block Messages</h3>
                                            </li>
                                        </ul>
                                    )
                                }
                            </div>
                        </li>
                        <li className="hover:bg-01 dark:hover:bg-12 rounded-sm py-3 px-1 my-2">
                            <div className="flex relative">
                                <img className="w-12 h-12 rounded-full " src={img4.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute -top-1 -left-1"></span>
                                <span className="bg-gray-400 border w-3 h-3 absolute top-9 left-8 rounded-full"></span>
                                <div className="ml-3">
                                    <h3 className="font-semibold dark:text-04">Rabeya Akter <span className="text-xs text-06">~ 4d</span></h3>
                                    <p className="text-xs text-blue-600 dark:text-10">whats your current career opportunity</p>
                                </div>
                                <span onClick={()=>handelClick(4)} className="w-7 h-7 ml-14 bg-01 dark:bg-bgHover rounded-full flex items-center justify-center"><IoMdMore className="text-02" size={20}/></span>
                                {
                                    openmenu == '4' && (
                                        <ul className="absolute z-30 top-7 right-0 bg-white p-1 shadow-xl rounded-lg dark:bg-12 cursor-pointer">
                                        <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdAccountCircle size={18}/>
                                            <h3 className="text-sm">View Profile</h3>
                                        </li>
                                        <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdMarkChatRead size={18}/>
                                            <h3 className="text-sm">Mark As Unread</h3>
                                        </li>
                                        <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <MdDelete size={18}/>
                                            <h3 className="text-sm">Delet Messages</h3>
                                        </li>
                                        <li className="flex text-02 gap-2 px-2 py-1 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">
                                            <IoIosRemoveCircle size={18}/>
                                            <h3 className="text-sm">Block Messages</h3>
                                        </li>
                                    </ul>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>      
                <div className="w-2/3 bg-white dark:bg-11 rounded-lg p-3">
                    <div className="flex justify-between">
                        <div className="flex relative">
                            <img className="w-12 h-12 rounded-full " src={img1.src} alt="" />
                            <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute -top-1 -left-1"></span>
                            <span className="bg-green-400 border w-3 h-3 absolute top-9 left-8 rounded-full"></span>
                            <div className="ml-3">
                                <h3 className="font-semibold dark:text-04">Tahmina Bonny</h3>
                                <p className="text-xs text-02 dark:text-10">active now</p>
                            </div>
                        </div>
                        <div className="flex gap-5 text-02 dark:text-10 items-center">
                            <span className="bg-01 hover:bg-blue-600 hover:text-white flex items-center justify-center dark:bg-bgHover w-8 h-8 rounded-full"><IoIosRemoveCircle size={20}/></span>
                            <span className="bg-01 hover:bg-blue-600 hover:text-white flex items-center justify-center dark:bg-bgHover w-8 h-8 rounded-full"><MdDelete size={20}/></span>
                            <span className="bg-01 hover:bg-blue-600 hover:text-white flex items-center justify-center dark:bg-bgHover w-8 h-8 rounded-full"><MdMarkChatRead size={20}/></span>
                            <span className="bg-01 hover:bg-blue-600 hover:text-white flex items-center justify-center dark:bg-bgHover w-8 h-8 rounded-full"><MdAccountCircle size={20}/></span>
                        </div>
                    </div>
                    <span className="h-[0.5px] w-full bg-07 block mt-4"></span>
                    <div className="bg-01 dark:bg-bgHover rounded-2xl p-2 ml-10 mt-5">
                        <p className="text-02 dark:text-10 text-sm leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore animi dolores autem assumenda fuga consequuntur, laboriosam laborum minus provident error officia quasi atque deleniti.</p>
                    </div>
                    <div className="bg-01 dark:bg-bgHover rounded-2xl p-2 mt-3 ml-10 w-fit">
                        <p className="text-02 dark:text-10 text-sm leading-7">Omnis dolorum tempora consequatur</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full" src={img1.src} alt="" />
                        <h5 className="text-02 font-light text-xs dark:text-04">3 minute ago!</h5>
                    </div>
                    <div className="bg-gray-300 dark:bg-bgHover rounded-2xl p-2 mr-10 mt-5">
                        <p className="text-02 dark:text-10 text-sm leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum tempora consequatur. Deleniti nisi</p>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-gray-300 dark:bg-bgHover rounded-2xl p-2 mr-10 mt-5 w-fit">
                            <p className="text-02 dark:text-10 text-sm leading-7">Omnis dolorum tempora consequatur</p>
                        </div>
                    </div>
                    <span className="text-02 font-light text-xs dark:text-04">3 minute ago!</span>
                    <div className="bg-01 dark:bg-bgHover rounded-2xl p-2 ml-10 mt-5">
                        <p className="text-02 dark:text-10 text-sm leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore animi dolores autem assumenda fuga consequuntur, laboriosam laborum minus provident error officia quasi atque deleniti.</p>
                    </div>
                    <div className="bg-01 dark:bg-bgHover rounded-2xl p-2 mt-3 ml-10 w-fit">
                        <p className="text-02 dark:text-10 text-sm leading-7">Omnis dolorum tempora consequatur</p>
                    </div>
                    <div className="flex items-center w-full h-14 bg-01 rounded-4xl p-3 dark:bg-bgHover">
                        <input className="border-0 outline-0 p-2 w-full dark:placeholder:text-10 placeholder:text-sm" type="text" placeholder="type a message" />
                        <button className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center"><IoMdSend className="text-white" size={20}/></button>
                    </div>
               </div>
            </section>      
        </div>
    )
}

export default Message