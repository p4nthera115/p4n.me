"use client";

import { useState, useEffect } from "react";
import { FaHammer } from "react-icons/fa";

export default function UnderConstruction() {
  const [rotateAnim, setRotateAnim] = useState("rotate-0");

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateAnim((prevRotateAnim) =>
        prevRotateAnim === "rotate-[10deg] mr-0"
          ? "rotate-[-70deg] mr-5"
          : "rotate-[10deg] mr-0"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full">
      <div className="flex w-full justify-center items-center flex-col p-4 gap-4">
        <FaHammer
          className={`flex justify-center items-center text-white h-6 w-6 ${rotateAnim}`}
        />
        <span className="text-sm mr-1">under construction</span>
      </div>
    </div>
  );
}
