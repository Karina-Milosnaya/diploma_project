import "./Tabs.css";
import Tab from "../Tab/Tab";

function Tabs() {
  return (
    <>
      <div className="tabs">
        <ul className="tabs-list">
          <Tab isDisabled={false} tabContent="Articles"></Tab>
          <Tab isDisabled={true} tabContent="News"></Tab>
        </ul>
      </div>
    </>
  );
}

export default Tabs;
