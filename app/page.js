"use client";
import { useState, useEffect } from "react";
import Projects from "@/components/Projects";

export default function Home() {
  const [isCardActive, setIsCardActive] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleActiveCard = (cardId) => {
    setIsCardActive(!isCardActive);
    setActiveCardId(cardId);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isCardActive) {
        window.scrollTo(0, 1000);
        window.scrollTo(0, window.scrollY); // Lock scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);

    console.log(activeCardId, isCardActive, window.scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCardId]);

  return (
    <div
      className={`bg-[#1e1e1e] h-screen w-screen relative p-6 ${
        !isCardActive ? "overflow-auto" : "overflow-auto"
      }`}
    >
      <Projects handleActiveCard={handleActiveCard} />
    </div>
  );
}
