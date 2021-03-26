import clipArt from "../../image/icon/clipArt.png";
import React from "react";

export const PostBlockServicePage = (props) => {
    const {src, title, content} = props;

    return(
        <div className="px-4">
            <div className="p-2 relative w-24 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-24">
                <img className="w-24 h-24 lg:w-full lg:h-full md:w-full md:h-full sm:w-24 sm:h-24" src={clipArt} alt="icon"/>
                <img className="absolute top-1/2 left-1/3 z-10 pl-1" src={src} alt="icon"/>
            </div>
            <div>
                <h5 className="uppercase text-xl font-oswaldRegular py-4 hover:text-red-600">{title}</h5>
                <p className="pb-6 font-oswaldRegular text-gray-600">{content}</p>
            </div>
        </div>
    )
};
