import "./Header.css";
import Logo from "../../assets/Logo.png";
import { useState } from "react";

type TUserName = {
  fullname: string;
};

function Header({ fullname }: TUserName) {
  function getInitials(name: string): string {
    let array = name.split(" ");
    return array.reduce((result, item) => {
      return result + item[0];
    }, "");
  }

  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <div className="header__logo">
            <img src={Logo} alt="logo" />
          </div>

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
            <div className="header__right_item-left">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header__right_item-right">
              <div className="header__right_item-initials">
                {getInitials(fullname)}
              </div>
              <div className="header__right_item-fullname">{fullname}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
