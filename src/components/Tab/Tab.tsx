import "./Tab.css";

type TTab = {
  tabContent: string;
  isDisabled: boolean;
};

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
