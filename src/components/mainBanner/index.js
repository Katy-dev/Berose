import React from "react";
import { Link } from "react-router-dom";
import firstBannerImg from "../../image/firstBanner.jpg"

export const MainBanner = () => {
    return (
        <section className="h-full w-full justify-center flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row mt-2 py-10 px-2">
            <div className="mx-auto w-1/3 h-full p-4 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/3">
                <img className="sm:w-full" src={firstBannerImg} alt="woman"/>
            </div>
            <div className="mx-auto w-2/3 pt-6 2xl:pt-36 xl:pt-36 lg:pt-28 md:pt-8 sm:pt-4 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/3">
                <h5 className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left font-normal text-base uppercase font-oswaldRegular 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-base">
                    IMAGES THAT TELL STORY</h5>
                <h1 className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left font-bold  uppercase font-oswaldRegular py-4 text-5xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl 2xl:py-8 xl:py-8 lg:py-8 md:py-4 sm:py-4">
                    FASHION <span
                    className=" font-oswaldRegular text-red-600 uppercase font-bold text-5xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl ">
                    MODEL</span>
                </h1>
                <p className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left font-oswaldRegular sm:text-base">Us seed dominion isn't brought from over likeness in
                    under first fow were likeness kind years gathering may that after dantly</p>
                <div className="flex justify-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start">
                <Link to='/gallery'>
                    <button
                        className="z-0 mt-4 2xl:mt-10 xl:mt-10 lg:mt-8 md:text-base md:mt-5 sm:mt-4 bg-black font-oswaldLight hover:bg-red-600 transition ease-in-out duration-500 transform hover:-translate-y-0.5 text-white font-light uppercase py-2 px-4 xl:px-10 xl:px-10 lg:px-8 md:px-5 sm:px-4 focus:outline-none focus:shadow-outline">
                        View Gallery
                    </button>
                </Link>
                </div>
            </div>
        </section>
    )
};
