"use client";
import Link from "next/link";
import { FunctionComponent } from "react";
import { SquareImg } from "../../common";
import { ITrend } from "../types/TrendsTypes";

interface CardProps {
  item: ITrend;
}

const Card: FunctionComponent<CardProps> = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="block flex items-center justify-start my-4"
    >
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
    </Link>
  );
};

export default Card;
