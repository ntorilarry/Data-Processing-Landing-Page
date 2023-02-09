import React from "react";
import Banner from "../components/Banner";
import Business from "../components/Business";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Framework from "../components/Framework";
import Hero from "../components/Hero";
import Info from "../components/Info";
import LogoCloud from "../components/LogoCloud";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Traffic from "../components/Traffic";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-[#131147] to-[#2A1955]">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Traffic />
      <Stats />
      <Framework />
      <Business />
      <Info />
      <Banner />
      <Footer />
    </div>
  );
}

export default HomePage;
