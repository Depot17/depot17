'use client'
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { initNav } from "../scripts/initNav";

export default function Header() {
const pathname = usePathname();
    useEffect(() => {
        initNav();
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/get_started", label: "Get Started" },
        { href: "/projects", label: "Projects" },
        { href: "/resources", label: "Resources *" },
        { href: "/contact", label: "Contact *" },
    ];
    return (
    
<header id="navbar" className={`fixed opacity-0 -translate-y-1000 z-[1000] w-full top-0 bg-beige ${
        pathname === "/"
        ? ''
        : ''}`}>
 
    
    <nav className="fixed w-screen md:inline-flex flex bg-transparent justify-between 
    items-start md:items-center text-lg box-border h-16 px-2 pt-2">
        <a href="#" className="h-full px-4 border-2 rounded-tl-lg  flex items-center justify-center pt-1 bg-beige">
            <span id="name" className="font12 hover:opacity-50 transition-all duration-400 ease-in-out text-3xl font-bold whitespace-nowrap">
                DEPOT17</span>
        </a>
        <div id="spacer" className="grow overflow-hidden min-w-0 border-y-2 h-full flex items-center justify-center">
            <p id="banner" className={`w-auto whitespace-nowrap font-medium hidden  ${ pathname === "/" ? 'md:block ' : 'hidden'}`}>
                {/* {banner} */}
		    </p>
        </div>
        
        
        <div id="donate" className="hidden lg:inline-flex flex items-center justify-center gap-y-10 h-full border-2 border-r-0 px-3 py-1.25">
            <a href="#" className="nav-links h-full flex items-center justify-center whitespace-nowrap rounded-full bg-lblue hover:text-lgreen hover:bg-dbrown w-fit box-border border-2 border-dbrown hover:border-brown font-medium px-4">
            Donate 
            </a>
        </div>
          

        <button id="nav-button" type="button" 
        className="z-[100] aspect-[1/1] grid grid-cols-1 place-items-center border-l-2 border-b-2 border-2 bg-beige rounded-tr-lg h-full box-border">
            <span className="sr-only">Open main menu</span>
            <span id="open-nav" className="col-start-1 row-start-1 opacity-0 hover:cursor-pointer">
            <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="9" width="32" height="4" fill="#352922"/>
            <rect width="32" height="4" fill="#352922"/>
            <rect y="18" width="32" height="4" fill="#352922"/>
            </svg>
        </span>
            
        <span id="close-nav" className="opacity-0 col-start-1 row-start-1 hover:cursor-pointer">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.83008" width="32" height="4" transform="rotate(45 2.83008 0)" fill="#36251B"/>
<rect y="22.6274" width="32" height="4" transform="rotate(-45 0 22.6274)" fill="#36251B"/>
</svg>

    </span>
            
        </button>

        <div id="nav-bg" className=" opacity-0 fixed w-screen top-0 left-0 flex justify-end bg-dbrown/60 h-screen" >
        <div  id="nav" className="w-full h-full max-w-140 outline-1 bg-beige rounded-xl lg:rounded-none p-2 ">
            <div className="border-2 border-dbrown rounded-lg w-full h-full flex flex-col box-border">
                <div className="h-13.5 w-full border-b-2 box-border"></div>
                
            
                <ul className="text-3xl xs:text-4xl sm:text-[4.7vh] whitespace-nowrap uppercase font-semibold p-2 xs:p-4 mt-8 mb-4 space-y-1">
                   {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                        <li
                            key={link.href}
                            className={`w-full h-fit p-0.5 pl-4 pt-4 border-dbrown border-2 rounded-lg overflow-hidden hover:text-green
                            ${isActive ? "bg-orange pointer-events-none" : ""}`}
                        >
                            <Link href={link.href} className="">
                            {link.label}
                            </Link>
                        </li>
                        );
                    })}
                </ul>

                <hr className="border-1" />
                <div className="grow overflow-hidden">

                    <ul className="flex w-full h-full justify-center items-end p-4 gap-x-10 underline">
                        <li className="nav-links"><a href="https://www.linkedin.com/company/depot17" target="_blank">LinkedIn</a></li>
                        <li className="nav-links"><a href="https://github.com/Depot17" target="_blank">Github</a></li>

                    </ul>
                </div>
              

                <hr className="border-1" />
                <div className="min-h-10 flex items-center justify-center">
                    <p>&copy;2025 Depot17</p>
                </div>
            </div>
        </div>
        </div>

    </nav>  



    </header>

  )
}