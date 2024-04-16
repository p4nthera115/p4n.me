"use client";

import Projects from "@/components/Projects";
import { usePageVisibility } from "react-page-visibility";
import { useEffect } from "react";

export default function Home() {
  return (
    <div
      className={`bg-[#1e1e1e] h-screen w-screen relative p-6 overflow-hidden`}
    >
      <Projects />
    </div>
  );
}
