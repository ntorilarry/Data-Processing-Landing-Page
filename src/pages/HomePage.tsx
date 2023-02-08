import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import Navbar from "../components/Navbar";
import Traffic from "../components/Traffic";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoCloud/>
      <Features/>
      <Traffic/>
    </div>
  );
}

export default HomePage;
