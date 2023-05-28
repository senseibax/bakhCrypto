import React, {useState} from "react";
import {Link} from "react-router-dom";
import InputForm from "../Input/InputForm";
import Footer from "../Footer/Footer";

function Registration() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        birthDay: "",
    })

    const inputs = [{
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username"
    },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "email"
        },
        {
            id: 3,
            name: "birthDay",
            type: "date",
            placeholder: "Birth Day"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "password"
        },
    ]

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange= (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    return(
        <div className="login-continer">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h1><Link to={"/"}>Bakh<span className={"yellow-span"}>Crypto</span></Link></h1>
                    {inputs.map((input) => (
                        <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    <button><Link to={"/"}>Login</Link></button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Registration