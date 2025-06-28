"use client";

import Search from "@/assets/svgs/Search";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import image from "@/assets/images/food-04.png";
import { useDebounce } from "@/hooks/useDebounce";

// ... rest of your Navbar code


const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const containerRef = useRef(null);

  // Use debounce hook for searchTerm
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFoodItems([]);
      return;
    }

    fetch(`https://antopolis-backend-du9t.onrender.com/api/foods?search=${encodeURIComponent(debouncedSearchTerm)}`)
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch(() => setFoodItems([]));
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    if (isFocused) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused]);

  return (
    <nav className="absolute z-50 w-full font-">
      <header className="z-20 top-0 md:mx-[60px] md:my-[50px] my-7 flex justify-between gap-10">
        <Link
          href={""}
          className="text-[32px] text-white font-bold hidden md:block"
        >
          RESTAURANT
        </Link>

        <div
          ref={containerRef}
          className="relative lg:w-[821px] bg-white md:rounded-[20px] rounded-[7px] mx-[18px] md:mx-0 w-full transition-all"
        >
          <div className={`relative ${isFocused ? ' border-0 border-b-2 border-gray-300' : ''}`}>
            <Search className="absolute top-1/2 -translate-y-1/2 ml-7 max-md:w-[16px]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              className="w-full outline-0 md:h-[61px] h-[35px] pr-7 md:ps-24 ps-14 md:placeholder:text-2xl md:placeholder:font-semibold placeholder:text-[#2D2D2D]"
              placeholder="Search...."
            />
          </div>

          {isFocused && foodItems.length > 0 && (
            <ul className="p-8 flex flex-col gap-3 max-h-screen overflow-auto rounded-b-md shadow-md w-full z-50">
              {foodItems.map((food) => (
                <li
                  key={food._id || food.id}
                  className="flex gap-7 text-xl items-center cursor-pointer hover:bg-gray-100 px-4 py-2 rounded"
                >
                  <Image
                    src={
                      food.image
                        ? `https://antopolis-backend-du9t.onrender.com/uploads/${food.image}`
                        : image
                    }
                    height={30}
                    width={80}
                    alt={food.name}
                    className="max-w-[100px]"
                  />
                  <p>{food.name}</p>
                </li>
              ))}
            </ul>
          )}

          {isFocused && debouncedSearchTerm && foodItems.length === 0 && (
            <div className="p-8 text-center text-gray-500 absolute w-full bg-white border border-gray-300 rounded-b-md">
              No results found
            </div>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
