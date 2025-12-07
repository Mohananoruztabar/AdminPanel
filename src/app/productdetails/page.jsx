"use client"
import React, { useContext , useEffect} from "react";
import { AppContext } from "@/context/ContextMenu";
import { IoHomeOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { MdSummarize } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineHotelClass } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineReply } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import img1 from "../../../public/01 (1).webp"
import img2 from "../../../public/02 (1).webp"
import img3 from "../../../public/03 (1).webp"
import img4 from "../../../public/04 (2).webp"
import img5 from "../../../public/05 (2).webp"
import img6 from "../../../public/04.webp"
import img7 from "../../../public/05.webp"
import img8 from "../../../public/download.jpg"

const ProductDetails = () =>{

    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)

    useEffect(() => {
        setIsHideSliderAndHeader(false);
    }, []);



    return(
        <div className={`min-h-screen pt-20 px-6 dark:bg-12 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
            <div className="flex text-02 dark:text-04 mt-5">
                <h4 className="">Product</h4>
                <span className="border-l border-06 ml-2"></span>
                <IoHomeOutline className="ml-2" size={20} />
                <MdChevronRight className="ml-2" size={25} />
                <h4>product view</h4>
            </div>
            <section className="bg-white dark:bg-09 rounded-lg p-4 my-10">
                <div className="flex items-center">
                    <h3 className="pr-2 text-02 dark:text-04 flex whitespace-nowrap font-extrabold">Product Gallery</h3>
                    <span className="h-[0.5px] w-[38%] bg-06 pr-3"></span>
                    <h3 className="text-02 dark:text-04 px-3 whitespace-nowrap font-extrabold">Product Details</h3>
                    <span className="h-[0.5px] w-[38%] bg-06"></span>
                </div>
                <div className="mt-4 flex">
                    <div className="w-1/2">
                       <figure>
                          <img className="border-2 border-dashed border-06 scale-90 dark:border-0 dark:rounded-sm" src={img1.src} alt="" />
                       </figure>
                       <div className="flex px-6 gap-4">
                        <figure>
                            <img className="border-2 border-dashed border-06 w-[100px] dark:border-0 dark:rounded-sm" src={img2.src} alt="" />
                        </figure>
                        <figure>
                            <img className="border-2 border-dashed border-06  w-[100px] dark:border-0 dark:rounded-sm" src={img3.src} alt="" />
                        </figure>
                        <figure>
                            <img className="border-2 border-dashed border-06  w-[100px] dark:border-0 dark:rounded-sm" src={img4.src} alt="" />
                        </figure>
                        <figure>
                            <img className="border-2 border-dashed border-06  w-[100px] dark:border-0 dark:rounded-sm" src={img5.src} alt="" />
                        </figure>
                        
                       </div>
                    </div>
                    <div className="w-1/2">
                        <p className="text-gray-700 dark:text-10 text-xl">Formal suits for men wedding slim fit 3 piece dress business party jacket</p>
                        <div className="flex items-center mt-5">
                            <FaStoreAlt className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Brand</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <h3 className="text-02 font-light dark:text-10">ecstasy</h3>
                        </div>
                        <div className="flex items-center mt-4">
                            <FaPix className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Category</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <h3 className="text-02 font-light dark:text-10">ecstasy</h3>
                        </div>
                        <div className="flex items-center mt-4">
                            <IoMdSettings className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Tags</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <ul className="flex text-02 font-light dark:text-10">
                                <li className="mr-2 text-sm bg-01 px-2 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">SUIT</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">PARTY</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">DRESS</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">MAN</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">STYLE</li>
                            </ul>
                        </div>
                        <div className="flex items-center mt-4">
                            <IoIosColorPalette className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Colore</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <ul className="flex text-02 font-light dark:text-10">
                                <li className="mr-2 text-sm bg-01 px-2 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">YELLOW</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">BLACK</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">RED</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">GREEN</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">PURPLE</li>
                            </ul>
                        </div>
                        <div className="flex items-center mt-4">
                            <MdSummarize className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Size</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <ul className="flex text-02 font-light dark:text-10">
                                <li className="mr-2 text-sm bg-01 px-2 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">SM</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">MD</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">LG</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">XL</li>
                                <li className="mx-2 text-sm bg-01 px-3 py-1 rounded-sm text-[12px] dark:bg-bgHover dark:text-10">XXL</li>
                            </ul>
                        </div>
                        <div className="flex items-center mt-4 ">
                            <IoIosPricetag className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Price</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <div className='flex'>
                                <span className="font-light text-02 mr-2 dark:text-10">$37.00</span>
                                <del className="text-05 font-light">$42.00</del>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <MdShoppingCart className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Stock</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <h3 className="text-02 font-light dark:text-10">(68) piece</h3>
                        </div>
                        <div className="flex items-center mt-4">
                            <MdOutlineHotelClass className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Review</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <h3 className="text-02 font-light dark:text-10">(03) Review</h3>
                        </div>
                        <div className="flex items-center mt-4">
                            <MdVerified  className="text-02 mr-2 dark:text-10" size={20}/>
                            <h3 className="text-gray-700 w-24 dark:text-04">Published</h3>
                            <span className="text-gray-700 mx-2 dark:text-10">:</span>
                            <h3 className="text-02 font-light dark:text-10">02 Feb 2020</h3>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-10">
                    <h3 className="pr-2 text-02 dark:text-04 flex whitespace-nowrap font-extrabold">Product Description</h3>
                    <span className="h-[0.5px] w-full bg-06 pr-3"></span>
                </div>
                <p className="mt-5 text-02 dark:text-10 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>
                <div className="flex items-center mt-10">
                    <h3 className="pr-2 text-02 dark:text-04 flex whitespace-nowrap font-extrabold">Rating Analytics</h3>
                    <span className="h-[0.5px] w-full bg-06 pr-3"></span>
                </div>
                <div className="flex justify-center gap-20 mt-5">
                    <div>
                        <ul>
                            <li className="flex items-center gap-2 py-2">
                                <h5 className="text-02 dark:text-10">5 Star</h5>
                                <div className="h-2 w-60 rounded-sm bg-07 relative">
                                    <span className="absolute top-0 left-0 bg-yellow-500 h-full w-52 rounded-sm"></span>
                                </div>
                                <span className="text-02 dark:text-10">(22)</span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                                <h5 className="text-02 dark:text-10">4 Star</h5>
                                <div className="h-2 w-60 rounded-sm bg-07 relative">
                                    <span className="absolute top-0 left-0 bg-yellow-500 h-full w-48 rounded-sm"></span>
                                </div>
                                <span className="text-02 dark:text-10">(06)</span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                                <h5 className="text-02 dark:text-10">3 Star</h5>
                                <div className="h-2 w-60 rounded-sm bg-07 relative">
                                    <span className="absolute top-0 left-0 bg-yellow-500 h-full w-36 rounded-sm"></span>
                                </div>
                                <span className="text-02 dark:text-10">(05)</span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                                <h5 className="text-02 dark:text-10">2 Star</h5>
                                <div className="h-2 w-60 rounded-sm bg-07 relative">
                                    <span className="absolute top-0 left-0 bg-yellow-500 h-full w-24 rounded-sm"></span>
                                </div>
                                <span className="text-02 dark:text-10">(03)</span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                                <h5 className="text-02 dark:text-10">1 Star</h5>
                                <div className="h-2 w-60 rounded-sm bg-07 relative">
                                    <span className="absolute top-0 left-0 bg-yellow-500 h-full w-10 rounded-sm"></span>
                                </div>
                                <span className="text-02 dark:text-10">(01)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-700 text-center py-2 dark:text-10">Total Review (38)</h4>
                        <h2 className="text-02 text-6xl font-extrabold text-center py-1 dark:text-04">4.9</h2>
                        <div className="flex justify-center text-yellow-500 py-2">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <p className="text-02 text-center py-2 dark:text-10">Your Average Rating Star</p>
                    </div>
                </div>
                <div className="flex items-center mt-10">
                    <h3 className="pr-2 text-02 dark:text-04 flex whitespace-nowrap font-extrabold">Customer_reviews</h3>
                    <span className="h-[0.5px] w-full bg-06 pr-4"></span>
                </div>
                <div className="bg-01 rounded-lg p-4 mt-5 mr-32 relative dark:bg-12">
                    <div>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full relative" src={img6.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-700 absolute top-3 left-3"></span>
                                <div>
                                    <h3 className="dark:text-04">Miron Mahmud</h3>
                                    <span className="text-02 text-sm dark:text-10">25 minutes ago!</span>
                                </div>
                            </div>
                            <button className="text-white bg-blue-700 flex items-center px-2 gap-2 rounded-lg text-sm">
                                <MdOutlineReply size={20}/>
                                REPLAY
                            </button>
                        </div>
                        <div className="flex text-yellow-500 mt-4 gap-1">
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStar size={20}/>
                            <FaStarHalfAlt size={20}/>
                        </div>
                        <p className="py-2 text-02 leading-7 dark:text-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>
                    <span className="absolute top-0 -right-16 bg-01 w-7 h-7 flex items-center justify-center rounded-full dark:bg-bgHover">
                        <IoMdMore className="text-02 dark:text-10" size={20}/>
                    </span>
                </div>
                <div className="bg-01 rounded-lg p-4 mt-8 mx-30 relative dark:bg-12">
                    <div>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full relative" src={img7.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute top-3 left-3"></span>
                                <div>
                                    <h3 className="dark:text-04">Tahmina Bonny</h3>
                                    <span className="text-02 text-sm dark:text-10">3 weeks ago!</span>
                                </div>
                            </div>
                            <button className="text-white bg-blue-700 flex items-center px-2 gap-2 rounded-lg text-sm">
                                <MdOutlineReply size={20}/>
                                REPLAY
                            </button>
                        </div>
                        <p className="py-2 text-02 leading-7 dark:text-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>
                    <span className="absolute top-0 -right-16 bg-01 w-7 h-7 flex items-center justify-center rounded-full dark:bg-bgHover">
                        <IoMdMore className="text-02 dark:text-10" size={20}/>
                    </span>
                </div>
                <div className="bg-01 rounded-lg p-4 mt-8 mx-30 relative dark:bg-12">
                    <div>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full relative" src={img8.src} alt="" />
                                <span className="w-14 h-14 rounded-full border-2 border-blue-600 absolute top-3 left-3"></span>
                                <div>
                                    <h3 className="dark:text-04">Labonno Khan</h3>
                                    <span className="text-02 text-sm dark:text-10">15 days ago!</span>
                                </div>
                            </div>
                            <button className="text-white bg-blue-600 flex items-center px-2 gap-2 rounded-lg text-sm">
                                <MdOutlineReply size={20}/>
                                REPLAY
                            </button>
                        </div>
                        <p className="py-2 text-02 leading-7 dark:text-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>
                    <span className="absolute top-0 -right-16 bg-01 w-7 h-7 flex items-center justify-center rounded-full dark:bg-bgHover">
                        <IoMdMore className="text-02 dark:text-10" size={20}/>
                    </span>
                </div>
                <div className="flex items-center mt-10">
                    <h3 className="pr-2 text-02 dark:text-04 flex whitespace-nowrap font-extrabold">Review Reply Form</h3>
                    <span className="h-[0.5px] w-full bg-06 pr-4"></span>
                </div>
                <textarea className="bg-01 dark:bg-12 p-3 w-full mt-4 dark:border-02 rounded-lg border border-07 h-56 dark:placeholder:text-10" placeholder="write here" ></textarea>
                <button className="w-full flex justify-center items-center text-white py-3 mt-3 font-bold rounded-lg bg-blue-600">Drop Your Replies</button>
            </section>
        </div>
    )
}
export default ProductDetails