"use client";

import { useState } from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiSupabase,
  SiCloudflare,
  SiPrisma,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Stack({ active, stack, setHover }) {
  const stackArr = [
    {
      icon: <SiNextdotjs className="hover:scale-105 transition" />,
      name: "Next.js",
    },
    {
      icon: (
        <SiTailwindcss className="hover:scale-105 transition hover:text-sky-400" />
      ),
      name: "TailwindCSS",
    },
    {
      icon: <SiThreedotjs className="hover:scale-105 transition" />,
      name: "Three.js",
    },
    {
      icon: (
        <SiSupabase className="hover:scale-105 transition hover:text-green-400" />
      ),
      name: "Supabase",
    },
    {
      icon: (
        <SiCloudflare className="hover:scale-105 transition hover:text-orange-400" />
      ),
      name: "Cloudflare",
    },
    {
      icon: (
        <SiPrisma className="hover:scale-105 transition hover:text-sky-900" />
      ),
      name: "Prisma",
    },
  ];

  return (
    // <motion.ol
    //   onHoverStart={() => setHover(true)}
    //   onHoverEnd={() => setHover(false)}
    //   className="flex flex-row gap-3 text-4xl p-1 select-none "
    // >
    //   {stackArr.map((item) => item)}
    // </motion.ol>
    <motion.ol className="flex flex-row gap-3 text-4xl p-1 select-none">
      {stackArr.map((item) => (
        <motion.li
          key={item.name}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHover(item.name)}
          onMouseLeave={() => setHover("")}
        >
          {item.icon}
        </motion.li>
      ))}
    </motion.ol>
  );
}
