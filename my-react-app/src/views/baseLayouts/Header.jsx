import styles from "./../../css/baseLayouts/Header.module.css"
import { Link, Navigate } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useStateContext } from "../../contexts/StateContext";


export default function Header() {
    const { token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return (
        <header>
            <div className={styles.logoBox}><Link to="/" className={styles.logo}></Link></div>

            <div className={styles.list}>Search inspire</div>

            <div className={styles.rightSection}>
                <div className={styles.list}>
                    <Link to="/settings" className={styles.link}>Settings</Link>
                </div>
                <div className={styles.list}>
                    <a href="#" onClick={onLogout} className={styles.link}>LogOut</a>
                </div>
            </div>
        </header>
    )
}