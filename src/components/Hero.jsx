"use client";

import Image from "next/image";
import React, { useState } from "react";
import image from "@/assets/images/hero-1.png";
import breakfast from "@/assets/images/hero-2.png";
import lunch from "@/assets/images/hero-3.png";
import dinner from "@/assets/images/hero-4.png";

const Hero = () => {
  const [rotate, setRotate] = useState(0);
  console.log("🚀 ~ Hero.jsx:12 ~ Hero ~ rotate:", rotate);

  const images = [
    {
      id: 2032,
      img: image,
      style: "absolute -start-2/5 -top-[35%] translate-1/2 z-10",
      rotate: 0,
    },
    {
      id: 123,
      img: breakfast,
      style: "absolute -start-[35%] bottom-[18%] translate-1/2 z-10",
      rotate: 90,
    },
    {
      id: 124,
      img: lunch,
      style: "absolute end-44 bottom-[20%] translate-1/2 z-10",
      rotate: 180,
    },
    {
      id: 125,
      img: dinner,
      style: "absolute end-52 -top-[40%] translate-1/2 z-10",
      rotate: 270,
    },
  ];

  // end-44 bottom-[20%]

  return (
    <div
      className={`h-screen w-[100%] rounded-b-[20px] overflow-hidden relative ${
        rotate === 0 && "bg-[#880808]"
      } ${rotate === 90 && "bg-[#154669]"} ${
        rotate === 180 && "bg-[#953653]"
      } ${rotate === 270 && "bg-[#296666]"} transition-all`}
    >
      <div className="px-[88px] relative border h-full w-full z-10 flex items-center">
        <div className="max-w-[900px] text-white">
          <h1 className="text-8xl font-normal">BREAKFAST</h1>
          <p className="text-xl font-bold ml-1 mt-3">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet.{" "}
          </p>
          <div className="flex items-center gap-5 mt-10">
            {images.map((img) => (
              <div
                key={img.id}
                className="cursor-pointer"
                onClick={() => setRotate(img.rotate)}
              >
                <Image
                  src={img.img}
                  width={180}
                  height={180}
                  className={`rotate-[180deg]`}
                  alt="Breakfast food"
                />
                {img.rotate === rotate ? (
                  <hr className="bg-white py-[1.3px] rounded-full mt-4 w-[60%] mx-auto" />
                ) : (
                  <hr className="bg-transparent border-transparent py-[1.3px] rounded-full mt-4 w-[60%] mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="-z-0 absolute top-0 h-screen w-full border">
        <span
          className={`w-[55vw] min-w-[437px] h-[55vw] min-h-[437px] rounded-full absolute top-[-10vw] start-[-13vw] rotate-[-14.55deg] transition-all duration-700 ${
            rotate === 0 && "bg-[#A52A2A]"
          } ${rotate === 90 && "bg-[#0c3659]"} ${
            rotate === 180 && "bg-[#a95c68]"
          } ${rotate === 270 && "bg-[#113333]"}`}
        />
        <div
          className={`w-[60vw] min-w-[437px] h-[60vw] min-h-[437px] absolute bottom-[-30vw] end-[-30vw] rotate-[${rotate}deg] transition-all duration-700`}
        >
          {images.map((img) => (
            <Image
              key={`00${img.id}`}
              src={img.img}
              width={630}
              height={630}
              className={img.style}
              alt="Breakfast food"
            />
          ))}

          <div
            className={`w-full h-full rounded-full rotate-[-52.22deg]  ${
              rotate === 0 && "bg-[#A52A2A]"
            } ${rotate === 90 && "bg-[#0c3659]"} ${
              rotate === 180 && "bg-[#a95c68]"
            } ${rotate === 270 && "bg-[#113333]"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
