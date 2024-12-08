import { useEffect, useState, useContext } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostsList from "../../components/PostsList/PostsList";
import Title from "../../components/Title/Title";
import "./AllPostsPage.css";
import Spinner from "../../components/Spinner/Spinner";
import { contextCreation } from "../../providers/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slice/blog";

function AllPostsPage() {
  // const [posts, setPosts] = useState([]);
  const [color, setColor] = useContext(contextCreation);

  const data = useSelector((state: any) => state.blog);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    // fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=12")
    //   .then((response) => response.json())
    //   .then((json) => setPosts(json.results));
    dispatch(getPosts());
  }, []);

  function handleClick1() {
    alert("hi");
  }

  return (
    <>
      <section className={`all-posts-main all-posts-main-${color}`}>
        <div className="container">
          <Title titleContent="Blog"></Title>
          <div className="buttons">
            <div className="buttons__wrap">
              <Button
                typeButton="primary"
                buttonText="Day"
                isDisabled={false}
                functionClick={handleClick1}
              ></Button>
              <Button
                typeButton="secondary"
                buttonText="Week"
                isDisabled={false}
                functionClick={handleClick1}
              ></Button>
              <Button
                typeButton="secondary"
                buttonText="Month"
                isDisabled={false}
                functionClick={handleClick1}
              ></Button>
              <Button
                typeButton="secondary"
                buttonText="Year"
                isDisabled={false}
                functionClick={handleClick1}
              ></Button>
            </div>
          </div>
          {data.posts.length == 0 ? (
            <Spinner></Spinner>
          ) : (
            <PostsList posts={data.posts}></PostsList>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default AllPostsPage;
