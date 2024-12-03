import "./Dropdown.css";

type TUserName = {
  fullname: string;
};

function Dropdown({ fullname }: TUserName) {
  function getInitials(name: string): string {
    let array = name.split(" ");
    return array.reduce((result, item) => {
      return result + item[0];
    }, "");
  }
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-wrap">
          <div className="dropdown-top">
            <div className="dropdown__item">
              <div className="dropdown__item_user">
                <div className="dropdown__item_user-initials">
                  {getInitials(fullname)}
                </div>
                <div className="dropdown__item_user-fullname">{fullname}</div>
              </div>
            </div>

            <div className="dropdown__item_search">
              <input
                placeholder="Search..."
                className="dropdown__item_search-input"
                type="text"
              />
              <div className="dropdown__item_search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="dropdown-bottom">
            <div className="dropdown__item_theme-switcher">
              <span className="dropdown__item_theme-switcher-name">
                Dark theme
              </span>
              <div className="dropdown__item_theme-switcher-icon">
                <i className="fa-solid fa-toggle-off"></i>
              </div>
            </div>
            <div className="dropdown__item_log-out">
              <a href="#">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
