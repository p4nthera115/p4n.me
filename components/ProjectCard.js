"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  id,
  title,
  url,
  image,
  description,
  activeCardId,
  handleActiveCard,
  isAnyCardActive,
}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active && activeCardId === id) {
      setActive(false);
      handleActiveCard(null);
    } else {
      setActive(true);
      handleActiveCard(id);
    }
  };

  const isActive = activeCardId === id;

  const inactiveStyle =
    "w-[90%] sm:w-3/4 md:w-1/2 h-[11rem] p-6 flex flex-row gap-10 rounded-2xl bg-[#181818] cursor-pointer hover:-translate-y-1 hover:shadow-md shadow-black transition ";
  const activeStyle =
    "w-[90%] sm:w-3/4 md:w-1/2 h-[11rem] p-6 flex flex-row gap-10 rounded-2xl bg-[#181818] block";

  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 0.2,
        type: "tween",
      }}
      animate={
        active
          ? {
              position: "fixed",
              width: "100%",
              height: "94vh",
              zIndex: 100,
            }
          : {
              margin: "0 auto",
            }
      }
      className={active ? activeStyle : inactiveStyle}
      onClick={handleClick}
    >
      {/* <div className="flex h-full w-full aspect-video bg-white rounded-lg"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          possimus consequuntur, distinctio, doloribus autem in veritatis ad.
        </p>
      </div> */}
    </motion.div>
  );
}
