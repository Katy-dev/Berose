import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import arrow from "../../image/icon/rightArrow.svg";

export const PostComponent = (props) => {
    const {src, nameButton, title, description} = props;
    const [isShowContent, setShowContent] = useState(false);
    const wrapperRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        setShowContent(!isShowContent);
    };

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowContent(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className="flex flex-col items-stretch p-2">
            <div className="w-full relative">
                <img className="h-auto w-full z-0" src={src}
                     alt="woman"/>
                <Link to='/gallery'>
                    <button type="button"
                            className="absolute bottom-1/4 -left-3 bg-white hover:bg-red-600 hover:text-white -rotate-90 transition ease-in-out duration-500 transform font-oswaldLight uppercase py-2 px-4 focus:outline-none focus:shadow-outline">
                        {nameButton}</button>
                </Link>
            </div>
            <h5 className="uppercase font-oswaldRegular text-lg py-4 flex-grow">{title}</h5>
            <button onClick={handleClick} type="button"
                    className="text-left p-1 cursor-pointer focus:outline-none focus:shadow-outline font-oswaldLight uppercase">
                Continue reading
                <img className="inline-block pb-1 pl-2" src={arrow} alt="arrow"/>
            </button>
            <div
                className={`${isShowContent ? "block" : "hidden"} z-10 fixed inset-0 bg-black bg-opacity-75 transition-opacity`}>
                <div ref={wrapperRef}
                     className="z-10 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bd-white bg-white text-left overflow-hidden shadow-xl transform transition-all">
                    <p className="z-10 font-oswaldRegular p-4 leading-8 rounded-sm">{description}
                    </p>
                </div>
            </div>
        </div>
    )
};
