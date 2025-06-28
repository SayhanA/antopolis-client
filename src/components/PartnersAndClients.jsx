import React from "react";
import SectionHeader from "./SectionHeader";
import restaurent from "@/assets/images/restaurent.png";
import bakery from '@/assets/images/backery.png';
import wolfCoffee from '@/assets/images/wolf-coffee.png';
import bistro from '@/assets/images/bistro.png';
import baker from '@/assets/images/bakery.png'
import fork from '@/assets/images/forkAndSpone.png';

import Image from "next/image";

const logos = [
  { id: "1211", logo: restaurent, alt: "Restaurant Logo 1" },
  { id: "1212", logo: bakery, alt: "bakery Logo 2" },
  { id: "1213", logo: fork, alt: "Restaurant Logo 3" },
  { id: "1214", logo: wolfCoffee, alt: "Restaurant Logo 4" },
  { id: "1215", logo: bistro, alt: "Restaurant Logo 5" },
  { id: "1216", logo: baker, alt: "Restaurant Logo 6" },
];

const PartnersAndClients = () => {
  return (
    <section className="my-[121px] max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center">
        <p className="text-[#A52A2A] text-lg mb-2">Partners & Clients</p>
        <SectionHeader>We work with the best pepole</SectionHeader>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={`${logo.id}-${index}`}
              src={logo.logo}
              alt={logo.alt}
              width={164}
              height={100}
              className="shrink-0 w-[164px] h-[128px] sm:w-40 md:w-44 lg:w-48 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersAndClients;
