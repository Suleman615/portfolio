import { useEffect, useState } from "react";
import useLocalStorage from 'use-local-storage';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { LuAlignRight } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";




const Navbar = () => {
    const [shownav, setNav]=useState(false)


    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    // Function to toggle between dark mode and light mode
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
        <div className="flex items-center justify-between px-2 md:px-10 fixed w-full bg-white dark:bg-gray-950 z-10 ">


            <div className="flex  items-center text-gray-950 dark:text-white"> <FaLessThan size={40} /> <h2 className="font-bold text-[40px] mb-1.5">GS/</h2><FaGreaterThan size={40} /></ div>


            <div className=" gap-4 items-center hidden md:flex">
                <div className="flex gap-4 border-r border-gray-400 pr-4">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="cursor-pointer" onClick={switchTheme}>{(theme==='light')?<MdOutlineLightMode size={30} />:<BsMoonStars size={24} />}</div>
                <button className="px-4 rounded-xl py-1 bg-gray-950 text-white dark:text-gray-950 dark:bg-white">
                    Download CV
                </button>
            </div>

{(shownav)?<RxCross2 className="block md:hidden " onClick={()=>{setNav(!shownav)}}  size={34}/>:<LuAlignRight className="block md:hidden " onClick={()=>{setNav(!shownav)}}  size={34}/>}

            
        </div>
        <div className={`flex pb-4 flex-col w-full absolute bg-white dark:bg-gray-950 gap-4 px-6 v ${(shownav)? 'block md:hidden':'hidden'}`}>
                <div className="flex pt-20  flex-col gap-4 border-b pb-5 border-gray-400 pr-4">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="contact">Contact</a>
                </div>
                <div className="cursor-pointer w-fit flex justify-between sm:justify-start gap-10" onClick={switchTheme}><p>Switch Theme</p>{(theme==='light')?<MdOutlineLightMode size={30} />:<BsMoonStars size={24} />}</div>
                <button className="px-10 md:px-4 w-auto sm:w-fit rounded-xl py-1 bg-gray-950 text-white dark:text-gray-950 dark:bg-white">
                    Download CV
                </button>
            </div>
        </>

    );
};

export default Navbar;