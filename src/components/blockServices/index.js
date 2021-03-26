import React from "react";
import TravelImg from "../../image/travel.jpg"
import EnvelopeImg from "../../image/envelope.jpg"
import BusinessIMG from "../../image/business.jpg"
import {Link} from "react-router-dom";

const dataList = [
    {
        img: BusinessIMG,
        title: "business photography",
        content: "Beginning trees fifth move that an won every without years own upon waters female tree give evening over man green set land beginning"
    },
    {
        img: EnvelopeImg,
        title: "wedding photography",
        content: "Lesser for cake first face sea for let give also may have moved their beginning you how great waters tree give his air very curious our seas"
    },
    {
        img: TravelImg,
        title: "travel photography",
        content: "Tree give evening over man green set land beginning also may have moved heir beginning you fow great his air very curious us seas"
    },
];

export const BlockServices = () => {
    return (
        <section className="md:mx-auto w-full pt-sm pb-sm max-w-cc">
            <div><h5
                className="text-center text-base font-bold text-red-600 font-oswaldRegular uppercase">SPECIAL
                SERVICE</h5>
                <h3 className="text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pb-4 pt-8">MULTIPLE
                    OFFER WE PROVIDE</h3>
                <hr className="mx-auto w-1/5 text-gray-500 text-center border-t-2 pb-6"/>
            </div>
            <div
                className="flex flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap max-w-cc">
                {
                    dataList.map((item, index) => {
                        return (
                            <div
                                className="px-4 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full" key={index}>
                                <div
                                    className="my-2 flex flex-col items-center justify-between bg-white font-oswaldRegular px-10 py-20 border border-gray-200 transition duration-500 ease-in-out transform 2xl:hover:-translate-y-1 xl:hover:-translate-y-1 lg:hover:-translate-y-1 md:hover:-translate-y-1
                                    2xl:hover:hover:scale-100 xl:hover:scale-100 lg:hover:hover:scale-100 md:hover:hover:scale-100
                                    2xl:hover:hover:shadow-2xl xl:hover:shadow-2xl lg:hover:shadow-2xl md:hover:shadow-2xl
                                    2xl:hover:border-transparent xl:hover:border-transparent lg:hover:border-transparent
                                     hover:none">
                                    <div className="border-b border-gray-200 w-2/3 h-1/3">
                                        <img className="w-2/3 h-auto mx-auto pb-6"
                                             src={item.img} alt="icon"/>
                                    </div>
                                    <h5 className="uppercase p-8 flex-grow-0 text-center">
                                        {item.title}</h5>
                                    <p className="text-gray-500 font-oswaldLight pb-6 text-center flex-grow">
                                        {item.content}</p>
                                    <div>
                                        <Link to='/services'>
                                            <button
                                                className="uppercase focus:outline-none focus:shadow-outline hover:text-red-600 cursor-pointer">
                                                LEARN MORE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}
