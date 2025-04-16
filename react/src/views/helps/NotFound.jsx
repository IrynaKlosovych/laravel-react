import { Link } from "react-router-dom";

import { useStateContext } from "../../contexts/StateContext";
import { Header, Footer } from "../index"

import styles from "../../css/helps/NotFound.module.css"

export default function NotFound() {
    const { token } = useStateContext()

    return (
        <>
            <div className={`${styles["content"]}`}>
                {token && <Header />}
                <main>
                    <h1 className={`${styles["gradient-text"]} ${styles["primary-text"]} ${styles["text-center"]}`}>
                        404
                    </h1>
                    <h2 className={`${styles["secondary-text"]} ${styles["text-center"]}`}>
                        Сторінку не знайдено
                    </h2>
                    <div>
                        <div className={`${styles["secondary-text"]} ${styles["text-center"]}`}>
                            Будь ласка, поверніться на головну
                        </div>
                        <div className={`${styles["button"]}`}>
                            <Link to="/" >
                                Головна
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}