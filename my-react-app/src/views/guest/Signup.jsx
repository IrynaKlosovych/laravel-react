import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import styles from "././../../css/layouts/guest/Signup-Login.module.css"

import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/StateContext";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext()
    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        setErrors(null)
        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
                navigate("/");
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <main>
            <div className={styles["signup-div"]}>
                <form onSubmit={onSubmit} noValidate="novalidate">
                    <h1>Signup for free</h1>
                    {errors && <div className={styles["errors"]}>
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>}
                    <div className={styles["input-container"]}>
                        <input ref={emailRef} type="email" placeholder="" id="email" name="email" autoComplete="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles["input-container"]}>
                        <input ref={passwordRef} type="password" placeholder="" id="password" name="password" autoComplete="new-password" />
                        <label htmlFor="password">Password</label></div>
                    <div className={styles["input-container"]}>
                        <input ref={passwordConfirmationRef} type="password" placeholder="" id="password-confirmation"
                            name="password-confirmation" autoComplete="new-password" />
                        <label htmlFor="password-confirmation">Password Confirmation</label>
                    </div>
                    <div>
                        <button>Signup</button>
                    </div>
                </form>
                <div className={styles["message"]}>
                    <div>Already Registered? <Link to="/login">Sign in</Link></div>
                    <div><Link to="/">Go to home page </Link></div>
                </div>
            </div>
        </main>
    )
}