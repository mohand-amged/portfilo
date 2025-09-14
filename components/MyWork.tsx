"use client";
import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { WorkTestimonials } from "./ui/WorkTestimonials";
import { Projectstestimonials } from "@/data";

const MyWork = () => {
  return (
    <section id="myWork" className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <SectionTitle
          title="My Work"
          subtitle="Create with your hands, solve with your mind, leave a mark with your heart."
        />
      </div>

      <div>
        <Tabs defaultValue="Projects" className="w-full">
          <div className="flex items-center justify-center">
            <TabsList className="grid grid-cols-2 max-w-lg w-full items-center justify-center">
              <TabsTrigger value="Projects">Projects</TabsTrigger>
              <TabsTrigger value="Documentations">Documentations</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex items-center justify-center">
            <div className="my-2 max-w-7xl">
              <TabsContent value="Projects">
                {/*  projects */}
                <WorkTestimonials testimonials={Projectstestimonials} />
              </TabsContent>
              {/*
              <TabsContent value="Documentations">
                 Documentations 
                <WorkTestimonials testimonials={Documentationstimonials} />
              </TabsContent>
              */}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default MyWork;
