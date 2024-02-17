import Cards from "@/components/homePage/Cards";
import ChallengesSection from "@/components/homePage/ChallengesSection";
import Clients from "@/components/homePage/Clients";
import Faqs from "@/components/homePage/Faqs";
import Footer from "@/components/homePage/Footer";
import Hero from "@/components/homePage/Hero";
import Navbar from "@/components/homePage/Navbar";
import Pricing from "@/components/homePage/Pricing";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Clients/>
      <Pricing/>
      <Faqs/>
      <ChallengesSection/>
      <Cards/>
      <Footer/>
    </div>
  );
}
