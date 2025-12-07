"use client"
import React, { useEffect, useRef, useState , useContext } from "react"
import Container from "@/component/Container"
import { IoHomeOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { AppContext } from "@/context/ContextMenu";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdPending } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import img1 from "../../../public/avatar-1-a2938076.jpg"
import img2 from "../../../public/04.webp"
import img3 from "../../../public/05.webp"
import img4 from "../../../public/9.jpg"
import img5 from "../../../public/download.jpg"
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineNewReleases } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { MdVisibility } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdStore } from "react-icons/md";




const UserListe = () =>{


    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)
    const [deletPop , setDeletPop] = useState(false)

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);



    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-4">
                    <h4 className="">User</h4>
                    <span className="border-l border-06 ml-2"></span>
                    <IoHomeOutline className="ml-2" size={20} />
                    <MdChevronRight className="ml-2" size={25} />
                    <h4>UserList</h4>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                    <div className="bg-purple-500 rounded-lg p-4 relative">
                        <h4 className="text-white text-2xl font-semibold">547</h4>
                        <p className="mt-2 text-white">pending users</p>
                        <MdPending className="absolute -top-5 right-0 text-purple-300" size={50}/>
                    </div>
                    <div className="bg-green-500 rounded-lg p-4 relative">
                        <h4 className="text-white text-2xl font-semibold">605</h4>
                        <p className="mt-2 text-white">approved users</p>
                        <FaCheckCircle className="absolute -top-5 right-0 text-green-300" size={50}/>
                    </div>
                    <div className="bg-red-500 rounded-lg p-4 relative">
                        <h4 className="text-white text-2xl font-semibold">249</h4>
                        <p className="mt-2 text-white">blocked users</p>
                        <IoIosRemoveCircle className="absolute -top-5 right-0 text-red-300" size={50}/>
                    </div>
                </div>
                <section className="bg-white rounded-sm my-10 dark:bg-09">
                    <div className="flex justify-between items-center relative p-3">
                        <h3 className="text-03 font-semibold text-xl">Best Selling Products</h3>
                        <IoIosMore className="rounded-full cursor-pointer" size={20} />
                    </div>
                    <div className="grid grid-cols-4 gap-6 p-3">
                        <div>
                            <h4 className="text-03 text-sm font-bold mb-2">Show By</h4>
                            <select name="" className="bg-01 text-sm text-02 w-64 h-10 border border-06 rounded-sm outline-0 dark:bg-09 dark:text-10">
                                <option  value="">12 Row</option>
                                <option value="">24 Row</option>
                                <option value="">36 Row</option>
                            </select>
                        </div>
                        <div>
                            <h4 className="text-03 text-sm font-bold mb-2">Category By</h4>
                            <select name="" className="bg-01 text-sm text-02 w-64 h-10 border border-06 rounded-sm outline-0 dark:bg-09 dark:text-10">
                                <option  value="">Womans</option>
                                <option value="">Mans</option>
                                <option value="">Kids</option>
                                <option value="">Accessory</option>
                            </select>
                        </div>
                        <div>
                            <h4 className="text-03 text-sm font-bold mb-2">Brand By</h4>
                            <select name="" className="bg-01 text-sm text-02 w-64 h-10 border border-06 rounded-sm outline-0 dark:bg-09 dark:text-10">
                                <option  value="">Ecstasy</option>
                                <option value="">Freeland</option>
                                <option value="">Rongdhonu</option>
                           </select>
                        </div>
                        <div>
                            <h4 className="text-03 text-sm font-bold mb-2">Search By</h4>
                            <input type="text" className="bg-01 text-02 w-64 h-10 border border-06 rounded-sm outline-0 pl-2 text-sm dark:bg-09 dark:text-10" placeholder="id/name/category/brand" />
                        </div>
                    </div>
                    <div className="p-3">
                        <table className="table-auto w-full border-collapse">
                            <thead>
                                <tr className="text-white bg-08">
                                    <th className="p-4 border border-06 text-left min-w-20 text-sm">
                                        <input className="mr-1" type="checkbox" />
                                        UID
                                    </th>
                                    <th className="p-4 border border-06 text-left min-w-36 text-sm">Name</th>
                                    <th className="p-4 border border-06 text-left min-w-28 text-sm">Role</th>
                                    <th className="p-4 border border-06 text-left min-w-28 text-sm">Email</th>
                                    <th className="p-4 border border-06 text-left min-w-28 text-sm">Password</th>
                                    <th className="p-4 border border-06 text-left min-w-28 text-sm">Phone</th>
                                    <th className="p-4 border border-06 text-left min-w-28 text-sm">Status</th>
                                    <th className="p-4 border border-06 text-left min-w-32 text-sm">Created</th>
                                    <th className="p-4 border border-06 text-left min-w-36 text-sm">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="dark:bg-11">
                                    <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10">
                                        <input className="mr-2 border w-4 h-4" type="checkbox" />
                                        #1
                                    </th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex items-center gap-1">
                                            <img className="w-9 h-9 object-cover rounded-full border border-07" src={img1.src} alt="" />
                                            <h4 className="text-sm text-02 whitespace-nowrap font-normal dark:text-10">labonno k ...</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10">
                                        <div className="flex items-center gap-2">
                                            <IoMdPerson className="text-green-500" size={20}/>
                                            <h4 className="text-sm text-02 whitespace-nowrap dark:text-10">member</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">labonno@gma...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">$2a$06$4Uoe...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">o1838288389</th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10"><p className="bg-green-200 rounded-lg w-20 h-6 text-green-600 text-sm">Approved</p></th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">15/06/2022 1</th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex gap-3">
                                            <Link href='/productdetails'>
                                                <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                                            </Link>
                                            <Link href='/productupload'>
                                                <button className="p-2 rounded-sm bg-green-200"><CiEdit className="text-03"/></button>
                                            </Link>
                                            <button onClick={()=>setDeletPop(true)} className="p-2 rounded-sm bg-red-200"><MdDeleteOutline className="text-05"/></button>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="dark:bg-11">
                                    <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10">
                                        <input className="mr-2 border w-4 h-4" type="checkbox" />
                                        #2
                                    </th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex items-center gap-1">
                                            <img className="w-9 h-9 object-cover rounded-full border border-07" src={img2.src} alt="" />
                                            <h4 className="text-sm text-02 whitespace-nowrap font-normal dark:text-10">mahmudul ...</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10">
                                        <div className="flex items-center gap-2">
                                            <IoMdSettings className="text-purple-500" size={20}/>
                                            <h4 className="text-sm text-02 whitespace-nowrap dark:text-10">admin</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">miron@gmai...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">$2a$06$4Uoe...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">o1838288389</th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10"><p className="bg-purple-300 rounded-lg w-20 h-6 text-purple-600 text-sm">Pending</p></th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">15/06/2022 1</th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex gap-3">
                                            <Link href='/productdetails'>
                                                <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                                            </Link>
                                            <Link href='/productupload'>
                                                <button className="p-2 rounded-sm bg-green-200"><CiEdit className="text-03"/></button>
                                            </Link>
                                            <button onClick={()=>setDeletPop(true)} className="p-2 rounded-sm bg-red-200"><MdDeleteOutline className="text-05"/></button>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="dark:bg-11">
                                    <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10">
                                        <input className="mr-2 border w-4 h-4" type="checkbox" />
                                        #3
                                    </th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex items-center gap-1">
                                            <img className="w-10 h-10 object-cover rounded-full border border-07" src={img3.src} alt="" />
                                            <h4 className="text-sm text-02 whitespace-nowrap font-normal dark:text-10">tahmina b...</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10">
                                        <div className="flex items-center gap-2">
                                            <IoMdPerson className="text-green-500" size={20}/>
                                            <h4 className="text-sm text-02 whitespace-nowrap dark:text-10">member</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">tahmina@gma...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">$2a$06$4Uoe...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">o1838288389</th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10"><p className="bg-red-300 rounded-lg w-20 h-6 text-red-600 text-sm">Blocked</p></th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">15/06/2022 1</th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex gap-3">
                                            <Link href='/productdetails'>
                                                <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                                            </Link>
                                            <Link href='/productupload'>
                                                <button className="p-2 rounded-sm bg-green-200"><CiEdit className="text-03"/></button>
                                           </Link>
                                                <button onClick={()=>setDeletPop(true)} className="p-2 rounded-sm bg-red-200"><MdDeleteOutline className="text-05"/></button>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="dark:bg-11">
                                    <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10">
                                        <input className="mr-2 border w-4 h-4" type="checkbox" />
                                        #4
                                    </th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex items-center gap-1">
                                            <img className="w-10 h-10 object-cover rounded-full border border-07" src={img4.src} alt="" />
                                            <h4 className="text-sm text-02 whitespace-nowrap font-normal dark:text-10">farzana d...</h4>
                                        </div>
                                    </th>
                                   <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10">
                                        <div className="flex items-center gap-2">
                                            <MdStore className="text-yellow-500" size={20}/>
                                            <h4 className="text-sm text-02 whitespace-nowrap dark:text-10">vendor</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">farzana@gmail...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">$2a$06$4Uoe...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">o1838288389</th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10"><p className="bg-green-300 rounded-lg w-20 h-6 text-green-600 text-sm">Approved</p></th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">15/06/2022 1</th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex gap-3">
                                            <Link href='/productdetails'>
                                                <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                                            </Link>
                                            <Link href='/productupload'>
                                                <button className="p-2 rounded-sm bg-green-200"><CiEdit className="text-03"/></button>
                                            </Link>
                                            <button onClick={()=>setDeletPop(true)} className="p-2 rounded-sm bg-red-200"><MdDeleteOutline className="text-05"/></button>
                                        </div>
                                    </th>
                                </tr>
                               <tr className="dark:bg-11">
                                    <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10">
                                        <input className="mr-2 border w-4 h-4" type="checkbox" />
                                        #5
                                    </th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex items-center gap-1">
                                            <img className="w-10 h-10 object-cover rounded-full border border-07" src={img5.src} alt="" />
                                            <h4 className="text-02 whitespace-nowrap font-normal text-sm dark:text-10">saikul a...</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10">
                                        <div className="flex items-center gap-2">
                                            <IoMdSettings className="text-purple-500" size={20}/>
                                            <h4 className="text-sm text-02 whitespace-nowrap dark:text-10">admin</h4>
                                        </div>
                                    </th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10">saikul@gmail...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">$2a$06$4Uoe...</th>
                                    <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal text-sm">o1838288389</th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10"><p className="bg-purple-300 rounded-lg w-20 h-6 text-purple-600 text-sm">Pending</p></th>
                                    <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 text-sm">15/06/2022 1</th>
                                    <th className="border border-07 px-4 py-5">
                                        <div className="flex gap-3">
                                            <Link href='/productdetails'>
                                                <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                                            </Link>
                                            <Link href='/productupload'>
                                                <button className="p-2 rounded-sm bg-green-200"><CiEdit className="text-03"/></button>
                                            </Link>
                                            <button onClick={()=>setDeletPop(true)} className="p-2 rounded-sm bg-red-200"><MdDeleteOutline className="text-05"/></button>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        {deletPop && (
                            <div className="pop" >
                                <div className="pop-content bg-white dark:bg-09 relative">
                                    <h3 className="text-3xl font-bold mx-auto dark:text-04">Are Your Sure?</h3>
                                    <p className="text-02 mx-auto mt-3 dark:text-10">Want to delete this product?</p>
                                    <div className="flex mt-6 justify-center gap-5">
                                        <button className="bg-gray-500 text-sm text-white px-5 py-2 rounded-sm" onClick={() => setDeletPop(false)}>close</button>
                                        <button className="text-white text-sm bg-05 px-4 py-2 rounded-sm" onClick={() => {setDeletPop(false)}}>Delete</button>
                                        <span className="absolute -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                            <MdOutlineNewReleases className="text-05" size={50} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-02 text-sm dark:text-04">showing <strong>12</strong> of <strong>60</strong> results</p>
                            <ul className="flex">
                                <li className="rounded-full text-02 w-10 h-10 dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08"><MdOutlineChevronLeft size={20}/></li>
                                <li className="w-10 h-10 rounded-full text-02 dark:bg-08 dark:text-04 bg-01 flex items-center justify-center mx-1">1</li>
                                <li className="w-10 h-10 rounded-full text-02 dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08">2</li>
                                <li className="w-10 h-10 rounded-full text-02 dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08">3</li>
                                <li className="w-10 h-10 rounded-full text-02 dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08"><IoIosMore size={20}/></li>
                                <li className="w-10 h-10 rounded-full text-02 dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08">45</li>
                                <li className="w-10 h-10 rounded-full text-02 dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08"><MdOutlineChevronRight size={20}/></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
                             
        </Container>
    )
}
export default UserListe