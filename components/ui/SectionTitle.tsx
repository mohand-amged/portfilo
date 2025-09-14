import { ReactNode } from "react";

interface SectionTitleProps {
  title: string | ReactNode;
  subtitle: string;
  otherClasses?: string;
}

const SectionTitle = ({ title, subtitle, otherClasses }: SectionTitleProps) => {
  return (
    <div className="relative mb-16">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-64 h-32 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="text-4xl sm:text-4xl md:text-5xl font-pixel text-center mb-4 relative">
        <span className="text-primary">{title}</span>
      </div>

      <div className="relative">
        <p className="text-lg sm:text-xl uppercase text-center font-secondary text-secondary mb-4">
          {subtitle}
        </p>
        {/* Animated underline */}
        <div
          className={`mt-2 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2 mx-auto opacity-70 ${otherClasses}`}
        ></div>
      </div>
    </div>
  );
};

export default SectionTitle;
