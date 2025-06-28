"use client";

import Image from "next/image";
import React, { useState } from "react";
import image from "@/assets/images/hero-1.png";
import breakfast from "@/assets/images/hero-2.png";
import lunch from "@/assets/images/hero-3.png";
import dinner from "@/assets/images/hero-4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const [rotate, setRotate] = useState(0);

  const handleLeft = () => {
    setRotate((prev) => (prev + 90) % 360);
  };

  const handleRight = () => {
    setRotate((prev) => (prev - 90 + 360) % 360);
  };

  const images = [
    {
      id: 2032,
      img: image,
      style: `absolute xl:-start-2/5 xl:-top-[35%] xl:translate-1/2 z-10 hidden xl:block xl:w-[650px] ${
        rotate === 0 && "md:block -top-[20%] -start-1/5 w-[400px] "
      }`,
      rotate: 0,
    },
    {
      id: 123,
      img: breakfast,
      style: `absolute xl:-start-[35%] xl:bottom-[18%] xl:translate-1/2 z-10 xl:block xl:w-[650px] ${
        rotate === 90
          ? "md:block -start-[20%] -bottom-[20%] w-[400px]"
          : "hidden"
      } `,
      rotate: 90,
    },
    {
      id: 124,
      img: lunch,
      style: `absolute xl:end-44 xl:bottom-[20%] xl:translate-1/2 z-10 hidden xl:block xl:w-[650px] ${
        rotate === 180 && "md:block -end-38 -bottom-32 w-[400px]"
      }`,
      rotate: 180,
    },
    {
      id: 125,
      img: dinner,
      style: `absolute xl:end-52 xl:-top-[40%] xl:translate-1/2 z-10 hidden xl:block xl:w-[650px] ${
        rotate === 270 && "md:block -end-32 -top-32 w-[400px]"
      }`,
      rotate: 270,
    },
  ];

  return (
    <div
      className={`h-screen w-[100%] rounded-b-[20px] overflow-hidden relative ${
        rotate === 0 && "bg-[#880808]"
      } ${rotate === 90 && "bg-[#154669]"} ${
        rotate === 180 && "bg-[#953653]"
      } ${rotate === 270 && "bg-[#296666]"} transition-all`}
    >
      <div className="md:px-[88px] px-10 relative border h-full w-full z-10 flex items-center">
        <div className="max-w-[900px] md:w-[60%] w-full text-white">
          <h1 className="md:text-8xl text-[45px] font-normal">BREAKFAST</h1>
          <p className="md:text-xl font-bold ml-1 mt-3">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet.{" "}
          </p>

          <div className="mt-8 mb-[70px] md:hidden w-full flex justify-between items-center">
            <div
              onClick={handleRight}
              className={`w-[41px] h-[41px] rounded-full flex justify-center items-center ${
                rotate === 0 && "bg-[#A52A2A]"
              } ${rotate === 90 && "bg-[#0c3659]"} ${
                rotate === 180 && "bg-[#a95c68]"
              } ${rotate === 270 && "bg-[#113333]"}`}
            >
              {" "}
              <FaChevronLeft />
            </div>

            {images.map((img) => (
              <Image
                key={`00${img.id}`}
                src={img.img}
                width={270}
                height={270}
                className={`${rotate === img.rotate ? "block" : "hidden"}`}
                alt="Breakfast food"
              />
            ))}

            <div
              onClick={handleLeft}
              className={`w-[41px] h-[41px] rounded-full flex justify-center items-center ${
                rotate === 0 && "bg-[#A52A2A]"
              } ${rotate === 90 && "bg-[#0c3659]"} ${
                rotate === 180 && "bg-[#a95c68]"
              } ${rotate === 270 && "bg-[#113333]"}`}
            >
              {" "}
              <FaChevronRight />
            </div>
          </div>

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

                <hr
                  className={`py-[1.3px] rounded-full mt-4 w-[60%] mx-auto transition-all duration-700 ${
                    img.rotate === rotate ? "bg-white" : "border-transparent"
                  }`}
                />
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
          <div className="md:block hidden">
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
          </div>

          <div
            className={`w-full h-full rounded-full rotate-[-52.22deg] ${
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
