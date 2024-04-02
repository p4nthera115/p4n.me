"use client";
import { useState } from "react";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div
      className={`bg-[#1e1e1e] h-screen w-screen relative p-6 overflow-hidden`}
    >
      <Projects />
    </div>
  );
}
