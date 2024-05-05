"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileProjectCard({
  id,
  title,
  url,
  image,
  video,
  description,
  stack,
  timeline,
}) {
  const [active, setActive] = useState(false);
  const [textStyling, setTextStyling] = useState("");
  const [z, setZ] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(
        () => setTextStyling("bg-white/5 transition duration-300"),
        400
      );
      setZ("z-[100]");
      setTimeout(() => setShowVideo(true), 1500);
    } else {
      setTextStyling("");
      setTimeout(() => setZ("z-[1]"), 500);
      setShowVideo(false);
    }
  }, [active]);

  const inactiveCard = `flex aspect-video relative h-[32%] rounded-2xl hover:cursor-pointer bg-[#181818] cursor-pointer flex-row gap-10 p-4 ${z} `;
  const activeCard =
    "flex absolute w-full h-full md:justify-center rounded-2xl bg-[#181818] p-4 flex-col md:flex-row gap-4 z-[100] hover:cursor-default overflow-hidden";

  const inactiveThumb = "overflow-hidden h-full rounded-lg flex justify-center";
  const activeThumb =
    "flex mb-auto h-[90%] w-full aspect-video rounded-xl overflow-hidden object-contain items-center justify-center";

  return (
    <motion.button
      layout
      initial={{ y: 0 }}
      whileHover={!active && { y: -5 }}
      className={!active ? inactiveCard : activeCard}
      onClick={() => setActive(!active)}
    >
      <motion.div
        layout="position"
        className={active ? activeThumb : inactiveThumb}
      >
        {active && showVideo && video ? (
          <video autoPlay loop className="relative">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            className="justify-center items-center self-center object-cover flex rounded-lg z-50"
            src={image}
            alt={title}
          />
        )}
      </motion.div>
      {active && (
        <div
          layout="position"
          className="rounded-xl h-[125%] bg-white/5 p-4 flex flex-col w-full gap-4"
        >
          <h2 className="text-2xl self-start">{title}</h2>
          <p className="text-lg self-start justify-start text-left">
            {description}
          </p>
        </div>
      )}
      {active && url.length > 3 ? (
        <div className="flex justify-end items-end self-center scale-75">
          <Link
            className="flex absolute justify-center items-center text-white/70 hover:text-white transition rounded-full self-end bg-neutral-900 border border-yellow-300/30 h-8 w-32 mt-auto z-20"
            href={url}
            target="_blank"
          >
            Visit website
          </Link>
          <div className="cc-button self-end"></div>
        </div>
      ) : (
        active && (
          <div className="flex justify-center items-center text-white/70 hover:text-white transition rounded-md self-end border border-white/50 hover:border-white px-2 py-1 mt-auto">
            WIP
          </div>
        )
      )}
    </motion.button>
  );
}
