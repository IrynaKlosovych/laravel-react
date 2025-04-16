import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import styles from "./../../css/layouts/guest/Signup-Login.module.css"

import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/StateContext";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext()
    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        setErrors(null)
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
                navigate("/")
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors)
                        setErrors(response.data.errors)
                    else {
                        setErrors({ email: [response.data.message] })
                    }
                }
            })
    }

    return (
        <main>
            <div className={styles["login-div"]}>
                <form onSubmit={onSubmit} noValidate="novalidate">
                    <h1>Login into your account</h1>
                    {errors && <div className={styles["errors"]}>
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>}
                    <div className={styles["input-container"]}>
                        <input ref={emailRef} type="email" placeholder="" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles["input-container"]}>
                        <input ref={passwordRef} type="password" placeholder="" id="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
                <div className={styles["message"]}>
                    <div>Not Registered? <Link to="/signup">Create an account</Link></div>
                    <div><Link to="/">Go to home page </Link></div>
                </div>
            </div>
        </main>
    )
}