import { Outlet} from "react-router-dom";

import {Header, Footer} from "../views/index"
import styles from "./../css/layouts/Guest-Default.module.css"

export default function DefaultLayout(){
    return(
        <div className={styles["default"]}>
            <Header />
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}