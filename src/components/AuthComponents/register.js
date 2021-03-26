import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessageContainer, ErrorSummary } from "../../services/errorMessageComponents/errorMessage";
import { ErrorMessage } from "@hookform/error-message";
import { SuccessComponent } from "../common/successComponent";
import {ErrorComponent} from "../common/errorComponent";

export const RegisterForm = () => {
    const { register, handleSubmit, errors, getValues } = useForm();
    const [success, setSuccess] = useState({
        hasSuccess: false,
        message: "" ,
    });
    const [error, setError] = useState({
        hasError: false,
        errorMessage: "",
    });

    const onSubmit = (data, e) => {
        e.target.reset();
        if (data) {
            setSuccess({
                hasSuccess: true,
                message: "You are successfully login",
            });
            setTimeout(() => {
                setSuccess({
                    hasSuccess: false,
                    message: "",
                });
            }, 3000);
        } else {
            setError({
                hasError: true,
                errorMessage: "Oops, something went wrong..",
            });
            setTimeout(() => {
                setError({
                    hasError: false,
                    errorMessage: "",
                });
            }, 3000);
        }
    }

    return (
        <section className="w-full mx-auto">
            <div className="w-full max-w-3xl z-5">
                <div className="pt-6 bg-white shadow-md rounded min-w-xs 2xl:min-w-md xl:min-w-md lg:min-w-md md:min-w-md sm:min-w-xs w-full h-auto z-50">
                    <h3 className="font-light text-lg text-center pt-4 uppercase">Time to feel like home</h3>
                    <form onSubmit={handleSubmit(onSubmit)}
                          className="bg-white px-8 py-8 min-w-xs 2xl:min-w-md xl:min-w-md lg:min-w-md md:min-w-md sm:min-w-xs pt-4 min-h-lg">
                        <div className="pb-6">
                            <input
                                ref={register({
                                    required: "This field is required",
                                    pattern: {
                                        value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email" name="email"
                                className="font-light shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-grey-300 "
                                placeholder="Enter email"/>
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                as={<ErrorMessageContainer/>}
                            />
                        </div>
                        <div className="pb-6">
                            <input
                                ref={register({
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    }
                                })}
                                type="password" name="password"
                                className="font-light shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-grey-300"
                                placeholder="Enter password"/>
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                as={<ErrorMessageContainer/>}
                            />
                        </div>
                        <div className="pb-6">
                            <input
                                ref={register({
                                    required: "You must specify a password",
                                    validate: {
                                        passwordEqual: value => (value === getValues().password) || 'Password confirmation error!',
                                    }
                                })}
                                type="password" name="confirmPassword"
                                className="font-light shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-grey-300"
                                placeholder="Repeat password"/>
                            <ErrorMessage
                                errors={errors}
                                name="confirmPassword"
                                as={<ErrorMessageContainer/>}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="mt-2 bg-black hover:bg-red-600 transition ease-in-out duration-500 transform hover:-translate-y-0.5 text-white font-light uppercase py-2 px-12 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >Register
                            </button>
                        </div>
                        <ErrorSummary errors={errors} as={<ErrorSummary/>}/>
                        {
                            success.hasSuccess && (<SuccessComponent message={success.message} />)
                        }
                        {
                            error.hasError && (<ErrorComponent message={error.errorMessage} />)
                        }
                    </form>
                </div>
            </div>
        </section>
    )
};
