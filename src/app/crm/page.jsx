"use client"
import React, { useContext, useState, useEffect } from "react"
import Container from "@/component/Container"
import { IoHomeOutline } from "react-icons/io5";
import { AppContext } from "@/context/ContextMenu";
import { MdChevronRight } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FaClipboardList } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import ChartsCrm from "@/component/ChartsCrm";
import { IoIosMore } from "react-icons/io";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoMdPricetag } from "react-icons/io";
import { IoIosCard } from "react-icons/io";



const Crm = () =>{


    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)
    const [openmenu , setOpenmenu] = useState(false)

    useEffect(() => {
        setIsHideSliderAndHeader(false)
    }, [])


    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-4">
                    <h4 className="">Dashboard</h4>
                    <span className="border-l border-06 ml-2"></span>
                    <IoHomeOutline className="ml-2" size={20} />
                    <MdChevronRight className="ml-2" size={25} />
                    <h4>Crm</h4>
                </div>
                <section className="grid grid-cols-4 gap-4 mt-8">
                    <div className="bg-white dark:bg-11 px-4 py-6 flex justify-between items-center rounded-sm border-l-4 border-blue-500">
                        <div>
                            <h4 className="text-sm text-blue-700">Earnings (Monthly)</h4>
                            <h3 className="text-02 mt-1 font-extrabold text-xl dark:text-10">$40,000</h3>
                        </div>
                        <FaCalendar className="text-06" size={30}/>
                    </div>
                    <div className="bg-white dark:bg-11 px-4 py-6 flex justify-between items-center rounded-sm border-l-4 border-green-500">
                        <div>
                            <h4 className="text-sm text-green-600">Earnings (Annual)</h4>
                            <h3 className="text-02 mt-1 font-extrabold text-xl dark:text-10">$215,000</h3>
                        </div>
                        <PiCurrencyDollarBold className="text-06" size={30}/>
                    </div>
                    <div className="bg-white dark:bg-11 px-4 py-6 flex justify-between items-center rounded-sm border-l-4 border-blue-400">
                        <div>
                            <h4 className="text-sm text-blue-500">Tasks</h4>
                            <h3 className="text-02 mt-1 font-extrabold text-xl dark:text-10">$40,000</h3>
                        </div>
                        <span className="bg-07 w-28 h-3 rounded-2xl mt-4 relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-blue-500 after:h-3 after:rounded-2xl after:w-20"></span>
                        <FaClipboardList className="text-06" size={30}/>
                    </div>
                    <div className="bg-white dark:bg-11 px-4 py-6 flex justify-between items-center rounded-sm border-l-4 border-orange-300">
                        <div>
                            <h4 className="text-sm text-orange-400">Pending Requests</h4>
                            <h3 className="text-02 mt-1 font-extrabold text-xl dark:text-10">18</h3>
                        </div>
                        <IoChatbubbles className="text-06" size={30}/>
                    </div>
                </section>
                <section className="gap-4 mt-5 flex">
                    <div className="bg-white dark:bg-11 rounded-lg p-3 w-2/3">
                        <h3 className="text-02 font-medium dark:text-04 mb-5">Earnings Overview</h3>
                        <ChartsCrm />
                    </div>
                    <div className="bg-white dark:bg-11 rounded-lg p-3 w-1/3">
                        <div className="flex items-center justify-between relative">
                            <h3 className="text-02 font-medium dark:text-04">Summary</h3>
                            <IoIosMore onClick={()=>setOpenmenu(!openmenu)} className="text-02 dark:text-10"  size={20}/>
                            {
                                openmenu  && (
                                    <ul className="absolute shadow-2xl z-30 top-7 right-0 bg-white p-1 rounded-lg dark:bg-12 cursor-pointer">
                                        <li className="flex text-02 text-sm gap-2 py-1 px-3 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">Mark az Done</li>
                                        <li className="flex text-02 text-sm gap-2 py-1 px-3 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">View Report</li>
                                        <li className="flex text-02 text-sm gap-2 py-1 px-3 items-center hover:bg-01 rounded-lg dark:hover:bg-bgHover dark:text-10">Edit Report</li>
                                    </ul>
                                )
                            }
                        </div>
                        <ul className="mt-5">
                            <li className="flex items-center gap-3 py-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-purple-200 rounded-full"><RiShoppingBag2Line size={18} className="text-purple-500" /></span>
                                <div>
                                    <div className="flex justify-between">
                                        <h5 className="text-02 dark:text-10">Income</h5>
                                        <h6 className="text-02 dark:text-10">$92,600</h6>
                                    </div>
                                    <span className="relative w-72 h-3 block rounded-2xl bg-07 after:rounded-2xl after:content-[''] after:w-64 after:h-3 after:bg-purple-500 after:absolute"></span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 py-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-green-200 rounded-full"><IoMdPricetag size={18} className="text-green-400" /></span>
                                <div>
                                    <div className="flex justify-between">
                                        <h5 className="text-02 dark:text-10">Profit</h5>
                                        <h6 className="text-02 dark:text-10">$37,515</h6>
                                    </div>
                                    <span className="relative w-72 h-3 block rounded-2xl bg-07 after:rounded-2xl after:content-[''] after:w-44 after:h-3 after:bg-green-400 after:absolute"></span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 py-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-orange-200 rounded-full"><IoIosCard size={18} className="text-orange-500" /></span>
                                <div>
                                    <div className="flex justify-between">
                                        <h5 className="text-02 dark:text-10">Expenses</h5>
                                        <h6 className="text-02 dark:text-10">$55,085</h6>
                                    </div>
                                    <span className="relative w-72 h-3 block rounded-2xl bg-07 after:rounded-2xl after:content-[''] after:w-60 after:h-3 after:bg-orange-400 after:absolute"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="flex my-5 gap-4">
                    <div className="bg-white dark:bg-11 rounded-sm p-2 w-1/2">
                        <h4 className="dark:text-04 text-02 font-medium">Visits Details</h4>
                            <table className="table-auto w-full border-collapse mt-5">
                                <thead>
                                    <tr className="bg-01 dark:bg-12">
                                        <th className="p-4 text-left min-w-64 text-sm dark:text-04">URL</th>
                                        <th className="p-4 text-left min-w-28 text-sm dark:text-04">Views</th>
                                        <th className="p-4 text-left min-w-28 text-sm dark:text-04">Uniques</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">htpps:/</td>
                                        <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">9.2k</td>
                                        <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">7.9k</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">.com/dashboard</td>
                                        <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">7.2k</td>
                                        <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">6.2k</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">.com/ecommerce-index</td>
                                        <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">6.8k</td>
                                        <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">5.5k</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">.com/apps/projects-overview</td>
                                        <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">5k</td>
                                        <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">4.9k</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">.com/blog/crypto/exchange</td>
                                        <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">4.3k</td>
                                        <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">3.3k</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="bg-white dark:bg-11 w-1/2 p-2 rounded-sm">
                        <h4 className="dark:text-04 text-02 font-medium">By Social Media</h4>
                        <table className="table-auto w-full border-collapse mt-5">
                            <thead>
                                <tr className="bg-01 dark:bg-12">
                                    <th className="p-4 text-left min-w-64 text-sm dark:text-04">Source</th>
                                    <th className="p-4 text-left min-w-28 text-sm dark:text-04">Views</th>
                                    <th className="p-4 text-left min-w-28 text-sm dark:text-04">Uniques</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">Twitter</td>
                                    <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">9.2k</td>
                                    <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">7.9k</td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">Facebook</td>
                                    <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">7.2k</td>
                                    <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">6.2k</td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">Instagram</td>
                                    <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">6.8k</td>
                                    <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">5.5k</td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">LinkedIn</td>
                                    <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">5k</td>
                                    <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">4.9k</td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-sm text-02 dark:text-10">WhatsApp</td>
                                    <td className="border-t border-07 px-6 text-02 text-sm dark:text-10">4.3k</td>
                                    <td className="border-t border-07 px-6 py-4 text-02 text-sm dark:text-10">3.3k</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </Container>
    )
}
export default Crm