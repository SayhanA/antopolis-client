"use client";

import { useState } from "react";
import Image from "next/image";
import { dishes } from "@/data/dishesData";
import Salad_Fry from "@/assets/images/food-01.png";
import SectionHeader from "./SectionHeader";
import PrimaryButton from "./PimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

export default function BestSellerDishes() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDishes =
    activeFilter === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeFilter);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Breakfast":
        return "bg-red-500 text-white";
      case "Lunch":
        return "bg-orange-500 text-white";
      case "Dinner":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`md:text-3xl text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionHeader className="mb-3">Our best Seller Dishes</SectionHeader>
          <p className="text-[#5C5C5C] md:text-2xl max-w-3xl mx-auto">
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomatoes all tossed in your choice of
            dressing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex min-[375px]:flex-nowrap flex-wrap min-[768px]:flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex md:gap-2 gap-[5.5px]">
            {["All", "Breakfast", "Lunch", "Dinner"].map((filter) => (
              <PrimaryButton
                key={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </PrimaryButton>
            ))}
          </div>

          <div className="flex md:gap-2 gap-[5.5px] md:ml-4">
            <SecondaryBtn>Add Food</SecondaryBtn>
            <SecondaryBtn>Add Category</SecondaryBtn>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative md:h-[297px] h-[116px] overflow-hidden">
                <Image
                  src={Salad_Fry}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:p-6 p-2">
                <div className="relative flex justify-between items-center">
                  <h3 className="md:text-[31px] text-[12.19px] font-[500] mb-3">
                    {dish.name}
                  </h3>
                  <SecondaryBtn className="bg-[#A52A2A]">Buy Now</SecondaryBtn>
                  <div className="md:block hidden">
                    <span
                      className={`px-6 py-2.5 text-xl rounded-full font-medium ${getCategoryColor(
                        dish.category
                      )}`}
                    >
                      {dish.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-4xl">
                    {renderStars(dish.rating)}
                  </div>

                  {/* Price */}
                  <div className="md:text-[34px] text-[13.37px] font-bold">
                    ${dish.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
