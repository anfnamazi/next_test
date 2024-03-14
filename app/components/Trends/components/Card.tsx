import { FunctionComponent } from "react";
import SquareImg from "../../common/SquareImg";
import { ITrend } from "../types/TrendsTypes";

interface CardProps {
  item: ITrend;
}

const Card: FunctionComponent<CardProps> = ({ item }) => {
  return (
    <a href={item.href} className="flex items-center justify-start">
      <SquareImg
        src={item.img}
        alt={item.title}
        width={100}
        height={100}
        className="h-16 w-16"
      />
      <div className="p-2">
        <span className="font-bold">{item.title}</span>
        <p className="">{item.description}</p>
      </div>
    </a>
  );
};

export default Card;
