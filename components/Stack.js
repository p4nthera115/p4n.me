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

export default function Stack({ stack }) {
  const [hover, setHover] = useState(false);

  const stackArr = [
    <SiNextdotjs className="hover:scale-105 transition" />,
    <SiTailwindcss className="hover:scale-105 transition hover:text-sky-400" />,
    <SiThreedotjs className="hover:scale-105 transition" />,
    <SiSupabase className="hover:scale-105 transition hover:text-green-400" />,
    <SiCloudflare className="hover:scale-105 transition hover:text-orange-400" />,
    <SiPrisma className="hover:scale-105 transition hover:text-sky-900" />,
  ];

  return (
    <motion.ol className="flex flex-row gap-3 text-4xl p-2">
      {stackArr.map((item) => item)}
    </motion.ol>
  );
}
