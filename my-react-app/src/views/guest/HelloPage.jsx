import { Link } from "react-router-dom"

import styles from "./../../css/layouts/guest/HelloPage.module.css"

export default function HelloPage() {
    return (
        <main>
            <div className={styles["flex-div"]}>
                <div>
                    <h1>Site for creative</h1>
                    <p>Let&apos;s discover our imagination</p>
                </div>
                <div>
                    <div id={styles["create-div-style"]}>Create</div>
                    <div id={styles["modify-div-style"]}>Modify</div>
                    <div id={styles["inspire-div-style"]}>
                        <span>Inspire</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles["flex-div"]}>
                <div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
                <div>
                    <div>
                        Create your own pages and share your art
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles["flex-div"]}>
                <div>
                    <div>
                        Stop hidden your artist inside your soul.
                    </div>
                    <div>
                        Show him/her now to whole world!
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}