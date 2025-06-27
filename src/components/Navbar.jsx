import Search from "@/assets/svgs/Search";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute z-50 w-full">
      <header className="z-20 top-0 md:mx-[60px] md:my-[50px] my-7 flex justify-between gap-10">
        <Link href={""} className="text-[32px] text-white font-bold hidden md:block">
          RESTAURANT
        </Link>

        <div className="relative lg:w-[821px] bg-white md:rounded-[20px] rounded-[7px] mx-[18px] md:mx-0 w-full transition-all">
          <Search className="absolute top-1/2 -translate-y-1/2 ml-7 max-md:w-[16px]" />
          <input
            type="text"
            className="w-full md:h-[61px] h-[35px] pr-7 md:ps-24 ps-14 md:placeholder:text-2xl md:placeholder:font-semibold placeholder:text-[#2D2D2D]"
            placeholder="Search...."
          />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
