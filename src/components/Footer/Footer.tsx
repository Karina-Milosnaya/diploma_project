import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [theme, setTheme] = useState(false);

  function handleTheme() {
    return setTheme(!theme);
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer__copyright">
              <span>© 2024 Blogolog</span>
            </div>
            {theme ? (
              <div className="footer__theme-switcher">
                <span className="footer__theme-switcher_name">Dark theme</span>
                <div
                  onClick={handleTheme}
                  className="footer__theme-switcher-icon"
                >
                  <i className="fa-solid fa-toggle-off switcher-icon"></i>
                </div>
              </div>
            ) : (
              <div className="footer__theme-switcher">
                <span className="footer__theme-switcher_name">Light theme</span>
                <div
                  onClick={handleTheme}
                  className="footer__theme-switcher-icon"
                >
                  <i className="fa-solid fa-toggle-on switcher-icon"></i>
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
