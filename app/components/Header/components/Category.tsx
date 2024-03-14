"use client";
import { FunctionComponent } from "react";
import { SquareImg } from "../../common";
import { ICategory } from "../types/HeaderTypes";

interface CategoryProps {
  item: ICategory;
}

const Category: FunctionComponent<CategoryProps> = ({ item }) => {
  return (
    <div
      key={item.title}
      className="relative flex items-center gap-x-6 rounded p-4 text-sm w-72"
    >
      <SquareImg
        src={item.img}
        className=" h-32 w-32"
        width={500}
        height={500}
        alt={item.title}
      />
      <div className="flex-auto">
        <a href={item.href} className="block font-semibold text-gray-900 pl-2">
          <h6>{item.title}</h6>
        </a>
        <div className="flex flex-col">
          {item.links.map((link) => (
            <a className="mb-1" key={link.title} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
