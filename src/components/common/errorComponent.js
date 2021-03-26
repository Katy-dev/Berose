import React from "react";

export const ErrorComponent = (props) => {
    return(
        <div className="border border-red-600 text-red-500 p-3 m-2">
            <p className="p-2 font-oswaldRegular">{props.message}</p>
        </div>
    )
};