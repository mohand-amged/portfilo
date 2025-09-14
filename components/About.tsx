"use client";
import { AboutTestimonial } from "./ui/AboutTestimonials";
import SectionTitle from "./ui/SectionTitle";

interface ITestimonial {
  description: string;
  name: string;
  designation: string;
}

export default function About() {
  const testimonial: ITestimonial = {
    description:
      "Hi, I'm Mohand Amged. A web developer and software engineer from Alexandria, Egypt, with a passion for solving problems and building smart, scalable solutions.I enjoy turning ideas into clean, efficient code. Whether it's crafting user-friendly websites or developing high-performance software. With experience in competitive programming and hands-on roles in coding and training programs, I've built a strong foundation in tackling complex challenges and delivering real-world results. Every project is a new opportunity to learn, improve, and push my limits. I'm always ready to take it on.",
    name: "Mohand Amged",
    designation: "Software Engineer/ Web Developer",
  };

  return (
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <SectionTitle
            title="About Me"
            subtitle="Your story is the greatest legacy you'll leave behind—make it worth telling."
          />
        </div>

        <div>
          <AboutTestimonial testimonial={testimonial} />
        </div>
      </section>
  );
}
