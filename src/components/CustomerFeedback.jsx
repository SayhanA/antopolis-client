"use client";

import { useState } from "react";
import Image from "next/image";
import cookimage from '@/assets/images/cook.png'

const testimonials = [
  {
    id: 1,
    text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    customerName: "Tayyab Sohail",
    customerRole: "UX/UI Designer",
    customerImage: cookimage,
  },
  {
    id: 2,
    text: "Absolutely amazing experience! The flavors were perfectly balanced and the presentation was beautiful. The chef really knows how to create magic with ingredients.",
    customerName: "Sarah Johnson",
    customerRole: "Food Blogger",
    customerImage: cookimage,
  },
  {
    id: 3,
    text: "Outstanding quality and taste! Every bite was a delight. The attention to detail in preparation and the fresh ingredients make this place special.",
    customerName: "Mike Chen",
    customerRole: "Restaurant Owner",
    customerImage: cookimage,
  },
];

export default function CustomerFeedback() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="px-6 bg-white relative overflow-hidden lg:mb-0  md:mb-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Desktop, Bottom Content - Mobile */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Customer <span className="text-red-600">Feedback</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentData.text}
              </p>
            </div>

            {/* Customer Info and Pagination */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={currentData.customerImage || "/placeholder.svg"}
                    alt={currentData.customerName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {currentData.customerName}
                  </h3>
                  <p className="text-gray-600">{currentData.customerRole}</p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial
                        ? "bg-[#ae3719]"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Desktop, Top Content - Mobile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[590px]">
              {/* Chef Image */}
              <div className="relative">
                <Image
                  src={cookimage}
                  alt="Professional chef making OK gesture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Red background accent */}
              <div className="absolute start-1/2 -translate-x-1/2 bottom-0 w-[80%] h-[100%] -z-10 overflow-hidden">
                <div className="bg-[#ae3719] w-[100%] h-[300%] absolute -top-[300px] rotate-[60deg]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Touch/Swipe area for mobile */}
        <div className="lg:hidden">
          <div
            className="absolute inset-0 flex"
            onTouchStart={(e) => {
              const touchStart = e.touches[0].clientX;
              e.currentTarget.touchStartX = touchStart;
            }}
            onTouchEnd={(e) => {
              const touchEnd = e.changedTouches[0].clientX;
              const touchStart = e.currentTarget.touchStartX;
              const diff = touchStart - touchEnd;

              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  nextTestimonial();
                } else {
                  prevTestimonial();
                }
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
