import Search from "@/assets/svgs/Search";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute z-50 w-full">
      <header className="z-20 top-0 md:mx-[60px] my-[50px] flex justify-between">
        <Link href={""} className="text-[32px] text-white font-bold">
          RESTAURANT
        </Link>

        <div className="relative lg:w-[821px] bg-white rounded-[20px]">
          <Search className="absolute top-1/2 -translate-y-1/2 ml-7" />
          <input
            type="text"
            className="w-full h-[61px] pr-7 ps-24 placeholder:text-2xl placeholder:font-semibold placeholder:text-[#2D2D2D]"
            placeholder="Search...."
          />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
