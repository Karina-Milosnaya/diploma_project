import "./SearchList.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../SearchCard/SearchCard";
import { TPost } from "../types/types";

function SearchList({ posts }: { posts: TPost[] }) {
  // const data = useSelector((data: any) => data.blog);
  console.log(posts);

  return (
    <>
      <div className="search-list">
        {posts.map((item: any) => (
          <div className="search-list__wrap" key={item.id}>
            <SearchCard post={item}></SearchCard>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchList;
