"use client";
import { Article } from "@/app/components";
import { FunctionComponent } from "react";
import data from "../../data.json";

interface SingleProps {
  params: { id: string };
}

const Single: FunctionComponent<SingleProps> = ({ params }) => {
  const article = data.articles.find(
    (article) => article.topic.toLowerCase() === params.id
  );

  return (
    <main>
      <Article data={article} />
    </main>
  );
};

export default Single;
