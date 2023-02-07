import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoCloud/>
      <Features/>
    </div>
  );
}

export default HomePage;
