import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-3 font-semibold text-white flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl">WikiRocket!</h1>
      </Link>
      <Search />
    </nav>
  );
};

export default Navbar;
