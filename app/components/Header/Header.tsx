"use client";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FunctionComponent } from "react";
import data from "../../data.json";
import Category from "./components/Category";
import Search from "./components/Search";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-start justify-start py-4 container"
        aria-label="Global"
      >
        <a href="#" className="flex mr-10 text-red-600 font-bold">
          MEGA.news
        </a>
        <Popover.Group className="flex flex- gap-x-8">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Categories
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Popover.Panel className="absolute -left-full w-calc-screen top-full z-10 mt-3 overflow-hidden rounded-3xl bg-white shadow ring-1 ring-gray-900/5">
              <div className="p-1 flex">
                {data.header.categories.map((category) => (
                  <Category key={category.title} item={category} />
                ))}
              </div>
            </Popover.Panel>
          </Popover>
          {data.header.links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {link.title}
            </a>
          ))}
        </Popover.Group>
        <div className="flex flex-1 justify-end">
          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;
