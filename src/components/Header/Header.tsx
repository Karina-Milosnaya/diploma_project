import "./Header.css";
import Logo from "../../assets/Logo.png";
import { useState, useContext } from "react";
import { contextCreation } from "../../providers/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchPost } from "../../slice/blog";
import { TUserName } from "../types/types";

function Header({ fullname }: TUserName) {
  const [color, setColor] = useContext(contextCreation);
  const [inputText, setInputText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch<any>();
  // const data = useSelector((item: any) => item.blog.search);
  // console.log(data.results);

  function handleSearch() {
    setIsSearchOpen(!isSearchOpen);
    nav("/search");
  }

  function getInitials(name: string): string {
    let array = name.split(" ");
    return array.reduce((result, item) => {
      return result + item[0];
    }, "");
  }

  function aaaa(value: string) {
    dispatch(searchPost(value));
  }

  return (
    <>
      <header className={`header header-${color}`}>
        <div className="header-wrap">
          <Link to={"/"} className="header__logo">
            <img src={Logo} alt="logo" />
          </Link>

          {isSearchOpen ? (
            <div className="header__left_search">
              <input
                value={inputText}
                onChange={(event) => {
                  setInputText(event.target.value);
                  aaaa(event.target.value);
                }}
                placeholder="Search..."
                type="text"
                className="header__left_search-input"
              ></input>
              {/* <div className="header__left_search-icon">
              <i className="fa-solid fa-xmark"></i>
            </div> */}
            </div>
          ) : null}

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
