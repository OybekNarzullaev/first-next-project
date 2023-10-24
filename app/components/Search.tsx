"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form onSubmit={handlerSubmit} className="flex gap-1">
      <input
        type="text"
        className="text-black px-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit" className="bg-slate-800 px-2 py-1">
        Search
      </button>
    </form>
  );
};

export default Search;
