import React from "react";
import './inputForm.css'

const InputForm = (props) =>{
    const {id, onChange, ...inputProps} = props;

    return(
        <div className="input-form">
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}

export default InputForm