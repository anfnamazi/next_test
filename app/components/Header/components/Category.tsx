"use client";
import Image from "next/image";
import { FunctionComponent } from "react";
import { ICategory } from "../types/HeaderTypes";

interface CategoryProps {
  item: ICategory;
}

const Category: FunctionComponent<CategoryProps> = ({ item }) => {
  return (
    <div
      key={item.name}
      className="relative flex items-center gap-x-6 rounded p-4 text-sm w-72"
    >
      <div className="flex justify-center items-center overflow-hidden h-32 w-32 flex-none rounded-lg bg-gray-50 group-hover:bg-white">
        <Image
          className="object-cover w-full aspect-square"
          src={item.img}
          width={500}
          height={500}
          alt={item.name}
        />
      </div>
      <div className="flex-auto">
        <a
          href={item.href}
          className="block font-semibold text-gray-900 pl-2 after:border-l-2 after:bg-r-600 after:h-4 before:w-2"
        >
          <h6>{item.name}</h6>
          <span className="absolute inset-0" />
        </a>
        <div className="flex flex-col">
          {item.links.map((link) => (
            <a className="mb-1" key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
