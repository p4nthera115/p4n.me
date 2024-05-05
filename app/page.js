"use client";

import { useState, useEffect } from "react";
import Projects from "@/components/Projects";
import SplashScreen from "@/components/SplashScreen";
import MobileSocials from "@/components/MobileSocials";
import Socials from "@/components/Socials";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window) setWidth(window.innerWidth);
  }, []);

  setTimeout(() => setIsLoading(false), 900);

  return (
    <div
      className={`bg-[#1e1e1e] h-full w-full relative p-4 md:p-6 overflow-hidden flex flex-col gap-3`}
    >
      <Projects width={width} />

      {width > 768 ? (
        <div className="p-4 m-8 rounded-lg bg-[#181818] absolute right-0 top-1/2 -translate-y-1/2">
          <Socials />
        </div>
      ) : (
        <MobileSocials />
      )}
    </div>
  );
}
