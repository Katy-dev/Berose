import React from "react";
import {Link} from "react-router-dom";

export const BlockAboutCompany = () => {
    return (
        <section className="md:mx-auto pt-sm px-2 w-full h-full max-w-cc">
            <div className="w-full flex flex-col md:mx-auto">
                <h5 className="text-center text-base font-bold text-red-600 font-oswaldRegular uppercase">ABOUT
                    OUR COMPANY</h5>
                <h3 className="text-center text-2xl 2xl:md:text-3xl xl:text-3xl lg:text-3xl font-bold font-oswaldRegular uppercase pb-4 pt-10">CREATING
                    A
                    TIMELESS LOOK, COUPLED WITH THE MAIN FLAWLESS MOMENT
                </h3>
                <hr className="mx-auto w-1/3 text-gray-500 text-center border-t-2 pb-6"/>
            </div>
            <p className="w-full text-center md:mx-auto text-gray-500 font-oswaldRegular">Firmament earth winged
                set multiply together, grass called whose. Image make one you're to whales on which lights
                moveth have rule his have his let tree all there thing seed gathered without, whales you night
                very sixth was two Own. Fruit toge appear form. Whales whose land life brought divided. Place
                you're abundantly that forth. Under second given gathered earth You'll replenish you're bring
                one. Created man morning had which, for fly very telented person in rule creeping</p>
            <div className="flex justify-center pb-sm">
                <Link to='/about'>
                    <button
                        className="mt-4 2xl:mt-10 xl:mt-10 lg:mt-8 md:text-base md:mt-5 sm:mt-4 bg-black font-oswaldLight hover:bg-red-600 transition ease-in-out duration-500 transform hover:-translate-y-0.5 text-white font-light uppercase py-2 px-4 xl:px-10 xl:px-10 lg:px-8 md:px-5 sm:px-4 focus:outline-none focus:shadow-outline">
                        READ MORE
                    </button>
                </Link>
            </div>
        </section>
    )
};
