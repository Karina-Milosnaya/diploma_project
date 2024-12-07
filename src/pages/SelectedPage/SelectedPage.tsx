import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import "./SelectedPage.css";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";

function SelectedPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
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
