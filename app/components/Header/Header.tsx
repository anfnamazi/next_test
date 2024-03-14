"use client";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FunctionComponent } from "react";
import HeaderCategory from "./components/HeaderCategory";
import HeaderSearch from "./components/HeaderSearch";
import staticData from "./static.json";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-start justify-start p-6 px-8"
        aria-label="Global"
      >
        <a className="flex mr-10 text-red-600 font-bold">MEGA.news</a>
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
                {staticData.categories.map((item) => (
                  <HeaderCategory key={item.name} item={item} />
                ))}
              </div>
            </Popover.Panel>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Pages
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </a>
        </Popover.Group>
        <div className="flex flex-1 justify-end">
          <HeaderSearch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
