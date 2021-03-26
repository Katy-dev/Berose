import React, { useState } from "react";

export const useHttp = (url, method, body={}) => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [error, setError] = useState({
        hasError: false,
        errorMessage: '',
    });

   const request = fetch(url, {
        method: method,
        body: JSON.stringify(body),
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            setSubmitted(true)
        })
        .catch((err) =>
            setError({
            hasError: true,
            errorMessage: err.message,
        }))
return{
    request,
    isSubmitted,
    error,
}
}