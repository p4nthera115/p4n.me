import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

export default function Timeline({ active, timeline }) {
  return (
    <>
      {active && (
        <motion.div className="absolute flex flex-row h-1/2 max-h-[50%] w-full  rounded-2xl bottom-0">
          {timeline.map((tweet, i) => {
            console.log(tweet);
            return <TimelineCard key={i} tweet={tweet} />;
          })}
        </motion.div>
      )}
    </>
  );
}
