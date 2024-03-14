import { FunctionComponent } from "react";
import { SquareImg } from "..";

interface ArticleProps {
  data: IArticle | undefined;
}

const Article: FunctionComponent<ArticleProps> = ({ data }) => {
  return (
    data && (
      <section className="pt-8 px-8">
        <h1>{data!.topic}</h1>
        <SquareImg
          className="w-full h-96 my-4 rounded-md"
          src={data!.img}
          alt={data!.topic}
          width={700}
          height={384}
        />
        <p className="text-justify">{data!.body}</p>
      </section>
    )
  );
};

export default Article;
