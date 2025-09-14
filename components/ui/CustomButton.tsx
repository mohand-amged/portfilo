import React from "react";

interface PrimaryLipUpButtonProps {
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  version?: "primary" | "secondary";
  size?: "sm" | "md" | "lg"; 
}

const CustomButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
  version = "primary",
  size = "md", 
}: PrimaryLipUpButtonProps) => {
  
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return version === "primary" ? (
    <div className=" max-w-xs sm:max-w-none">
      <button
        className={`p-[3px] relative group cursor-pointer inline-block`}
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-btn-secondary)] to-purple-500 rounded-lg transition-all duration-300 group-hover:opacity-80" />
        <div
          className={`${otherClasses} ${sizeClasses[size]} font-secondary bg-[var(--color-bg-main)] rounded-[6px] relative transition-all duration-200 text-[var(--color-text-main)] group-hover:text-white group-hover:bg-transparent flex items-center justify-center gap-2 w-full`}
        >
          {position === "left" && icon}
          <span className="whitespace-nowrap">{title}</span>
          {position === "right" && icon}
        </div>
      </button>
    </div>
  ) : (
    <button
      className={`${otherClasses} ${sizeClasses[size]} flex items-center justify-center gap-2 cursor-pointer text-white rounded-lg font-bold transform transition duration-400 border border-white/20 hover:bg-white/10 w-full sm:w-auto`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      <span className="whitespace-nowrap">{title}</span>
      {position === "right" && icon}
    </button>
  );
};

export default CustomButton;
