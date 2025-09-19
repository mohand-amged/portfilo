import React from "react";
import { TbNorthStar } from "react-icons/tb";

const Tape = () => {
  return (
    <div className="sm:py-10 md:py-16">
      <a  href="/Mohand Amged CV.pdf" download>
        <div className="bg-gradient-to-r via-purple-500 from-pink-500 to-blue-500 overflow-hidden -rotate-3 -mx-1 py-2">
          <div className="relative flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {/* Primary scrolling content */}
            <div className="flex items-center py-2 text-xl animate-infinite-scroll whitespace-nowrap">
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="font-pixel text-white font-bold uppercase mx-4">
                    PRESS TO DOWNLOAD MY CV
                  </span>
                  <TbNorthStar className="text-white w-6 h-6 flex-shrink-0" />
                </React.Fragment>
              ))}
            </div>

            {/* Mirror content for seamless looping */}
            <div className="flex items-center py-8 animate-infinite-scroll-dup whitespace-nowrap absolute left-full">
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={`dup-${i}`}>
                  <span className="font-pixel text-white font-bold uppercase mx-4">
                    PRESS TO DOWNLOAD MY CV
                  </span>
                  <TbNorthStar className="text-white w-6 h-6 flex-shrink-0" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Tape;
