import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

export default function Timeline({ active, timeline }) {
  return (
    <>
      {active && (
        <motion.ol className="absolute flex flex-row h-1/2 max-h-[50%] w-[97%] rounded-2xl bottom-0 p-8 px-10 items-center overflow-x-auto my-1">
          {timeline.map((tweet, i) => {
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.2 + i * 0.1,
                  type: "tween",
                }}
              >
                <TimelineCard tweet={tweet} />
              </motion.li>
            );
          })}
        </motion.ol>
      )}
    </>
  );
}
