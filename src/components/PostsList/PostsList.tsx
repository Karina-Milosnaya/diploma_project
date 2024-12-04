import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./PostsList.css";

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

function PostsList({ posts }: { posts: TPost[] }) {
  return (
    <>
      <div className="posts-list">
        <div className="container">
          <div className="posts-list__wrap">
            <Card
              cardImage={posts[0].image_url}
              cardDate={posts[0].published_at}
              cardTitle={posts[0].title}
            ></Card>
            <Card
              cardImage={posts[1].image_url}
              cardDate={posts[1].published_at}
              cardTitle={posts[1].title}
            ></Card>
            <Card
              cardImage={posts[2].image_url}
              cardDate={posts[2].published_at}
              cardTitle={posts[2].title}
            ></Card>
            <Card
              cardImage={posts[3].image_url}
              cardDate={posts[3].published_at}
              cardTitle={posts[3].title}
            ></Card>
            <Card
              cardImage={posts[4].image_url}
              cardDate={posts[4].published_at}
              cardTitle={posts[4].title}
            ></Card>
            <Card
              cardImage={posts[5].image_url}
              cardDate={posts[5].published_at}
              cardTitle={posts[5].title}
            ></Card>
            <Card
              cardImage={posts[6].image_url}
              cardDate={posts[6].published_at}
              cardTitle={posts[6].title}
            ></Card>
            <Card
              cardImage={posts[7].image_url}
              cardDate={posts[7].published_at}
              cardTitle={posts[7].title}
            ></Card>
            <Card
              cardImage={posts[8].image_url}
              cardDate={posts[8].published_at}
              cardTitle={posts[8].title}
            ></Card>
            <Card
              cardImage={posts[9].image_url}
              cardDate={posts[9].published_at}
              cardTitle={posts[9].title}
            ></Card>
            <Card
              cardImage={posts[10].image_url}
              cardDate={posts[10].published_at}
              cardTitle={posts[10].title}
            ></Card>
            <Card
              cardImage={posts[11].image_url}
              cardDate={posts[11].published_at}
              cardTitle={posts[11].title}
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsList;
