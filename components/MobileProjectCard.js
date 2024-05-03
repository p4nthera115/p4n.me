"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  const inactiveCard = `flex relative justify-evenly h-[32%] rounded-2xl hover:cursor-pointer bg-[#181818] cursor-pointer flex-row gap-10 p-4 ${z} `;
  const activeCard =
    "flex absolute w-full h-full md:justify-center rounded-2xl bg-[#181818] p-4 flex-col md:flex-row gap-12 z-[100] hover:cursor-default overflow-hidden";

  const inactiveThumb = "overflow-hidden h-full rounded-lg flex justify-center";
  const activeThumb =
    "flex mr-auto h-36 rounded-xl overflow-hidden object-contain items-center justify-center";

  return (
    <motion.button
      layout
      initial={{ y: 0 }}
      whileHover={!active && { y: -5 }}
      className={!active ? inactiveCard : activeCard}
      onClick={() => setActive(!active)}
    >
      <motion.div
        layout="size"
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
    </motion.button>
  );
}
