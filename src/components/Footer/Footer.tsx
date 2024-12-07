import { useContext, useState } from "react";
import "./Footer.css";
import { contextCreation } from "../../providers/ThemeContext";

function Footer() {
  const [theme, setTheme] = useState(false);
  const [color, setColor] = useContext(contextCreation);

  function handleTheme() {
    setTheme(!theme);
    {
      color === "light" ? setColor("dark") : setColor("light");
    }
  }

  return (
    <>
      <footer className={`footer footer-${color}`}>
        <div className="container">
          <div className="footer-wrap">
            <div className={`footer__copyright footer__copyright-${color}`}>
              <span>© 2024 Blogolog</span>
            </div>
            {theme ? (
              <div className="footer__theme-switcher">
                <span
                  className={`footer__theme-switcher_name  footer__theme-switcher_name-${color}`}
                >
                  Dark theme
                </span>
                <div
                  onClick={handleTheme}
                  className="footer__theme-switcher-icon"
                >
                  <i
                    className={`fa-solid fa-toggle-off switcher-icon switcher-icon-${color}`}
                  ></i>
                </div>
              </div>
            ) : (
              <div className="footer__theme-switcher">
                <span
                  className={`footer__theme-switcher_name  footer__theme-switcher_name-${color}`}
                >
                  Light theme
                </span>
                <div
                  onClick={handleTheme}
                  className="footer__theme-switcher-icon"
                >
                  <i
                    className={`fa-solid fa-toggle-off switcher-icon switcher-icon-${color}`}
                  ></i>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
