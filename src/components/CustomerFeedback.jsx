"use client";

import { useState } from "react";
import Image from "next/image";
import cookimage from "@/assets/images/cook.png";
import useInView from "@/hooks/useInView";

const testimonials = [
  {
    id: 1,
    text: "Fresh, flavorful, and just the right amount of heat...",
    customerName: "Tayyab Sohail",
    customerRole: "UX/UI Designer",
    customerImage: cookimage,
  },
  {
    id: 2,
    text: "Absolutely amazing experience! The flavors were perfectly balanced...",
    customerName: "Sarah Johnson",
    customerRole: "Food Blogger",
    customerImage: cookimage,
  },
  {
    id: 3,
    text: "Outstanding quality and taste! Every bite was a delight...",
    customerName: "Mike Chen",
    customerRole: "Restaurant Owner",
    customerImage: cookimage,
  },
];

export default function CustomerFeedback() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const currentData = testimonials[currentTestimonial];

  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  const goToTestimonial = (index) => setCurrentTestimonial(index);

  return (
    <section className="px-6 bg-white relative overflow-hidden mb-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div
            ref={leftRef}
            className={`order-2 lg:order-1 space-y-8 transform transition-all duration-700 ease-out ${
              leftInView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Customer <span className="text-red-600">Feedback</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentData.text}
              </p>
            </div>

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

          {/* Right Section */}
          <div
            ref={rightRef}
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transform transition-all duration-700 ease-out ${
              rightInView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-[590px]">
              <div className="relative">
                <Image
                  src={cookimage}
                  alt="Professional chef making OK gesture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute start-1/2 -translate-x-1/2 bottom-0 w-[80%] h-[100%] -z-10 overflow-hidden">
                <div className="bg-[#ae3719] w-full h-[300%] absolute -top-[300px] rotate-[60deg]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
