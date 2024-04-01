"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ id, title, url, image, description }) {
  const [active, setActive] = useState(false);
  const [textStyling, setTextStyling] = useState("");

  useEffect(() => {
    if (active) {
      setTimeout(
        () => setTextStyling("bg-white/5 transition duration-300"),
        400
      );
    } else {
      setTextStyling("");
    }
  }, [active]);

  const inactiveCard =
    "flex relative w-5/6 md:3/4 lg:w-2/5 justify-center h-44 rounded-2xl hover:cursor-pointer bg-[#181818] cursor-pointer flex-row gap-10 p-6";
  const activeCard =
    "flex absolute w-full h-full md:justify-center rounded-2xl bg-[#181818] p-6 flex-col md:flex-row gap-12 z-[100]";

  const inactiveThumb = "flex h-32 left-0 aspect-video bg-white rounded-lg";
  const activeThumb =
    "flex mr-auto max-h-[50%] h-1/2 w-1/2 bg-white rounded-2xl";

  const inactiveText = "flex flex-col h-32 w-1/2 ml-6 bg-none gap-4";
  const activeText = `flex flex-col w-1/2 h-96 max-h-[50%] ${textStyling} gap-8 rounded-2xl p-6`;

  return (
    <motion.div
      layout
      className={!active ? inactiveCard : activeCard}
      onClick={() => setActive(!active)}
    >
      <motion.div
        layout
        className={!active ? inactiveThumb : activeThumb}
      ></motion.div>
      <motion.div
        layout="position"
        className={!active ? inactiveText : activeText}
      >
        <motion.h2
          layout="position"
          className={!active ? "text-2xl" : "text-5xl"}
        >
          Title
        </motion.h2>
        <p layout className={!active ? "text-xs md:text-sm" : "text-xl"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          possimus consequuntur, distinctio, doloribus autem in veritatis ad.
        </p>
      </motion.div>
      {/* {active && (
        <motion.div className="absolute flex flex-row h-1/2 w-full bg-neutral-800 rounded-2xl bottom-0"></motion.div>
      )} */}
    </motion.div>
  );
}
