import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Tab from "./components/Tab/Tab";
import Tabs from "./components/Tabs/Tabs";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import SelectedPost from "./components/SelectedPost/SelectedPost";
import Footer from "./components/Footer/Footer";
import SelectedPage from "./pages/SelectedPage/SelectedPage";
import Spinner from "./components/Spinner/Spinner";
import Card from "./components/Card/Card";
import PostsList from "./components/PostsList/PostsList";
import AllPostsPage from "./pages/AllPostsPage/AllPostsPage";
import ThemeContext from "./providers/ThemeContext";

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
      {/* <Title titleContent="Blog"></Title> */}
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
      {/* <Dropdown fullname="Artem Malkin"></Dropdown> */}
      {/* <SelectedPost></SelectedPost> */}
      {/* <Footer></Footer> */}

      {/* <Spinner></Spinner> */}
      {/* <Card></Card> */}
      {/* <PostsList></PostsList> */}
      <ThemeContext>
        <AllPostsPage></AllPostsPage>
        <SelectedPage></SelectedPage>
      </ThemeContext>
    </>
  );
}

export default App;
