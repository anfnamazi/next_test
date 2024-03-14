"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { FaHome } from "react-icons/fa";

interface BreadCrumbsProps {}

const BreadCrumbs: FunctionComponent<BreadCrumbsProps> = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").join(" > ");
  return (
    <div className="flex items-baseline">
      <Link href="/">
        <FaHome />
      </Link>
      {pathNames}
    </div>
  );
};

export default BreadCrumbs;
