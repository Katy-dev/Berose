import React from "react";
import dessert from "../../image/blockGallery/dessert.jpg";
import male from "../../image/blockGallery/male.jpg";
import nature from "../../image/blockGallery/nature.jpg";
import desk from "../../image/blockGallery/desk.jpg";
import road from "../../image/blockGallery/road.jpg";
import sunset from "../../image/blockGallery/sunset.jpg";
import "./index.css";

export const ImageGallery = () => {
    return (
        <section className="md:mx-auto pt-10 pb-sm w-full">
            <div className="mx-auto w-1/2">
                <h3 className="text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pb-4 pt-10">View
                    image gallery</h3>
                <hr className="mx-auto w-1/3 text-gray-500 text-center border-t-2 pb-4"/>
                <p className="w-full text-center md:mx-auto text-gray-500 font-oswaldRegular">Thing spirit you're good
                    moved together above man divide seasons</p>
            </div>
            <div className="">
                <ul className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-5 gap-y-3 pt-8">
                    <li className="wrapper_img h-full overflow-hidden relative">
                        <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={dessert} alt="photo"/>
                        <div className="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                        </div>
                    </li>
                    <li className="wrapper_img h-full overflow-hidden relative ">
                        <img className="img h-full w-full transform duration-500 ease-in" src={male} alt="photo"/>
                        <div className ="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                        </div>
                    </li>
                    <li className="wrapper_img h-full overflow-hidden relative ">
                        <img className="img h-full w-full transform transition-all duration-500 ease-in" src={desk} alt="photo"/>
                        <div className="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                        </div>
                    </li>
                    <li className="wrapper_img h-full overflow-hidden relative transform">
                        <img className="img h-full w-full transform transition-all duration-500 ease-in" src={nature} alt="photo"/>
                        <div className="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                        </div>
                    </li>
                    <li className="wrapper_img h-full overflow-hidden relative">
                        <img className="img h-full w-full transform transition-all duration-500 ease-in" src={sunset} alt="photo"/>
                        <div className="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                        </div>
                    </li>
                    <li className="wrapper_img h-full overflow-hidden hover:scale-150 relative">
                        <img className="img h-full w-full transform transition-all duration-500 ease-in " src={road} alt="photo"/>
                        <div className="flex justify-center items-center absolute opacity-0 hover:opacity-80 bg-gradient-to-t from-red-700 to-black hover:-translate-y-1  inset-0 w-full h-full">
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
};
