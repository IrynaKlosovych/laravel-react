import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import style from "./../css/helps/CookiePopup.module.css";

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = Cookies.get("cookieConsent");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    Cookies.set("cookieConsent", "necessary-only", {
      path: "/",
      expires: 9999,
      secure: true,
      sameSite: "Strict",
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={style["overlay"]}>
      <div className={style["popup"]}>
        <h3>Цей сайт використовує лише необхідні cookies</h3>
        <p>
          Ми використовуємо <span className={style["bold"]}>тільки необхідні cookies</span>, без яких сайт не може функціонувати належним чином.
          Детальніше ви можете прочитати у
          <a
            href="https://github.com/IrynaKlosovych/laravel-react/blob/main/PrivacyPolicy.md"
            target="_blank"
            rel="noopener noreferrer">
            Політиці конфіденційності.
          </a>
        </p>
        <button onClick={handleClose}>
          Закрити
        </button>
      </div>
    </div>
  );
}
