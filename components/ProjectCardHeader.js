import Stack from "./Stack";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectCardHeader({ active, title, stack }) {
  const [hover, setHover] = useState("");
  const [overflow, setOverflow] = useState("");

  console.log(hover);

  useEffect(() => {
    if (active) {
      setTimeout(() => setOverflow("overflow-hidden"), 400);
    } else {
      setOverflow("");
      setHover(false);
    }
  }, [active]);

  return (
    <div className={`flex flex-row justify-between ${overflow} max-h-24`}>
      <motion.h2
        transition={{ type: "tween", duration: 0.2 }}
        animate={
          hover
            ? {
                translateY: -45,
                opacity: 1,
              }
            : { translateY: 0 }
        }
        layout="position"
        className={!active ? "text-2xl" : "text-4xl flex-col"}
      >
        <span className="flex">{title}</span>
        <motion.span
          transition={{ duration: 0.001 }}
          animate={hover ? { opacity: 1 } : { opacity: 0 }}
          className="flex absolute pt-1"
        >
          {hover}
        </motion.span>
      </motion.h2>

      {active && <Stack stack={stack} setHover={setHover} />}
    </div>
  );
}
