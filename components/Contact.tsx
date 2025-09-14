"use client";

import React, { useState } from "react";
import InputField from "./ui/InputField";
import SectionTitle from "./ui/SectionTitle";
import { LuSend } from "react-icons/lu";

interface FormData {
  email: string;
  title: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus(data.message || "Message sent successfully!");
      setFormData({ email: "", title: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 mx-auto px-4 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <SectionTitle
          title="Contact Me"
          subtitle="Let's connect! Send me a message and I'll get back to you soon."
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-2xl mx-auto mt-8 px-4"
      >
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <InputField
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full md:flex-1"
          />
          <InputField
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full md:flex-1"
          />
        </div>
        <InputField
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          inputType="textarea"
          className="w-full min-h-[200px]"
        />

        <div className="flex justify-center w-full mt-4">
          <button
            type="submit"
            disabled={status === "Sending..."}
            className="relative cursor-pointer group flex items-center justify-center gap-2 w-full max-w-[220px] px-6 py-3 font-medium rounded-lg overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-pink-500 group-hover:to-purple-500 transition duration-300" />
            <span className="relative z-10 text-white text-sm font-primary transition-transform duration-300 group-hover:translate-x-1 font-medium uppercase">
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </span>
            {status !== "Sending..." && (
              <LuSend className="size-4 relative z-10 text-white text-lg transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>

        {status && status !== "Sending..." && (
          <p
            className={`text-center text-sm mt-2 ${
              status.includes("Failed") ? "text-red-400" : "text-green-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
