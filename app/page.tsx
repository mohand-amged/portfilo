  import About from "@/components/About";
  import Contact from "@/components/Contact";
  import Footer from "@/components/Footer";
  import Hero from "@/components/Hero";
  import Tape from "@/components/Tape";
  import Navbar from "@/components/Navbar";
  import CustomScrollbar from "@/components/ui/CustomScrollbar";
  import React from "react";
  import MyWork from "@/components/MyWork";
  import Skills from "@/components/Skills";

  export default function Home() {
    return (
      <main className="min-h-screen overflow-hidden">
        <CustomScrollbar style={{ overflowX: "hidden" }}>
          <Hero />
          <About />
          <Tape />
          <Skills />
          <MyWork />
          <Contact />
          <Footer />
        </CustomScrollbar>
        <Navbar />
      </main>
    );
  }
