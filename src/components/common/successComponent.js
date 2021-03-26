import React from "react";

export const SuccessComponent = (props) => {
  return(
      <div className="border border-green-600 text-green-500 p-3 m-2">
          <p className="p-2 font-oswaldRegular">{props.message}!</p>
      </div>
  )
};