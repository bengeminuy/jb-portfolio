"use client";

import { motion } from "framer-motion";
import "../styles/slide.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-start"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
