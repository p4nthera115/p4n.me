import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

export default function Timeline({ active, timeline }) {
  return (
    <>
      {active && (
        <motion.div className="absolute flex flex-row h-1/2 max-h-[50%] w-[97%] rounded-2xl bottom-0 p-8 px-10 items-center overflow-x-auto my-1">
          {timeline.map((tweet, i) => {
            return <TimelineCard key={i} tweet={tweet} />;
          })}
        </motion.div>
      )}
    </>
  );
}
