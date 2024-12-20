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
import SearchPage from "./pages/SearchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

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
      <BrowserRouter>
        <ThemeContext>
          <Provider store={store}>
            <Header fullname="Artem Malkin"></Header>
            <Routes>
              <Route path="/" element={<AllPostsPage></AllPostsPage>}></Route>
              <Route
                path="/:id"
                element={<SelectedPage></SelectedPage>}
              ></Route>
              <Route path="/search" element={<SearchPage></SearchPage>}></Route>
            </Routes>
          </Provider>
        </ThemeContext>
      </BrowserRouter>
    </>
  );
}

export default App;
