import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Technology from "@/components/sections/Technology";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Technology />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}