import { Outlet } from "react-router-dom";

import { Footer } from "../views";
import styles from "./../css/layouts/Guest-Default.module.css"

export default function GuestLayout() {
    return (
        <div className={styles["guest"]}>
            <Outlet />
            <Footer />
        </div>
    )
}