"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Testimonial = {
  description: string;
  name: string;
  designation: string;
};

export const AboutTestimonial = ({
  testimonial,
  otherClasses,
}: {
  testimonial: Testimonial;
  otherClasses?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div
      ref={ref}
      className={`mx-auto px-4 py-6 font-sans antialiased md:max-w-6xl md:px-8 lg:px-8 ${otherClasses}`}
    >
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-start">
          <div className="relative h-90 w-80 sm:h-96 sm:w-96 md:h-110 md:w-120">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.9,
                  rotate: randomRotateY(),
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -20, 0],
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate={controls}
              className="absolute inset-0 origin-bottom"
            >
              <Image
                src="/mohand.jpg"
                alt="profile-image"
                width={500}
                height={500}
                className="size-full object-cover rounded-4xl object-center"
                priority
                sizes="(max-width: 800px) 20rem, (max-width: 800x) 24rem, 30rem"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-4">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, ease: "easeInOut" },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            <h3 className="text-4xl font-bold dark:text-white ">
              {testimonial.name}
            </h3>
            <p className="text-md text-gray-500 dark:text-neutral-500">
              {testimonial.designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonial.description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { filter: "blur(10px)", opacity: 0, y: 5 },
                    visible: {
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={controls}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
