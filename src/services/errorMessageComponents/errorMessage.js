import {ErrorMessage} from "@hookform/error-message";


export const ErrorSummary = ({errors}) => {
    if (Object.keys(errors).length === 0) {
        return null;
    }
    return (
        <div className="error text-red-600 text-sm font-light pl-2 border border-red-500 p-2 mt-4">
            {Object.keys(errors).map((fieldName) => (
                <ErrorMessage errors={errors} name={fieldName} as="div" key={fieldName}/>
            ))}
        </div>
    );
}

export const ErrorMessageContainer = ({children}) => (
    <span className="error text-red-600 text-sm font-light pl-2">{children}</span>
);