import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import menuIcon from "../../image/icon/menuIcon.svg"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(() => !isOpen);

    };

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    return (
        <header className="flex flex-row justify-end px-6 font-light w-full shadow relative">
            <div className="flex-grow text-3xl h-full">
                <Link to='/home'>
                    <button
                        className="p-6 font-bold flex-grow uppercase hover:text-red-600 transition ease-in-out focus:outline-none focus:shadow-outline">
                        <span>BER</span>
                        <span className='text-red-600'>O</span>
                        <span>SE</span>
                    </button>
                </Link>
            </div>
            <nav className="h-full">
                <ul ref={wrapperRef} className={`${isOpen ? "block" : "hidden"} 2xl:flex xl:flex lg:flex md:flex shadow-lg 2xl:shadow-none xl:shadow-none lg:shadow-none md:shadow-none z-10 flex flex-col p-2 absolute w-full md:w-full sm:w-full bg-white top-full left-0 2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col 2xl:relative xl:relative lg:relative md:relative transition duration-500 ease-in-out transform`}>
                    <li>
                        <Link to='/'>
                            <button
                                className="font-bold font-oswaldLight text-lg pr-8 p-4 hover:text-red-600 transition ease-in-out focus:outline-none focus:shadow-outline">
                                Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <button
                                className="font-bold font-oswaldLight text-lg pr-8 p-4 hover:text-red-600 transition ease-in-out focus:outline-none focus:shadow-outline">
                                About
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/gallery'>
                            <button
                                className="font-bold font-oswaldLight text-lg pr-8 p-4 md:p-4 sm:p-4 hover:text-red-600 transition ease-in-out focus:outline-none focus:shadow-outline">
                                Gallery
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/services'>
                            <button
                                className="font-bold font-oswaldLight text-lg pr-8 p-4 md:p-4 sm:p-4 hover:text-red-600 transition ease-in-out focus:outline-none focus:shadow-outline">
                                Services
                            </button>
                        </Link>
                    </li>
                    <li><Link to='/auth'>
                        <button
                            className="font-bold font-oswaldLight text-lg pr-8 p-4 md:p-4 sm:p-4 hover:text-red-600 transition ease-in-out focus:outline-none focus:shadow-outline">
                            Register/Login
                        </button>
                    </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-center items-center">
                <img onClick={handleClick}
                     className="p-2 block md:hidden"
                     src={menuIcon} alt="icon"/>
            </div>
        </header>
    )
};
