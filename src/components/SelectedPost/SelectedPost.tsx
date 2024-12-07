import Title from "../Title/Title";
import "./SelectedPost.css";
import Group1459 from "../../assets/Group1459.png";
import { useEffect, useState, useContext } from "react";
import { contextCreation } from "../../providers/ThemeContext";

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

function SelectedPost({ post }: { post: TPost }) {
  const [color, setColor] = useContext(contextCreation);
  return (
    <>
      <section className={`selected-post selected-post-${color}`}>
        <div className="container">
          <div className="selected-post__wrap">
            <div className={`selected-post__nav selected-post__nav-${color}`}>
              Home | <a href="#">{`Post ${post.id}`}</a>
            </div>
            <Title titleContent={post.title}></Title>
            <div className="selected-post__img">
              <img src={post.image_url} alt="image" />
            </div>
            <div
              className={`selected-post__description selected-post__description-${color}`}
            >
              <p>{post.summary}</p>
            </div>
            <div className="selected-post__reactions">
              <div
                className={`selected-post__reactions_item selected-post__reactions_item-${color}`}
              >
                <i
                  className={`fa-brands fa-facebook-f reactions-icon reactions-icon-${color}`}
                ></i>
              </div>
              <div
                className={`selected-post__reactions_item selected-post__reactions_item-${color}`}
              >
                <i
                  className={`fa-brands fa-twitter reactions-icon reactions-icon-${color}`}
                ></i>
              </div>
              <div
                className={`selected-post__reactions_item selected-post__reactions_item-${color}`}
              >
                <i
                  className={`fa-solid fa-ellipsis reactions-icon reactions-icon-${color}`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectedPost;
