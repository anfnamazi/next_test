"use client";
import { FunctionComponent } from "react";
import { FaEllipsisV, FaSearch } from "react-icons/fa";

interface SearchProps {
  className?: string | undefined;
}

const Search: FunctionComponent<SearchProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex relative rounded-md shadow-sm">
        <button className="px-2">
          <FaEllipsisV />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          className="block border-none w-full rounded-md py-1.5 pl-2 pr-12 text-gray-900 ring-inset placeholder:text-gray-400"
          placeholder="Search anything"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
