import Image from "next/image";
import keris from "../../public/KerisBawah.png";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import CompanyOverview from "./components/CompanyOverview";
import LandingServices from "./components/LandingServices";
import CustomerTestiomonies from "./components/CustomerTestiomonies";

export default function Home() {
  return (
    <main className="mt-[70px] md:mt-16">
      <HeroSection/>
      <CompanyOverview/>
      <LandingServices/>
      <CustomerTestiomonies/>
    </main>
  );
}
