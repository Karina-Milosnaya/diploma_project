import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import "./SelectedPage.css";
import Spinner from "../../components/Spinner/Spinner";

function SelectedPage() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=1")
      .then((response) => response.json())
      .then((json) => setPost(json.results[0]));
  }, []);

  return (
    <>
      <Header fullname="Artem Malkin"></Header>
      {post === null ? (
        <Spinner></Spinner>
      ) : (
        <SelectedPost post={post}></SelectedPost>
      )}
      <Footer></Footer>
    </>
  );
}

export default SelectedPage;
