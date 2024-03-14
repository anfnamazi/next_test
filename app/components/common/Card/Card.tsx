import Link from "next/link";
import { FunctionComponent } from "react";
import { SquareImg } from "..";

interface CardProps {
  item: IPost;
}

const Card: FunctionComponent<CardProps> = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="bg-white block rounded-lg shadow-lg overflow-hidden m-2"
    >
      <SquareImg
        width={400}
        height={200}
        src={item.img}
        alt={item.title}
        className="w-72 h-40"
      />
      <div className="p-6">
        <strong className="font-bold mb-2 text-2xl">{item.title}</strong>
        <p className="mb-2">{item.description}</p>
      </div>
    </Link>
  );
};

export default Card;
