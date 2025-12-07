import React from "react";
import { IoSearch } from "react-icons/io5";


const Search = ()=>{
    return(
        <div className="w-72 h-12 bg-01 rounded-xl relative flex items-centr px-4 py-3 dark:bg-12">
            <button className="text-02"> <IoSearch size={22} className='hover:text-03 dark:text-06'/></button>
            <input className="border-0 outline-0 bg-transparent px-4 text-02 text-sm dark:placeholder:text-06" type="text" placeholder="Search here..." />
        </div>
    )
}

export default Search