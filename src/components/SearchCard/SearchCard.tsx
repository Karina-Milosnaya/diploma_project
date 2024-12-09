import "./SearchCard.css";
import { useContext } from "react";
import { contextCreation } from "../../providers/ThemeContext";
import { Link } from "react-router-dom";

type TPost = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [
    {
      launch_id: string;
      provider: string;
    }
  ];
  events: [];
};

type TPostt = {
  post: TPost;
};

function SearchCard({ post }: TPostt) {
  const [color, setColor] = useContext(contextCreation);
  return (
    <>
      <div className="card-search-wrap">
        <Link to={`/${post.id}`}>
          <div className={`card card-${color}`}>
            <div className="card__wrap">
              <div className="card__img">
                <img src={post.image_url} alt="image" />
              </div>
              <div className="card__description">
                <span className={`card__date card__date-${color}`}>
                  {post.published_at}
                </span>
                <h2 className={`card__title card__title-${color}`}>
                  {post.title}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SearchCard;
