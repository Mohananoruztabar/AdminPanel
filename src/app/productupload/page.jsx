"use client"
import React, { useContext, useEffect} from "react";
import { AppContext } from "@/context/ContextMenu";
import { IoHomeOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import img1 from "../../../public/01 (1).webp"
import img2 from "../../../public/02 (1).webp"
import img3 from "../../../public/03 (1).webp"
import img4 from "../../../public/04 (2).webp"
import { MdCollections } from "react-icons/md";



const ProductUpload = () =>{

    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);


    return(
        <div className={`min-h-screen pt-20 px-6 dark:bg-12 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
            <div className="flex text-02 dark:text-04 mt-4">
                <h4>Product</h4>
                <span className="border-l border-06 ml-2"></span>
                <IoHomeOutline className="ml-2" size={20} />
                <MdChevronRight className="ml-2" size={25} />
                <h4>product Upload</h4>
            </div>
            <section className="gap-5 flex mt-10">
                <div className="bg-white dark:bg-09 rounded-lg w-2/3 p-4">
                    <div className="flex justify-between">
                        <h3 className="text-02 font-semibold dark:text-04">Basic Information</h3>
                        <MdMoreHoriz className="text-02 dark:text-10" size={20}/>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="" className="text-gray-700 pb-2 block font-semibold dark:text-10 text-xs">TITLE</label>
                        <input className="bg-01 dark:bg-12 dark:border-02 dark:placeholder:text-02 px-2 rounded-lg w-full py-2 border border-07" placeholder="type here..." type="text" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="" className="text-gray-700 pb-2 block font-semibold dark:text-10 text-xs">DESCRIPTION</label>
                        <textarea className="bg-01 dark:bg-12 dark:border-02 dark:placeholder:text-02 p-2 rounded-lg w-full h-24 border border-07" placeholder="type here..." type="text" />
                    </div>
                    <div className="flex mt-10 justify-between">
                        <div className="">
                            <h4 className="text-gray-700 text-xs font-semibold mb-2 dark:text-10 ">CATEGORY</h4>
                            <select className="bg-01 dark:bg-12 dark:border-02 text-sm border border-07 text-02 rounded-sm w-80 h-10">
                                <option value="">Mans</option>
                                <option value="">Womans</option>
                                <option value="">Accessory</option>
                            </select>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-xs font-semibold mb-2 dark:text-10">BRAND</h4>
                            <select className="bg-01 dark:bg-12 border dark:border-02 text-sm border-07 text-02 rounded-sm w-80 h-10">
                            <option value="">Richman</option>
                            <option value="">Lubana</option>
                            <option value="">Ecstasy</option>
                        </select>
                        </div>
                    </div>
                    <div className="flex mt-8 justify-between">
                        <div>
                            <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2 pb-2">REGULAR PRICE</label>
                            <input className="bg-01 dark:placeholder:text-02 dark:bg-12 dark:border-02 text-sm border border-07 text-02 p-2 rounded-sm w-80 h-10" placeholder="type here" type="text" />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2 pb-2">DISCOUNT PRICE</label>
                            <input className="bg-01 dark:placeholder:text-02 dark:bg-12 dark:border-02 text-sm border border-07 text-02 p-2 rounded-sm w-80 h-10" placeholder="type here" type="text" />
                        </div>
                    </div>
                    <div className="flex mt-8 justify-between">
                        <div>
                            <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2 pb-2">SHIPPING FEE</label>
                            <input className="bg-01 dark:placeholder:text-02 dark:bg-12 dark:border-02 text-sm border border-07 text-02 p-2 rounded-sm w-80 h-10" placeholder="type here" type="text" />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2 pb-2">TAX RATE</label>
                            <input className="bg-01 dark:placeholder:text-02 dark:bg-12 dark:border-02 text-sm border border-07 text-02 p-2 rounded-sm w-80 h-10" placeholder="type here" type="text" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <label htmlFor="" className="text-gray-700 font-semibold dark:text-10 text-xs pb-2 block">TAGS</label>
                        <textarea className="bg-01 dark:bg-12 dark:border-02 text-sm dark:placeholder:text-02 p-2 rounded-lg w-full h-24 border border-07" placeholder="type here..." type="text" />
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="bg-white dark:bg-09 rounded-lg p-3 pb-8">
                        <div className="flex justify-between">
                            <h3 className="text-02 font-semibold dark:text-04">Organization</h3>
                            <MdMoreHoriz className="text-02 dark:text-10 cursor-pointer" size={20}/>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="" className="text-gray-700 font-semibold dark:text-10 text-xs block mb-2">ADD CATEGORY</label>
                            <div className="flex justify-between mt-1">
                                <input className="bg-01 dark:bg-12 dark:border-02 text-sm dark:placeholder:text-02 px-3 rounded-lg py-2 border w-72 border-07" placeholder="type here..." type="text" />
                                <button className="text-white bg-blue-600 text-sm flex items-center justify-center py-3 px-6 rounded-lg">ADD</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="" className="text-gray-700 font-semibold dark:text-10 text-xs block mb-2">ADD BRAND</label>
                            <div className="flex justify-between mt-1">
                                <input className="bg-01 dark:bg-12 text-sm dark:border-02 dark:placeholder:text-02 px-2 rounded-lg py-3 border w-72 border-07" placeholder="type here..." type="text" />
                                <button className="text-white bg-blue-600 text-sm flex items-center justify-center py-3 px-6 rounded-lg">ADD</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="" className="text-gray-700 font-semibold dark:text-10 text-xs block mb-2">ADD COLOR</label>
                            <div className="flex justify-between mt-1">
                                <input className="bg-01 dark:bg-12 text-sm dark:border-02 dark:placeholder:text-02 px-2 rounded-lg py-3 border w-72 border-07" placeholder="type here..." type="text" />
                                <button className="text-white bg-blue-600 text-sm flex items-center justify-center py-3 px-6 rounded-lg">ADD</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="" className="text-gray-700 font-semibold dark:text-10 text-xs block mb-2">ADD SIZE</label>
                            <div className="flex justify-between mt-1">
                                <input className="bg-01 dark:bg-12 text-sm dark:border-02 dark:placeholder:text-02 px-2 rounded-lg py-3 border w-72 border-07" placeholder="type here..." type="text" />
                                <button className="text-white bg-blue-600 text-sm flex items-center justify-center py-3 px-6 rounded-lg">ADD</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-09 rounded-lg p-3 mt-5 pb-40">
                        <div className="flex mt-8 justify-between">
                            <div>
                                <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs pb-2 py-2">SIZE</label>
                                <select className="bg-01 dark:bg-12 border dark:border-02 border-07 text-02 rounded-sm w-44 text-sm h-10 outline-0">
                                    <option value="">sm</option>
                                    <option value="">md</option>
                                    <option value="">lg</option>
                                    <option value="">xl</option>
                                    <option value="">xxl</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2">COLOR</label>
                                <select className="bg-01 dark:bg-12 border dark:border-02 border-07 text-02 rounded-sm w-44 text-sm h-10 overflow-y-auto outline-0">
                                    <option value="">Red</option>
                                    <option value="">Pink</option>
                                    <option value="">Black</option>
                                    <option value="">Green</option>
                                    <option value="">yellow</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex mt-8 justify-between">
                            <div>
                                <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2">Stock</label>
                                <input className="bg-01 dark:placeholder:text-02 text-sm dark:border-02 dark:bg-12 border border-07 text-02 p-2 rounded-sm w-44 h-10" placeholder="type here" type="text" />
                            </div>
                            <div>
                                <label htmlFor="" className="block text-gray-700 font-semibold dark:text-10 text-xs py-2">Weight</label>
                                <input className="bg-01 dark:placeholder:text-02 text-sm dark:border-02 dark:bg-12 border border-07 text-02 p-2 rounded-sm w-44 h-10" placeholder="type here" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-09 rounded-lg p-6 my-8">
                <div className="flex justify-between">
                    <h3 className="text-02 font-semibold dark:text-04">Media And Published</h3>
                    <MdMoreHoriz className="text-02 dark:text-10 cursor-pointer" size={20}/>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    <figure className="border-2 border-dashed border-07 rounded-lg dark:border-0 hover:border-blue-600">
                        <img src={img1.src} alt="" />
                    </figure>
                    <figure className="border-2 border-dashed border-07 rounded-lg dark:border-0 hover:border-blue-600">
                        <img src={img2.src} alt="" />
                    </figure>
                    <figure className="border-2 border-dashed border-07 rounded-lg dark:border-0 hover:border-blue-600">
                        <img src={img3.src} alt="" />
                    </figure>
                    <figure className="border-2 border-dashed border-07 rounded-lg dark:border-0 hover:border-blue-600">
                        <img src={img4.src} alt="" />
                    </figure>
                    <div className="relative inline-block">
                        <input id="upload" type="file" className="w-40 h-52 opacity-0 cursor-pointer" />
                        <label htmlFor="upload" className="absolute text-02 dark:text-10 inset-0 flex flex-col items-center justify-center text-center cursor-pointer">
                            <MdCollections size={40} />
                            <span className="text-sm mt-1">image upload</span>
                        </label>
                    </div>
                </div>
                <button className="w-full flex justify-center items-center text-white py-3 mt-8 font-medium rounded-lg bg-blue-600">Publish And View</button>
            </section>
        </div>
    )
}
export default ProductUpload