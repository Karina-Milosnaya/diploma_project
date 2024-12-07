import "./Header.css";
import Logo from "../../assets/Logo.png";
import { useState, useContext } from "react";
import { contextCreation } from "../../providers/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

type TUserName = {
  fullname: string;
};

function Header({ fullname }: TUserName) {
  const [color, setColor] = useContext(contextCreation);
  const nav = useNavigate();

  function handleSearch() {
    nav("/search");
  }

  function getInitials(name: string): string {
    let array = name.split(" ");
    return array.reduce((result, item) => {
      return result + item[0];
    }, "");
  }

  return (
    <>
      <header className={`header header-${color}`}>
        <div className="header-wrap">
          <Link to={"/"} className="header__logo">
            <img src={Logo} alt="logo" />
          </Link>

          <div className="header__left_search">
            <input
              placeholder="Search..."
              type="text"
              className="header__left_search-input"
            ></input>
            <div className="header__left_search-icon">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className="header__right">
            <div onClick={handleSearch} className="header__right_item-left">
              <i
                className={`fa-solid fa-magnifying-glass fa-magnifying-glass-${color}`}
              ></i>
            </div>
            <div className="header__right_item-right">
              <div className="header__right_item-initials">
                {getInitials(fullname)}
              </div>
              <div
                className={`header__right_item-fullname header__right_item-fullname-${color}`}
              >
                {fullname}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
