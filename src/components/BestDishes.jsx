"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import PrimaryButton from "./PimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import AddFood from "./AddFood";
import AddCategory from "./AddCategory";
import Salad_Fry from "@/assets/images/food-01.png"; // fallback image
import { toast } from "react-toastify";

export default function BestSellerDishes() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://antopolis-backend-du9t.onrender.com/api/categories");
        const data = await res.json();
        setCategories(data || []); // adjust if your response is different
      } catch (err) {
        toast.error("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        let url = "https://antopolis-backend-du9t.onrender.com/api/foods";
        if (activeFilter !== "All") {
          url += `?category=${encodeURIComponent(activeFilter)}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        console.log("🚀 ~ BestDishes.jsx:68 ~ fetchFoods ~ data:", data)
        setFoods(data || []); // adjust if your API returns differently
      } catch (err) {
        toast.error("Failed to fetch foods");
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [activeFilter]);

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
        <div className="flex flex-wrap gap-2 justify-between mb-12">
          <div className="flex gap-2 flex-wrap">
            {["All", ...categories.map((cat) => cat.name)].map((filter) => (
              <PrimaryButton
                key={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </PrimaryButton>
            ))}
          </div>
          <div className="flex gap-2">
            <AddFood />
            <AddCategory />
          </div>
        </div>

        {/* Dish Grid */}
        {loading ? (
          <div className="text-center text-xl py-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((dish) => (
              <div
                key={dish._id}
                className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative md:h-[297px] h-[116px] overflow-hidden">
                  <Image
                    src={dish.image ? `https://antopolis-backend-du9t.onrender.com/uploads/${dish.image}` : Salad_Fry}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:p-6 p-2">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="md:text-[31px] text-[12.19px] font-medium">{dish.name}</h3>
                    <div className="hidden md:block">
                      <span
                        className={`px-6 py-2.5 text-xl rounded-full ${getCategoryColor(dish.category)}`}
                      >
                        {dish.category}
                      </span>
                    </div>
                    <SecondaryBtn className="bg-[#A52A2A] block md:hidden">Buy Now</SecondaryBtn>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-4xl">
                      {renderStars(dish.rating || 0)}
                    </div>
                    <div className="md:text-[34px] text-[13.37px] font-bold">
                      ${dish.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
