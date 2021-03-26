import React from "react";
import Photo1 from "../../image/photo1.jpg";
import Photo2 from "../../image/photo2.jpg";
import Photo3 from "../../image/photo3.jpg";
import Photo4 from "../../image/photo4.jpg";
import Photo5 from "../../image/photo5.jpg";
import Photo6 from "../../image/photo6.jpg";
import Photo7 from "../../image/photo7.jpg";
import Photo8 from "../../image/photo8.jpg";


const imgList = [
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo1} alt="women"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo2} alt="women"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo3} alt="women"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo4} alt="women"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo5} alt="man"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo6} alt="women"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo7} alt="man"/>,
    <img className="img h-full transform w-full transition-all duration-500 ease-in-out" src={Photo8} alt="women"/>,
]

export const BlockGallery = () => {
    return (
        <section className="md:mx-auto pt-sm pb-sm w-full px-2">
            <div>
                <h5 className="text-center text-base font-bold text-red-600 font-oswaldRegular uppercase">Recent
                    Project</h5>
                <h3 className="text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pb-4 pt-10">Best
                    photography showcase</h3>
                <hr className="mx-auto w-1/5 text-gray-500 text-center border-t-2 pb-6"/>
            </div>
            <ul className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 pt-8">
                {
                    imgList.map((item, index) => {
                        return (
                            <li className="wrapper_img w-full relative h-full overflow-hidden relative shadow-md"
                                key={index}>
                                {item}
                                <div
                                    className="opacity-0 hover:opacity-80 transition duration-500 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-calc h-calc">
                                    <div
                                        className="absolute top-1/2 left-0 right-0 bottom-0 transform -translate-y-1/2">
                                        <h5 className="text-center text-white font-oswaldLight font-bold uppercase pt-12 pb-6">
                                            {item.props.alt}
                                            <span> photography</span>
                                        </h5>
                                        <p className="text-center text-red-700 font-oswaldLight font-bold">Model</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
};
