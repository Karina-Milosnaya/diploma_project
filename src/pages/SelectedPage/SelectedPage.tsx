import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import "./SelectedPage.css";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost } from "../../slice/blog";

function SelectedPage() {
  // const [post, setPost] = useState(null);
  const { id } = useParams();

  const data = useSelector((state: any) => state.blog);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    // fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`)
    //   .then((response) => response.json())
    //   .then((json) => setPost(json));
    dispatch(getOnePost(id));
  }, []);

  return (
    <>
      {data.post === null ? (
        <Spinner></Spinner>
      ) : (
        <SelectedPost post={data.post}></SelectedPost>
      )}
      <Footer></Footer>
    </>
  );
}

export default SelectedPage;
