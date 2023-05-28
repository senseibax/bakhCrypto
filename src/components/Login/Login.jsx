import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import "./login.css"
import Footer from "../Footer/Footer";
import InputForm from "../Input/InputForm";

function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете выполнить необходимые действия, например, отправку данных на сервер для аутентификации
        console.log("Данные формы:", values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h1><Link to={"/"}>Bakh<span className="yellow-span">Crypto</span></Link></h1>
                    <InputForm
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        onChange={onChange}
                    />
                    <InputForm
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <button type="submit">Login</button>
                </form>
                <Link to={"/registration"}>Register</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Login