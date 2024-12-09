import "./Tab.css";
import { TTab } from "../types/types";

function Tab({ tabContent, isDisabled }: TTab) {
  return (
    <>
      <li className="tabs-list__item">
        <a aria-disabled={isDisabled} href="#" className={`tabs__link`}>
          {tabContent}
        </a>
      </li>
    </>
  );
}

export default Tab;
