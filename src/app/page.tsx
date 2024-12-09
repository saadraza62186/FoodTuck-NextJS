import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import ChefCard from "./components/ChefCard";
import CoffeeCard from "./components/CoffeeCard";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import Section6 from "./components/Section6";
export default function Home() {
  return (
    <>
      <Navbar />
      <Slide />
      <ChefCard />
      <Section3 />
      <Section4 />
      <Section5 /> 
      <Section6 /> 
      <Footer />
    </>
  );
}
