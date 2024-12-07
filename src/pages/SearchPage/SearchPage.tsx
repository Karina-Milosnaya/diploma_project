import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header";
import PostsList from "../../components/PostsList/PostsList";
import Title from "../../components/Title/Title";
import "./SearchPage.css";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import { contextCreation } from "../../providers/ThemeContext";

function SearchPage() {
  const [posts, setPosts] = useState([]);
  const [color, setColor] = useContext(contextCreation);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=12")
      .then((response) => response.json())
      .then((json) => setPosts(json.results));
  }, []);
  return (
    <>
      <section className={`search-page search-page-${color}`}>
        <div className="container">
          <Title titleContent="Search results ‘Astronauts’"></Title>
          {posts.length == 0 ? (
            <Spinner></Spinner>
          ) : (
            <PostsList posts={posts}></PostsList>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SearchPage;
