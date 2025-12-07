"use client"
import React, { useEffect, useRef, useState , useContext } from "react"
import Container from "@/component/Container"
import { IoHomeOutline } from "react-icons/io5";
import { AppContext } from "@/context/ContextMenu";
import { MdChevronRight } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import { FaClock } from "react-icons/fa6";
import { RiPieChart2Fill } from "react-icons/ri";
import { IoIosTrendingDown } from "react-icons/io";
import { LuBriefcase } from "react-icons/lu";
import ChartsAnaly1 from "@/component/ChartsAnaly1";
import ChartsAnaly2 from "@/component/ChartsAnaly2";
import { FaChrome } from "react-icons/fa";
import { FaSafari } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaOpera } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa";



const Analytics = () =>{

    const {isToggleSidebar, toggleSidebar, setIsHideSliderAndHeader } = useContext(AppContext)

    useEffect(() => {
        setIsHideSliderAndHeader(false)
      }, [])


    return(
        <Container>
            <div className={`min-h-screen pt-20 px-6 ${isToggleSidebar ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
                <div className="flex text-02 dark:text-04 mt-4">
                    <h4>Dashboard</h4>
                    <span className="border-l border-06 ml-2"></span>
                    <IoHomeOutline className="ml-2" size={20} />
                    <MdChevronRight className="ml-2" size={25} />
                    <h4>Analutics</h4>
                </div>
                <section className="grid grid-cols-4 gap-4 mt-8">
                    <div className="bg-white dark:bg-11 p-4">
                        <h4 className="font-semibold dark:text-04">Sessions</h4>
                        <div className="flex items-center justify-between mt-4">
                            <h5 className="text-3xl font-extrabold dark:text-04">24k</h5>
                            <ImUsers className=" text-pink-500" size={30}/>
                        </div>
                        <div className="flex items-center mt-4">
                            <IoIosTrendingUp className="text-green-400"/>
                            <h5 className="text-green-400 text-sm dark:text-10">8.5%</h5>
                            <h4 className="text-02 ml-2 text-sm dark:text-10">New Sessions Today...</h4>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-11 p-4">
                        <h4 className="font-semibold dark:text-04">Avg.Sessions</h4>
                        <div className="flex items-center justify-between mt-4">
                            <h5 className="text-3xl font-extrabold dark:text-04">00:18</h5>
                            <FaClock className=" text-green-500" size={30}/>
                        </div>
                        <div className="flex items-center mt-4">
                            <IoIosTrendingUp className="text-green-400"/>
                            <h5 className="text-green-400 text-sm dark:text-10">1.5%</h5>
                            <h4 className="text-02 ml-2 text-sm dark:text-10">Weekly Avg.Sessio...</h4>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-11 p-4">
                        <h4 className="font-semibold dark:text-04">Bounce Rate</h4>
                        <div className="flex items-center justify-between mt-4">
                            <h5 className="text-3xl font-extrabold dark:text-04">$2400</h5>
                            <RiPieChart2Fill className=" text-blue-500" size={30}/>
                        </div>
                        <div className="flex items-center mt-4">
                            <IoIosTrendingDown className="text-red-400"/>
                            <h5 className="text-red-400 text-sm dark:text-10">35%</h5>
                            <h4 className="text-02 ml-2 text-sm dark:text-10">Bounce Rate Weekly...</h4>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-11 p-4">
                        <h4 className="font-semibold dark:text-04">Goal Completions</h4>
                        <div className="flex items-center justify-between mt-4">
                            <h5 className="text-3xl font-extrabold dark:text-04">85000</h5>
                            <LuBriefcase className="text-orange-500" size={30}/>
                        </div>
                        <div className="flex items-center mt-4">
                            <IoIosTrendingUp className="text-green-400"/>
                            <h5 className="text-green-400 text-sm dark:text-10">10.5%</h5>
                            <h4 className="text-02 ml-2 text-sm dark:text-10">Completions Wee...</h4>
                        </div>
                    </div>
                </section>
                <section className="flex mt-5 gap-4">
                    <div className="w-2/3 bg-white dark:bg-11">
                      <ChartsAnaly1 />
                    </div>
                    <div className="w-1/2 bg-white dark:bg-11 p-2">
                       <h3 className="text-02 dark:text-04">Tasks Performance</h3>
                       <ChartsAnaly2 />
                    </div>
                </section>
                <section className="flex my-8 gap-4">
                    <div className="bg-white dark:bg-11 rounded-sm p-2 w-1/2">
                        <h4 className="dark:text-04 font-medium text-02">Browser Used By Users</h4>
                        <table className="table-auto w-full border-collapse mt-5">
                            <thead>
                                <tr className="bg-01 dark:bg-12">
                                    <th className="p-4 text-left min-w-44 text-sm dark:text-04">Browser</th>
                                    <th className="p-4 text-left min-w-32 text-sm dark:text-04">Sessions</th>
                                    <th className="p-4 text-left min-w-32 text-sm dark:text-04">Bounce Rate</th>
                                    <th className="p-4 text-left min-w-32 text-sm dark:text-04">Transactions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4">
                                        <div className="flex items-center gap-2">
                                            <FaChrome className="text-red-600" />
                                            <h3 className="text-sm text-02 dark:text-10">Chrome</h3>
                                        </div>
                                    </td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">10853 <span className="text-xs">(52%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">52.80%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">566 <span className="text-xs">(92%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4">
                                        <div className="flex items-center gap-2">
                                            <FaSafari className="text-02" />
                                            <h3 className="text-sm text-02 dark:text-10">Safari</h3>
                                        </div>
                                    </td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">2545 <span className="text-xs">(47%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">47.54%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">498 <span className="text-xs">(81%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4">
                                        <div className="flex items-center gap-2">
                                            <FaInternetExplorer className="text-orange-300" />
                                            <h3 className="text-sm text-02 dark:text-10">Internet-Explorer</h3>
                                        </div>
                                    </td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">1836 <span className="text-xs">(38%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">41.12%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">455 <span className="text-xs">(74%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4">
                                        <div className="flex items-center gap-2">
                                            <FaOpera className="text-red-600" />
                                            <h3 className="text-sm text-02 dark:text-10">Opera</h3>
                                        </div>
                                    </td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">1958 <span className="text-xs">(31%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">36.82%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">361 <span className="text-xs">(61%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4">
                                        <div className="flex items-center gap-2">
                                            <FaFirefox className="text-red-600" />
                                            <h3 className="text-sm text-02 dark:text-10">Firefox</h3>
                                        </div>
                                    </td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">1566 <span className="text-xs">(26%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">29.33%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">299 <span className="text-xs">(49%)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white dark:bg-11 w-1/2 p-2">
                        <h4 className="dark:text-04 font-medium text-02">Traffic Sources</h4>
                        <table className="table-auto w-full border-collapse mt-5">
                            <thead>
                                <tr className="bg-01 dark:bg-12">
                                    <th className="p-4 text-left min-w-44 text-sm dark:text-04">Channel</th>
                                    <th className="p-4 text-left min-w-32 text-sm dark:text-04">Sessions</th>
                                    <th className="p-4 text-left min-w-32 text-sm dark:text-04">% Change</th>
                                    <th className="p-4 text-left min-w-32 text-sm dark:text-04">Prev.Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">Organic search</td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">10853 <span className="text-xs">(52%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">52.80%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">566 <span className="text-xs">(92%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">Direct</td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">2545 <span className="text-xs">(47%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">52.80%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">498 <span className="text-xs">(81%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4text-02 text-sm dark:text-10">Social</td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">1836 <span className="text-xs">(38%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">-17.20%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">455 <span className="text-xs">(74%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">Referal</td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">1958 <span className="text-xs">(31%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">29.33%</td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">361 <span className="text-xs">(61%)</span></td>
                                </tr>
                                <tr>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">Email</td>
                                    <td className="border-t border-07 px-2 py-4 text-02 text-sm dark:text-10">1566 <span className="text-xs">(26%)</span></td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">-8.24% </td>
                                    <td className="border-t border-07 text-center py-4 text-02 text-sm dark:text-10">299 <span className="text-xs">(49%)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </Container>
    )
}
export default Analytics