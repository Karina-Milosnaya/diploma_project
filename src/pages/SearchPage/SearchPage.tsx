import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header";
import PostsList from "../../components/PostsList/PostsList";
import Title from "../../components/Title/Title";
import "./SearchPage.css";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import { contextCreation } from "../../providers/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, searchPost } from "../../slice/blog";
import SearchList from "../../components/SearchList/SearchList";

function SearchPage() {
  const [posts, setPosts] = useState([]);
  const [color, setColor] = useContext(contextCreation);
  const data = useSelector((state: any) => state.blog);
  const dispatch = useDispatch<any>();
  // console.log(data);

  // const data = useSelector((data: any) => data.blog);
  // console.log(data);

  useEffect(() => {
    // fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=12")
    //   .then((response) => response.json())
    //   .then((json) => setPosts(json.results));

    dispatch(searchPost("a"));
  }, []);
  return (
    <>
      <section className={`search-page search-page-${color}`}>
        <div className="container">
          <Title titleContent={`Search results ‘${""}’`}></Title>
          {data.search.length !== 0 ? (
            <div>Нет данных для отображения</div>
          ) : (
            <SearchList posts={data.search}></SearchList>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SearchPage;
