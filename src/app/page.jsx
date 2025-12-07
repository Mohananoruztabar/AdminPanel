"use client"
import React, { useEffect, useRef, useState , useContext } from "react"
import dataapi from "@/data/db.json"
import Container from "@/component/Container"
import { IoHomeOutline } from "react-icons/io5";
import { MdChat, MdChevronRight } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import ChartsEco1 from "@/component/ChartsEco1";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import ChartsEco2 from "@/component/ChartsEco2";
import ChartsEco3 from "@/component/ChartsEco3";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { PiExclamationMarkLight } from "react-icons/pi";
import img1 from "../../public/01.webp"
import img2 from "../../public/02.webp"
import img3 from "../../public/03.webp"
import img4 from "../../public/04 (1).webp"
import img5 from "../../public/05 (1).webp"
import { MdOutlineStarBorder } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdVisibility } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { AppContext } from "@/context/ContextMenu";
import { MdOutlineNewReleases } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import ChartsEco4 from "@/component/ChartsEco4";
import Link from "next/link";



export default function Home() {

  const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)
  const[data , setData] = useState([])
  const [activeMenu, setActiveMenu] = useState(null);
  const [iconColor, setIconColor] = useState({});
  const [activeRevenueMenu, setActiveRevenueMenu] = useState(false);
  const [activeRevenue, setActiveRevenue] = useState(false);
  const [deletPop , setDeletPop] = useState(false)

  const tagref = useRef()
  const tagref2 = useRef()

  useEffect(() => {
    setIsHideSliderAndHeader(false);
    setData(dataapi.charts)
  }, []);

  const handleRevenueMenuClick = () => {
    setActiveRevenueMenu(!activeRevenueMenu);
    tagref.current.style.background = "#22c55e"

    setTimeout(() => {
      tagref.current.style.background = "white"
    }, 500);
  };

  const handleRevenueClick = () =>{
    setActiveRevenue(!activeRevenue);
    tagref2.current.style.background = "#22c55e"

    setTimeout(() => {
      tagref2.current.style.background = "white"
    }, 500);
  }

  

  const handleMenuClick = (id, chartColor) => {
  setIconColor(prev => ({ ...prev, [id]: chartColor }));

  setActiveMenu(activeMenu === id ? null : id);

  setTimeout(() => {
    setIconColor(prev => ({ ...prev, [id]: "white" }));
  }, 500);
};

  const handleClickOutside = (e) => {
    if (!e.target.closest('.menu-container')) {
      setActiveMenu(null);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (

    <Container>
      <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
        <div className="flex text-02 dark:text-04 mt-5">
          <h4 className="">Dashboard</h4>
          <span className="border-l border-06 ml-2"></span>
          <IoHomeOutline className="ml-2" size={20} />
          <MdChevronRight className="ml-2" size={25} />
          <h4>Ecommerce</h4>
        </div>

        <section className="grid grid-cols-4 mt-10 gap-3 w-full">
          {
            data.map((chart) => {
              return(
                <div className="h-52 rounded-lg bg-white mx-2 py-2 px-3 relative menu-container mywrapper dark:bg-11 dark:text-04" key={chart.id}>
                  <div className="flex justify-between items-center relative">
                    <h4 className="text-02 font-semibold text-xl dark:text-06">{chart.title}</h4>
                    <IoMdMore className="text-02 cursor-pointer hover:bg-01 rounded-full dark:bg-10 dark:hover:bg-07" style={{ background: iconColor[chart.id]}} size={20} onClick={(e) => {e.stopPropagation(); handleMenuClick(chart.id , chart.color);}}/>
                    {
                      activeMenu === chart.id &&
                      (
                        <ul className="bg-01 rounded-lg text-02 absolute top-8 right-3 z-40 dark:bg-09 dark:text-10">
                          <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                            <MdOutlineHistory size={18} className="mr-1"/>
                            <a className="text-sm">Last dAY</a>
                          </li>
                          <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                            <MdOutlineHistory size={18} className="mr-1"/>
                            <a className="text-sm">Last Week</a>
                          </li>
                          <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                            <MdOutlineHistory size={18} className="mr-1"/>
                            <a className="text-sm">Last Month</a>
                          </li>
                        </ul>
                      )
                    }
                  </div>
                  <div className="flex mt-5 items-center">
                    <div className="wrapper" style={{ backgroundColor: chart.color }}>
                      <svg className="dash" width="80" height="80">
                        <circle cx="40" cy="40" r="35" stroke={chart.color} strokeWidth="2" strokeDasharray="8 8" fill="none"/>
                      </svg>
                      <img src={chart.img} alt="" />
                    </div>
                    <div className="ml-5">
                      <h3 className="font-extrabold text-xl">{chart.value}</h3>
                      <p className="text-02 font-semibold text-sm dark:text-10">{chart.comparison}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-2 right-2 h-20"> 
                    <ChartsEco1 {...chart} />
                  </div>
                </div>
              )
            })
          }
        </section>
        <section className="grid grid-cols-3 mt-10 gap-4">
          <div className="col-span-2 rounded-sm bg-white p-3 dark:bg-09">
            <div className="flex justify-between items-center text-02 relative">
              <h3 className="text-02 font-semibold text-xl dark:text-04">Revenue</h3>
              <IoIosMore className="rounded-full cursor-pointer" ref={tagref} size={20} onClick={handleRevenueMenuClick}/>
              {
                activeRevenueMenu &&  (
                  <ul className="bg-01 rounded-lg text-02 absolute top-8 right-3 z-40 dark:bg-09 dark:text-10">
                    <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                      <MdOutlineHistory size={18} className="mr-1"/>
                      <a className="text-sm">Last dAY</a>
                     </li>
                    <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                      <MdOutlineHistory size={18} className="mr-1"/>
                      <a className="text-sm">Last Week</a>
                    </li>
                    <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                      <MdOutlineHistory size={18} className="mr-1"/>
                      <a className="text-sm">Last Month</a>
                     </li>
                  </ul>
                )
              }
            </div>
            <h4 className="text-02 font-mono text-xl mt-4 dark:text-10">Total Profit: <span className="text-03">$10,840</span> </h4>
            <div className="mt-10">
              <ChartsEco2 />
            </div>
          </div>
          <div className="rounded-sm bg-white p-3 dark:bg-09">
            <div className="flex justify-between items-center text-02 relative">
              <h3 className="text-02 font-semibold text-xl dark:text-04">Orders Overview</h3>
              <IoIosMore className="rounded-full cursor-pointer" ref={tagref2} size={20} onClick={handleRevenueClick} />
              {
                activeRevenue &&  (
                  <ul className="bg-01 rounded-lg text-02 absolute top-8 right-3 z-40 dark:bg-09 dark:text-10">
                    <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                      <MdOutlineHistory size={18} className="mr-1"/>
                      <a className="text-sm">Last dAY</a>
                    </li>
                    <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                      <MdOutlineHistory size={18} className="mr-1"/>
                      <a className="text-sm">Last Week</a>
                    </li>
                    <li className="flex items-center m-1 rounded-lg p-2 pr-6 hover:bg-white cursor-pointer dark:hover:bg-transh">
                      <MdOutlineHistory size={18} className="mr-1"/>
                      <a className="text-sm">Last Month</a>
                    </li>
                  </ul>
                )
              }
            </div>
            <div>
              <ChartsEco3 />
            </div>
            <ul className="mt-4">
              <li className="flex justify-between text-02 border-t border-04 py-2 dark:text-10 ">
                <div className="flex items-center">
                  <IoIosMore className="rounded-lg text-white bg-purple-400 mr-2 p-1"/>
                  <h4>Pending</h4>
                </div>
                <span>547</span>
              </li>
              <li className="flex justify-between text-02 border-t border-04 py-2 dark:text-10">
                <div className="flex items-center">
                  <PiExclamationMarkLight className="rounded-lg bg-yellow-500 text-white mr-2"/>
                  <h4>Refunded</h4>
                </div>
                <span>176</span>
              </li>
              <li className="flex justify-between text-02 border-t border-04 py-2 dark:text-10">
                <div className="flex items-center">
                  <FaPlus className="rounded-lg bg-blue-500 text-white mr-2 p-1"/>
                  <h4>Shipped</h4>
                </div>
                <span>398</span>
              </li>
              <li className="flex justify-between text-02 border-t border-04 py-2 dark:text-10">
                <div className="flex items-center">
                  <FaCheck className="rounded-lg bg-03 text-white mr-2 p-1"/>
                  <h4>Recieved</h4>
                </div>
                <span>605</span>
              </li>
              <li className="flex justify-between text-02 border-t border-04 py-2 dark:text-10">
                <div className="flex items-center">
                  <IoIosClose className="rounded-lg bg-05 text-white mr-2 "/>
                  <h4>Cancelled</h4>
                </div>
                <span>398</span>
              </li>
            </ul>
            
          </div>
        </section>
        <section className="bg-white rounded-sm mt-10 dark:bg-09">
          <div className="flex justify-between items-center relative p-3">
            <h3 className="text-03 font-semibold text-xl">Best Selling Products</h3>
            <IoIosMore className="rounded-full cursor-pointer text-02 dark:bg-bgHover dark:text-10" size={20} />
          </div>
          <div className="grid grid-cols-4 gap-6 p-3">
            <div>
              <h4 className="text-03 text-sm font-bold mb-2">Show By</h4>
              <select name="" className="bg-01 text-02 text-sm dark:border-02 dark:bg-bgHover w-64 h-10 border border-06 rounded-sm outline-0 dark:text-10">
                <option  value="">12 Row</option>
                <option value="">24 Row</option>
                <option value="">36 Row</option>
              </select>
            </div>
            <div>
              <h4 className="text-03 text-sm font-bold mb-2">Category By</h4>
              <select name="" className="bg-01 text-02 w-64 h-10 border border-06 rounded-sm outline-0 text-sm dark:border-02 dark:bg-bgHover dark:text-10">
                <option  value="">Womans</option>
                <option value="">Mans</option>
                <option value="">Kids</option>
                <option value="">Accessory</option>
              </select>
            </div>
            <div>
              <h4 className="text-03 text-sm font-bold mb-2">Brand By</h4>
              <select name="" className="bg-01 text-02 w-64 h-10 border border-06 rounded-sm outline-0 text-sm dark:border-02 dark:bg-bgHover dark:text-10">
                <option  value="">Ecstasy</option>
                <option value="">Freeland</option>
                <option value="">Rongdhonu</option>
              </select>
            </div>
             <div>
              <h4 className="text-03 text-sm font-bold mb-2">Search By</h4>
              <input type="text" className="bg-01 text-02 w-64 h-10 border border-06 rounded-sm outline-0 pl-2 text-sm dark:border-02 dark:bg-bgHover dark:text-10" placeholder="id/name/category/brand" />
            </div>
          </div>
          <div className="p-3">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="text-white bg-08">
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">
                    <input className="mr-1" type="checkbox" />
                    UID
                  </th>
                  <th className="p-4 border border-06 text-left min-w-40 text-sm">PRODUCT</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">CATEGORY</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">BRAND</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">PRICE</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">STOCK</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">RATING</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">ORDER</th>
                  <th className="p-4 border border-06 text-left min-w-24 text-sm">SALES</th>
                  <th className="p-4 border border-06 text-left min-w-28 text-sm">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dark:bg-11">
                  <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10 dark:border-02">
                    <input className="mr-2 border w-4 h-4" type="checkbox" />
                    #1
                  </th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <img className="w-10 h-10 object-cover border border-07" src={img1.src} alt="" />
                    <div className="pl-1 flex flex-col items-center space-x-2">
                      <h4 className="text-xs text-03 whitespace-nowrap">Tops and skirt set...</h4>
                      <p className="text-02 text-xs whitespace-nowrap dark:text-10">women's exclusive...</p>
                    </div>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">womans</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">richman</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex-col font-normal">
                      <del className="text-02 block dark:text-10">$21.00</del>
                      <span className="text-05 block">$19.00</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 dark:text-10 font-normal dark:border-02">30</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <MdOutlineStarBorder className="text-yellow-500 mr-1"size={20} />
                    <h4 className="text-05">4.1</h4>
                    <span className="text-02 text-sm font-normal dark:text-10">(69)</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">380</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">$38k</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
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
                <tr className="dark:bg-12 bg-01">
                  <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10 dark:border-02">
                    <input className="mr-2 border w-4 h-4" type="checkbox" />
                    #2
                  </th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <img className="w-10 h-10 object-cover border border-07" src={img2.src} alt="" />
                    <div className="pl-1 flex flex-col items-center space-x-2">
                      <h4 className="text-xs text-03 whitespace-nowrap">Leather belt steve m...</h4>
                      <p className="text-02 text-xs whitespace-nowrap dark:text-10">Steve madden men's ...</p>
                    </div>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">mans</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">lubana</th>
                  <th className="border border-07 px-4 py-5 text-05 font-normal dark:text-10 dark:border-02">$14.00</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">23</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <MdOutlineStarBorder className="text-yellow-500 mr-1"size={20} />
                    <h4 className="text-05">4.5</h4>
                    <span className="text-02 text-sm font-normal dark:text-10">(38)</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">189</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">$9k</th>
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
                  <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10 dark:border-02">
                    <input className="mr-2 border w-4 h-4" type="checkbox" />
                    #3
                  </th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <img className="w-10 h-10 object-cover border border-07" src={img3.src} alt="" />
                    <div className="pl-1 flex flex-col items-center space-x-2">
                      <h4 className="text-xs text-03 whitespace-nowrap">Existing product...</h4>
                      <p className="text-02 text-xs whitespace-nowrap dark:text-10">Nemo enim ipsam...</p>
                    </div>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">womans</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">ecstasy</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex-col font-normal">
                      <del className="text-02 block dark:text-10">$44.00</del>
                      <span className="text-05 block">$33.00</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">30</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <MdOutlineStarBorder className="text-yellow-500 mr-1"size={20} />
                    <h4 className="text-05">4.1</h4>
                    <span className="text-02 text-sm font-normal dark:text-10">(69)</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">380</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">$38k</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
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
                <tr className="dark:bg-12 bg-01">
                  <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10 dark:border-02">
                    <input className="mr-2 border w-4 h-4" type="checkbox" />
                    #4
                  </th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <img className="w-10 h-10 object-cover border border-07" src={img4.src} alt="" />
                    <div className="pl-1 flex flex-col items-center space-x-2">
                      <h4 className="text-xs text-03 whitespace-nowrap">Existing product n...</h4>
                      <p className="text-02 text-xs whitespace-nowrap dark:text-10">Nemo enim ipsam...</p>
                    </div>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">kidz</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">ecstasy</th>
                  <th className="border border-07 px-4 py-5 text-05 font-medium dark:text-10 dark:border-02">$33.00</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">30</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <MdOutlineStarBorder className="text-yellow-500 mr-1"size={20} />
                    <h4 className="text-05">4.4</h4>
                    <span className="text-02 text-sm font-normal dark:text-10">(69)</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">380</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">$38k</th>
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
                  <th className="border border-07 px-4 py-5 text-02 text-left dark:text-10 dark:border-02">
                    <input className="mr-2 border w-4 h-4" type="checkbox" />
                    #5
                  </th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <img className="w-10 h-10 object-cover border border-07" src={img5.src} alt="" />
                    <div className="pl-1 flex flex-col items-center space-x-2">
                      <h4 className="text-xs text-03 whitespace-nowrap">Existing product n...</h4>
                      <p className="text-02 text-xs whitespace-nowrap dark:text-10">Nemo enim ipsam...</p>
                    </div>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">accessory</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">ecstasy</th>
                  <th className="border border-07 px-4 py-5 text-05 font-medium dark:text-10 dark:border-02">$33.00</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">30</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
                    <div className="flex items-center">
                      <MdOutlineStarBorder className="text-yellow-500 mr-1"size={20} />
                    <h4 className="text-05">5</h4>
                    <span className="text-02 text-sm font-normal dark:text-10">(47)</span>
                    </div>
                  </th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">380</th>
                  <th className="border border-07 px-4 py-5 text-02 font-normal dark:text-10 dark:border-02">$38k</th>
                  <th className="border border-07 px-4 py-5 dark:border-02">
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
            <div className="mt-5 flex justify-between items-center">
              <p className="text-02 text-sm dark:text-04">showing <strong>12</strong> of <strong>60</strong> results</p>
              <ul className="flex">
                <li className="rounded-full text-02 w-10 h-10 hover:text-white dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08"><MdOutlineChevronLeft size={20}/></li>
                <li className="w-10 h-10 rounded-full text-white dark:bg-08 dark:text-04 bg-08 flex items-center justify-center mx-1">1</li>
                <li className="w-10 h-10 rounded-full text-02 hover:text-white dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08">2</li>
                <li className="w-10 h-10 rounded-full text-02 hover:text-white dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08">3</li>
                <li className="w-10 h-10 rounded-full text-02 hover:text-white dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08"><IoIosMore size={20}/></li>
                <li className="w-10 h-10 rounded-full text-02 hover:text-white dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08">45</li>
                <li className="w-10 h-10 rounded-full text-02 hover:text-white dark:bg-bgHover dark:text-04 bg-01 flex items-center justify-center mx-1 hover:bg-08"><MdOutlineChevronRight size={20}/></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="rounded-sm my-10 flex gap-4">
          <div className="w-1/2 p-3 rounded-lg bg-white dark:bg-09">
            <div className="flex justify-between items-center relative">
              <h3 className="text-03 font-semibold text-xl">Best Selling Products</h3>
              <IoIosMore className="rounded-full cursor-pointer text-02 dark:bg-bgHover dark:text-10" size={20} />
            </div>
            <table className="table-auto border-collapse mt-4">
              <thead>
                <tr className="text-02">
                  <th className="p-4 border border-06 text-left min-w-44 border-l-0 dark:text-10 dark:border-02">Clients</th>
                  <th className="p-4 border border-06 text-left min-w-28 dark:text-10 dark:border-02">Orders</th>
                  <th className="p-4 border border-06 text-left min-w-28 dark:text-10 dark:border-02">Amount</th>
                  <th className="p-4 border border-06 text-left min-w-28 border-r-0 dark:text-10 dark:border-02">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-02">
                  <th className="border border-06 border-l-0 dark:border-02">
                    <div className="flex items-center ml-2">
                      <img className="w-10 h-10 rounded-full" src='/04.webp' alt="" />
                      <h4 className=" text-sm text-02 font-normal dark:text-10 ml-1">miron mahmud</h4>
                    </div>
                  </th>
                  <th className="p-4 border border-06 text-left text-sm text-02 pl-5 font-normal dark:text-10 dark:border-02">648</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 dark:border-02">$4400</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 border-r-0 dark:border-02">
                    <div className="flex items-center gap-3">
                      <Link href='/userprofile'>
                        <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                      </Link>
                      <Link href='/massege'>
                        <button className="p-2 rounded-sm bg-green-200"><MdChat className="text-green-500"/></button>
                      </Link>
                    </div>
                  </th>
                </tr>
                <tr className="text-02 ">
                  <th className="border border-06 border-l-0 dark:border-02">
                    <div className="flex items-center ml-2">
                      <img className="w-10 h-10 rounded-full" src='/05.webp' alt="" />
                      <h4 className=" text-sm text-02 font-normal dark:text-10 ml-1">johara khatun</h4>
                    </div>
                  </th>
                  <th className="p-4 border border-06 text-left text-sm text-02 pl-5 font-normal dark:text-10 dark:border-02">289</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 dark:border-02">$1100</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 border-r-0 dark:border-02">
                    <div className="flex items-center gap-3">
                      <Link href='/userprofile'>
                        <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                      </Link>
                      <Link href='/massege'>
                        <button className="p-2 rounded-sm bg-green-200"><MdChat className="text-green-500"/></button>
                      </Link>
                    </div>
                  </th>
                </tr>
                <tr className="text-02">
                  <th className="border border-06 border-l-0 dark:border-02">
                    <div className="flex items-center ml-2">
                      <img className="w-10 h-10 rounded-full" src='/9.jpg' alt="" />
                      <h4 className=" text-sm text-02 font-normal dark:text-10 ml-1">kurulus osman</h4>
                    </div>
                  </th>
                  <th className="p-4 border border-06 text-left text-sm text-02 pl-5 font-normal dark:text-10 dark:border-02">194</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 dark:border-02">$789</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 border-r-0 dark:border-02">
                    <div className="flex items-center gap-3">
                      <Link href='/userprofile'>
                        <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                      </Link>
                      <Link href='/massege'>
                        <button className="p-2 rounded-sm bg-green-200"><MdChat className="text-green-500"/></button>
                      </Link>
                    </div>
                  </th>
                </tr>
                <tr className="text-02">
                  <th className="border border-06 border-l-0 dark:border-02">
                    <div className="flex items-center ml-2">
                      <img className="w-10 h-10 rounded-full" src='/download.jpg' alt="" />
                      <h4 className=" text-sm text-02 font-normal dark:text-10 ml-1">tahmina bonny</h4>
                    </div>
                  </th>
                  <th className="p-4 border border-06 text-left text-sm text-02 pl-5 font-normal dark:text-10 dark:border-02">590</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 dark:border-02">$4400</th>
                  <th className="p-4 border border-06 text-left text-sm text-02 font-normal dark:text-10 border-r-0 dark:border-02">
                    <div className="flex items-center gap-3">
                      <Link href='/userprofile'>
                        <button className="p-2 rounded-sm bg-purple-200"><MdVisibility className="text-purple-500"/></button>
                      </Link>
                      <Link href='/massege'>
                        <button className="p-2 rounded-sm bg-green-200"><MdChat className="text-green-500"/></button>
                      </Link>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 p-3 rounded-lg bg-white dark:bg-09">
            <div className="flex justify-between items-center relative">
              <h3 className="text-03 font-semibold text-xl">Customers</h3>
              <IoIosMore className="rounded-full cursor-pointer text-02 dark:bg-bgHover dark:text-10" size={20} />
            </div>
            <div className="flex mt-4">
              <div className="w-2/5 text-02 dark:text-10">
                <span className="text-2xl font-extrabold">846</span>
                <h3 className="">Total Customers</h3>
                <div className="mt-10 flex items-center gap-2">
                  <button className="p-2 rounded-sm bg-purple-200 "><IoGiftOutline className="text-purple-500" size={20}/></button>
                  <div>
                    <h4 className="text-sm">Current Customers</h4>
                    <span className="text-sm font-extrabold">124</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="p-2 rounded-sm bg-green-200 "><IoBagOutline className="text-green-500" size={20}/></button>
                  <div>
                    <h4 className="text-sm">New Customers</h4>
                    <span className="text-sm font-extrabold">386</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="p-2 rounded-sm bg-red-200 "><SlBookOpen className="text-red-500" size={20}/></button>
                  <div>
                    <h4 className="text-sm">Retargeted Customers</h4>
                    <span className="text-sm font-extrabold">425</span>
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <ChartsEco4 />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}


