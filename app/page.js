"use client";

import { useState, useEffect } from "react";
import Projects from "@/components/Projects";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 900);

  return (
    <div
      className={`bg-[#1e1e1e] h-screen w-screen relative p-6 overflow-hidden`}
    >
      {isLoading ? <SplashScreen /> : <Projects />}
    </div>
  );
}
