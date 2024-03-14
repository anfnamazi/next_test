import { FunctionComponent } from "react";
import { Card } from "./components";
import data from "./data.json";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <main>
      <h1>Popular Post</h1>
      <div className="flex flex-wrap">
        {data.posts.map((post) => (
          <Card item={post} key={post.title} />
        ))}
      </div>
    </main>
  );
};

export default Home;
