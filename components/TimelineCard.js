"use client";

import { motion } from "framer-motion";
import { IoOpenOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

export default function TimelineCard({ tweet }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative flex flex-row items-center gap-4  ${
        tweet.divider && "w-[420px]"
      }`}
    >
      <div className="flex flex-col gap-2">
        <motion.a
          className="flex min-h-44 min-w-[313px] aspect-video rounded-xl overflow-hidden bg-neutral-700 border border-white/30"
          href={tweet.link}
          target="_blank"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <IoOpenOutline
            className={`absolute top-0 ${
              tweet.divider ? "right-28" : "right-0"
            } m-2 mt-3 h-5 w-5 z-50 ${
              hover ? "text-white" : "text-white/50"
            } transition`}
          />
          <Image
            className="justify-center items-center self-center flex opacity-75 hover:opacity-100 transition"
            src={tweet.thumb}
            alt={"tweet"}
            height={176}
            width={313}
          />
        </motion.a>
        <div className="mt-2 flex text-white/70 z-10 overflow-hidden items-center justify-center ">
          <motion.span
            transition={{ type: "tween", duration: 0.2 }}
            animate={
              hover
                ? {
                    translateY: -30,
                    opacity: 1,
                  }
                : { translateY: 0 }
            }
            className="flex-col"
          >
            {tweet.date}
            <motion.span
              transition={{ duration: 0.1 }}
              animate={
                hover ? { opacity: 1 } : { opacity: 0, display: "hidden" }
              }
              className="flex absolute pt-1 w-32 -left-[50%] text-white"
            >
              view tweet
            </motion.span>
          </motion.span>
        </div>
      </div>
      {tweet.divider && (
        <img className="mr-4" src="/divider.svg" alt="divider" width={100} />
      )}
    </div>
  );
}
