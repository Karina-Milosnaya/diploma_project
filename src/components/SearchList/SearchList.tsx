import "./SearchList.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../SearchCard/SearchCard";

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

function SearchList({ posts }: { posts: TPost[] }) {
  // const data = useSelector((data: any) => data.blog);
  // console.log(data);

  return (
    <>
      <div className="search-list">
        {posts.map((item: any) => (
          <div className="search-list__wrap" key={item.id}>
            <SearchCard post={item}></SearchCard>
            {/* <Card
              cardImage={posts[2].image_url}
              cardDate={posts[2].published_at.substring(0, 10)}
              cardTitle={posts[2].title}
            ></Card>
            <Card
              cardImage={posts[3].image_url}
              cardDate={posts[3].published_at.substring(0, 10)}
              cardTitle={posts[3].title}
            ></Card>
            <Card
              cardImage={posts[4].image_url}
              cardDate={posts[4].published_at.substring(0, 10)}
              cardTitle={posts[4].title}
            ></Card> */}
          </div>
        ))}

        {/* <Link to={`/${posts[0].id}`}>
            <Card
              cardImage={posts[0].image_url}
              cardDate={posts[0].published_at.substring(0, 10)}
              cardTitle={posts[0].title}
            ></Card>
          </Link>

          <Link to={`/${posts[1].id}`}>
            <Card
              cardImage={posts[1].image_url}
              cardDate={posts[1].published_at.substring(0, 10)}
              cardTitle={posts[1].title}
            ></Card>
          </Link>

          <Link to={`/${posts[2].id}`}>
            <Card
              cardImage={posts[2].image_url}
              cardDate={posts[2].published_at.substring(0, 10)}
              cardTitle={posts[2].title}
            ></Card>
          </Link>
          <Link to={`/${posts[3].id}`}>
            <Card
              cardImage={posts[3].image_url}
              cardDate={posts[3].published_at.substring(0, 10)}
              cardTitle={posts[3].title}
            ></Card>
          </Link>
          <Link to={`/${posts[4].id}`}>
            <Card
              cardImage={posts[4].image_url}
              cardDate={posts[4].published_at.substring(0, 10)}
              cardTitle={posts[4].title}
            ></Card>
          </Link>
          <Link to={`/${posts[5].id}`}>
            <Card
              cardImage={posts[5].image_url}
              cardDate={posts[5].published_at.substring(0, 10)}
              cardTitle={posts[5].title}
            ></Card>
          </Link>
          <Link to={`/${posts[6].id}`}>
            <Card
              cardImage={posts[6].image_url}
              cardDate={posts[6].published_at.substring(0, 10)}
              cardTitle={posts[6].title}
            ></Card>
          </Link>
          <Link to={`/${posts[7].id}`}>
            <Card
              cardImage={posts[7].image_url}
              cardDate={posts[7].published_at.substring(0, 10)}
              cardTitle={posts[7].title}
            ></Card>
          </Link>
          <Link to={`/${posts[8].id}`}>
            <Card
              cardImage={posts[8].image_url}
              cardDate={posts[8].published_at.substring(0, 10)}
              cardTitle={posts[8].title}
            ></Card>
          </Link>
          <Link to={`/${posts[9].id}`}>
            <Card
              cardImage={posts[9].image_url}
              cardDate={posts[9].published_at.substring(0, 10)}
              cardTitle={posts[9].title}
            ></Card>
          </Link>
          <Link to={`/${posts[10].id}`}>
            <Card
              cardImage={posts[10].image_url}
              cardDate={posts[10].published_at.substring(0, 10)}
              cardTitle={posts[10].title}
            ></Card>
          </Link>
          <Link to={`/${posts[11].id}`}>
            <Card
              cardImage={posts[11].image_url}
              cardDate={posts[11].published_at.substring(0, 10)}
              cardTitle={posts[11].title}
            ></Card>
          </Link> */}
      </div>
    </>
  );
}

export default SearchList;
