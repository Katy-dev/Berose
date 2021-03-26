import React, {useState} from "react"
import {LoginForm} from "../../components/AuthComponents/login";
import {RegisterForm} from "../../components/AuthComponents/register";
import { Header } from "../../components/header";
import {Footer} from "../../components/footer";

const AuthPage = () => {
    const [isActive, setActive] = useState(false);
    const current = isActive ? "Register" : "Login";
    const currentText = isActive ? "New here?" : "One of us?";

    const changeState = () => {
        setActive(() => !isActive);
    };

    return (
        <section className="w-full h-full">
            <Header />
            <section className="bg-gray-100 w-full h-full">
                <div className=" max-w-cc mx-auto">
                <div className="bg-gray-100 max-w-cc mx-auto">
                    <div className="flex justify-center">
                        <p className="text-black text-4xl p-4 mt-10 mb-4 text-center w-72 border-b-2 border-gray-400 ">GET
                            IN TOUCH</p></div>
                    <p className="bg-gray-100 text-gray-500 p-4 pb-8 text-center font-light">Every fills darkness
                        creeping whose that saying don't bind creeping saying remove even cattle very also unto light
                        image signs one
                    </p>
                </div>
                <div className="bg-gray-100 mx-auto flex md:flex-row justify-center align-middle p-9 w-full pb-20 ">
                    <div className="flex flex-row justify-center align-middle">
                        {isActive && <LoginForm/>}
                        {!isActive && <RegisterForm/>}
                        <Toggle current={current} currentText={currentText} onClick={changeState}/>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
                </div>
            </section>
        </section>
    )
};

const Toggle = props => {
    return (
        <div className="flex relative items-center h-96 w-full">
            <div
                className="flex flex-col toggle shadow-md mt-2 p-2 h-4/5 w-26 2xl:w-36 xl:w-36 lg:w-36 md:w-30 sm:w-28 z-0 h-sm bg-black text-center hover:bg-red-600 transition ease-in-out duration-700">
                <p className="pt-2 font-light text-white flex-grow">{props.currentText}</p>
                <button type="button"
                        className="px-2 pb-2 pt-2 font-light text-white uppercase border cursor-pointer focus:outline-none focus:shadow-outline"
                        onClick={props.onClick}>
                    {props.current}
                </button>
            </div>
        </div>
    )
};

export default AuthPage;