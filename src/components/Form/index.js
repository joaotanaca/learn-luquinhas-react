import { useEffect } from "react";
import { handleGetJson } from "../../helpers/formGetValues";
import "./index.css";

const Form = ({ children, className, onSubmit, ...props }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const values = handleGetJson(event.currentTarget.elements);
        onSubmit(values);
    };
    useEffect(() => {
        alert("renderizado");
    }, []);
    return (
        <form
            onSubmit={handleSubmit}
            className={`form-component ${className}`}
            {...props}
        >
            {children}
        </form>
    );
};

export default Form;
