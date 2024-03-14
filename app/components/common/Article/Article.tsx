import Image from "next/image";
import { FunctionComponent } from "react";

interface ArticleProps {
  data: IArticle | undefined;
}

const Article: FunctionComponent<ArticleProps> = ({ data }) => {
  return (
    data && (
      <section className="pt-8">
        <h1>{data!.topic}</h1>
        <Image
          className="w-full my-4 rounded-md"
          src={data!.img}
          alt={data!.topic}
          width={700}
          height={400}
        />
        <p className="text-justify">{data!.body}</p>
      </section>
    )
  );
};

export default Article;
