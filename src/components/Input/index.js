import "./index.css";

function Input({ label, ...props }) {
    return (
        <div className="input-component">
            <label htmlFor={props.name}>{label}</label>
            <input {...props} />
        </div>
    );
}

export default Input;
