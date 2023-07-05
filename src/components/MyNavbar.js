import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineHome, 
    AiOutlineFundProjectionScreen,
    AiOutlineUser
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    }
    
    useEffect(() => {   
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <nav className={`fixed top-0 w-full transition-all ease-in duration-150 ${sticky ? "bg-neutral-50 bg-opacity-20 backdrop-blur-sm" : "bg-transparent"} `}>
            <div className="container mx-auto px-40 flex justify-between items-center py-4">
                <Link to="/" className="font-bold text-xl">
                    EH.
                </Link>
                <button onClick={() => setExpanded(!expanded)} className="md:hidden">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zm0 6A1.5 1.5 0 013.5 9h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 10.5zm1.5 5a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className={`flex-col md:flex-row md:flex ${expanded ? "flex" : "hidden"} md:items-center md:w-auto w-full`} id="menu">
                    <Link to="/" className="px-4 block mt-4 md:inline-block md:mt-0 mr-6 text-stone-950 hover:scale-105 hover:-translate-y-1 transition duration-150">
                      <div className="flex items-center">
                      <AiOutlineHome className="mr-2"/>Home
                      </div>
                    </Link>
                    <Link to="/about" className="px-4 block mt-4 md:inline-block md:mt-0 mr-6 text-stone-950 hover:scale-105 hover:-translate-y-1 transition duration-150">
                      <div className="flex items-center">
                        <AiOutlineUser className="mr-2"/> About
                      </div>
                    </Link>
                    <Link to="/projects" className="px-4 block mt-4 md:inline-block md:mt-0 mr-6 text-stone-950 hover:scale-105 hover:-translate-y-1 transition duration-150">
                      <div className="flex items-center">
                          <AiOutlineFundProjectionScreen className="mr-2"/> Projects
                      </div>
                    </Link>
                    <Link to="/resume" className="pl-4 block mt-4 md:inline-block md:mt-0 text-stone-950 hover:scale-105 hover:-translate-y-1 transition duration-150">
                      <div className="flex items-center">
                          <CgFileDocument className="mr-2"/> Resume
                      </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}   

export default MyNavbar;


