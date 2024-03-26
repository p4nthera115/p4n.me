"use client";
import { useState } from "react";
import Projects from "@/components/Projects";

export default function Home() {
  const [isCardActive, setIsCardActive] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleActiveCard = (cardId) => {
    setIsCardActive(true);
    setActiveCardId(cardId);
  };

  return (
    <div
      className={`bg-[#1e1e1e] h-screen w-screen relative p-6 ${
        !isCardActive ? "overflow-auto" : "overflow-hidden"
      }`}
    >
      <Projects handleActiveCard={handleActiveCard} />
    </div>
  );
}
