import { SocialLinks } from "../../components"
import styles from "../../css/baseLayouts/Footer.module.css"

export default function Footer() {
    return (
        <footer>
            <div id={styles["footer-icons"]}>
                <SocialLinks />
            </div>
            <div>Site for creative</div>
            <div>Copyright Iryna Klosovych</div>
            <div>2025 Zhytomyr Polytechnic State University</div>
        </footer>
    )
}