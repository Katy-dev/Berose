import React from "react";
import BusinessIcon from "../../image/icon/payIcon.svg";
import WeddingIcon from "../../image/icon/weddingRingsIcon.svg";
import TravelIcon from "../../image/icon/travelIcon.svg";
import {Link} from "react-router-dom";

const priceDataList = [
    {
        img: BusinessIcon,
        title: "business",
        prise: 32.00,
        time: "8 Hour sessions",
        edit: "Free editing",
        images: "80 Images",
        support: "Free 24/7 support",
        online: "Online galley",
    },
    {
        img: WeddingIcon,
        title: "wedding",
        prise: 45.00,
        time: "10 Hour sessions",
        edit: "Free editing",
        images: "150 Images",
        support: "Free 24/7 support",
        online: "Online galley",
        bgColorRed: {backgroundColor: "red", color: "#FFF"},
        bgColorWhite: {backgroundColor: "white", color: "#000"},
        hover: {pointerEvents: "none"},
    },
    {
        img: TravelIcon,
        title: "travel",
        prise: 58.99,
        time: "16 Hour sessions",
        edit: "Free editing",
        images: "200 Images",
        support: "Premium 24/7 support",
        online: "Online galley",
    },
];

export const BlockPricing = () => {
    return (
        <section className="md:mx-auto pt-sm pb-sm w-full max-w-cc">
            <div>
                <h5
                    className="text-center text-base font-bold text-red-600 font-oswaldRegular uppercase">Prising
                    plan</h5>
                <h3 className="text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pt-8 pb-4 px-4">Reasonable
                    prising plan</h3>
                <hr className="mx-auto w-1/5 text-gray-500 text-center border-t-2 pb-6"/>
            </div>
            <div
                className="flex flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap max-w-cc">
                {
                    priceDataList.map((item, index) => {
                        return (
                            <div
                                className="px-4 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full"
                                key={index}>
                                <div
                                    className="my-2 flex flex-col items-center bg-white h-auto font-oswaldRegular p-4 border border-gray-200 transition duration-500 ease-in-out transform
                                    2xl:hover:-translate-y-1 xl:hover:-translate-y-1 lg:hover:-translate-y-1 md:hover:-translate-y-1
                                    2xl:hover:scale-100 xl:hover:scale-100 lg:hover:hover:scale-100 md:hover:hover:scale-100
                                    2xl:hover:shadow-2xl xl:hover:shadow-2xl lg:hover:shadow-2xl md:hover:shadow-2xl
                                    2xl:hover:border-transparent xl:hover:border-transparent lg:hover:border-transparent
                                     hover:none">
                                    <div className="w-full h-full p-4 mb-4 bg-gray-100"
                                         style={item.bgColorRed}>
                                        <img className="w-1/3 h-auto mx-auto pb-4"
                                             src={item.img} alt="icon"/>
                                        <h5 className="uppercase p-2 text-center font-bold text-3xl">
                                            {item.title}</h5>
                                    </div>
                                    <div className="px-4 py-6 bg-gray-100 w-full"
                                         style={item.bgColorRed}>
                                        <div className="w-full text-bold text-center font-bold text-4xl pb-4"
                                             style={item.bgColorRed}>
                                            ${item.prise}</div>
                                        <div
                                            className="w-full text-gray-500 font-oswaldLight pb-4 text-center"
                                            style={item.bgColorRed}>
                                            {item.time}</div>
                                        <div
                                            className="w-full text-gray-500 font-oswaldLight pb-4 text-center"
                                            style={item.bgColorRed}>
                                            {item.edit}</div>
                                        <div
                                            className="w-full text-gray-500 font-oswaldLight pb-4 text-center"
                                            style={item.bgColorRed}>
                                            {item.images}</div>
                                        <div
                                            className="w-full text-gray-500 font-oswaldLight pb-4 text-center"
                                            style={item.bgColorRed}>
                                            {item.support}</div>
                                        <div
                                            className="w-full text-gray-500 font-oswaldLight pb-4 text-center"
                                            style={item.bgColorRed}>
                                            {item.online}</div>
                                        <div className="flex justify-center">
                                            <Link to='/services'>
                                                <button
                                                    style={item.hover}
                                                    className="button mt-4 2xl:mt-10 xl:mt-10 lg:mt-8 md:text-base md:mt-5 sm:mt-4 bg-black font-oswaldLight hover:bg-red-600 transition ease-in-out duration-500 transform hover:-translate-y-0.5 text-white font-light uppercase py-2 px-4 xl:px-10 xl:px-10 lg:px-8 md:px-5 sm:px-4 focus:outline-none focus:shadow-outline">
                                                    Book now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
};
