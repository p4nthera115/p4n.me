import { motion } from "framer-motion";

export default function TimelineCard({ tweet }) {
  return (
    <div
      className={`flex flex-row items-center gap-4 ${
        tweet.divider && "w-[420px]"
      }`}
    >
      <motion.a
        whileHover={{ scale: 1.02 }}
        className="flex min-h-44 min-w-[313px] aspect-video rounded-xl overflow-hidden bg-neutral-700"
        href={tweet.link}
      >
        {/* <img
          className="justify-center items-center self-center flex"
          src={tweet.thumb}
          alt={"tweet"}
        /> */}
      </motion.a>
      {tweet.divider && (
        <img className="mr-4" src="/divider.svg" alt="divider" width={100} />
      )}
    </div>
  );
}
