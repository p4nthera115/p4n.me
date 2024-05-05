"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCardHeader from "./ProjectCardHeader";
import Timeline from "./Timeline";
import Link from "next/link";

export default function ProjectCard({
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

  const inactiveCard = `flex relative w-5/6 md:3/4 lg:w-1/2 justify-evenly h-44 rounded-2xl hover:cursor-pointer bg-[#181818] cursor-pointer flex-row gap-10 p-6 ${z} `;
  const activeCard =
    "flex absolute w-full h-full md:justify-center rounded-2xl bg-[#181818] p-6 flex-col md:flex-row gap-12 z-[100] hover:cursor-default overflow-hidden";

  const inactiveThumb =
    "flex h-32 mr-auto aspect-video rounded-lg overflow-hidden justify-center";
  const activeThumb =
    "flex mr-auto max-h-[50%] h-1/2 w-1/2 rounded-2xl overflow-hidden object-contain items-center justify-center";

  const inactiveBio = "flex flex-col h-32 w-[60%] ml-6 bg-none gap-4 text-left";
  const activeBio = `flex flex-col w-1/2 h-96 h-[50%] max-h-[50%] ${textStyling} gap-8 rounded-2xl p-6 text-left`;

  return (
    <motion.button
      layout
      initial={{ y: 0 }}
      whileHover={!active && { y: -5 }}
      className={!active ? inactiveCard : activeCard}
      onClick={() => setActive(!active)}
    >
      <motion.div layout className={!active ? inactiveThumb : activeThumb}>
        {active && showVideo && video ? (
          <video autoPlay loop className="relative">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            className="justify-center items-center self-center flex rounded-lg z-50"
            src={image}
            alt={title}
          />
        )}
      </motion.div>
      <motion.section
        layout="position"
        className={!active ? inactiveBio : activeBio}
      >
        <ProjectCardHeader active={active} title={title} stack={stack} />
        <p
          layout="position"
          className={!active ? "text-xs md:text-sm flex" : "text-xl"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          possimus consequuntur, distinctio, doloribus autem in veritatis ad.
        </p>
        {active && url !== "WIP" ? (
          <div className="flex self-end mt-auto m-1">
            <Link
              className="flex absolute justify-center items-center text-white/70 hover:text-white transition rounded-full self-end bg-neutral-900 border border-yellow-300/30 h-8 w-32 z-20"
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
      </motion.section>
      <Timeline active={active} timeline={timeline} />
    </motion.button>
  );
}
