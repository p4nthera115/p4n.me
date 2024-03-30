"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ id, title, url, image, description }) {
  const [active, setActive] = useState(false);

  const inactiveStyle =
    "flex w-1/2 justify-center h-44 rounded-2xl hover:cursor-pointer bg-[#181818] cursor-pointer hover:-translate-y-1 hover:shadow-md shadow-black ";
  const activeStyle =
    "flex absolute w-full h-full justify-center rounded-2xl bg-[#181818]";

  return (
    <motion.div
      layout
      className={!active ? inactiveStyle : activeStyle}
      onClick={() => setActive(!active)}
    ></motion.div>
  );
}
