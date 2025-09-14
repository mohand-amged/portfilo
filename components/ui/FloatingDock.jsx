"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const Dock = ({ items, ClassName = "" }) => {
  return (
    <>
      <FloatingDock items={items} className={ClassName} />
    </>
  );
};

const FloatingDock = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when dock is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className={cn("fixed bottom-4 right-4 z-50 mx-6 mb-12 ", className)}>
      {/* Background overlay with blur */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Dock items */}
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute right-0 bottom-full mb-2 flex flex-col gap-2 "
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <div className="text-neutral-200">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-500 bg-neutral-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition-colors"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-200" />
      </button>
    </div>
  );
};
