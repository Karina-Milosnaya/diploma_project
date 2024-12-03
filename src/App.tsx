import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Tab from "./components/Tab/Tab";
import Tabs from "./components/Tabs/Tabs";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  function handleClick1() {
    alert("hi");
  }
  function handleClick2() {
    alert("bye");
  }

  return (
    <>
      {/* <Header fullname="Artem Malkin"></Header> */}
      {/* <Title></Title> */}
      {/* <Tab tabContent="Articles"></Tab> */}
      {/* <Tabs></Tabs> */}
      {/* <Button
        typeButton="primary"
        buttonText="Primary"
        isDisabled={false}
        functionClick={handleClick1}
      ></Button>
      <Button
        typeButton="secondary"
        buttonText="Secondary"
        isDisabled={false}
        functionClick={handleClick2}
      ></Button> */}
      <Dropdown fullname="Artem Malkin"></Dropdown>
    </>
  );
}

export default App;
