import Search from "@/assets/svgs/Search";
import BestSellerDishes from "@/components/BestDishes";
import BestDishes from "@/components/BestDishes";
import CustomerFeedback from "@/components/CustomerFeedback";
import Hero from "@/components/Hero";
import PartnersAndClients from "@/components/PartnersAndClients";
import TeamMember from "@/components/TeamMembers";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <>
     <Hero />
     <BestSellerDishes />
     <CustomerFeedback />
     <TeamMember />
     <PartnersAndClients />
    </>
  );
}
