"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 700);

  return (
    <div
      className={`bg-[#1e1e1e] h-full w-full relative overflow-hidden items-center justify-center flex`}
    >
      <div className="w-full h-32 self-center flex items-start justify-center absolute overflow-hidden">
        <motion.h1
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={
            loading
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: -100,
                }
          }
          transition={{
            type: "tween",
            ease: "easeInOut",
          }}
          className="flex justify-center self-start text-8xl"
        >
          p4n.me
        </motion.h1>
      </div>
    </div>
  );
}
