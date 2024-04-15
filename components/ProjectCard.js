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

  useEffect(() => {
    if (active) {
      setTimeout(
        () => setTextStyling("bg-white/5 transition duration-300"),
        400
      );
      setZ("z-[100]");
    } else {
      setTextStyling("");
      setTimeout(() => setZ("z-[1]"), 500);
    }
  }, [active]);

  const inactiveCard = `flex relative w-5/6 md:3/4 lg:w-1/2 justify-evenly h-44 rounded-2xl hover:cursor-pointer bg-[#181818] cursor-pointer flex-row gap-10 p-6 ${z} `;
  const activeCard =
    "flex absolute w-full h-full md:justify-center rounded-2xl bg-[#181818] p-6 flex-col md:flex-row gap-12 z-[100] hover:cursor-default overflow-hidden";

  const inactiveThumb =
    "flex h-32 left-0 aspect-video rounded-lg overflow-hidden";
  const activeThumb =
    "flex mr-auto max-h-[50%] h-1/2 w-1/2 rounded-2xl overflow-hidden object-contain";

  const inactiveBio = "flex flex-col h-32 w-1/2 ml-6 bg-none gap-4 text-left";
  const activeBio = `flex flex-col w-1/2 h-96 h-[50%] max-h-[50%] ${textStyling} gap-8 rounded-2xl p-6 text-left`;

  return (
    <motion.button
      layout
      initial={{ y: 0 }}
      whileHover={!active && { y: -5 }}
      // transition={{ type: "tween", duration: 0.1 }}
      className={!active ? inactiveCard : activeCard}
      onClick={() => setActive(!active)}
    >
      <motion.div layout className={!active ? inactiveThumb : activeThumb}>
        {!active ? (
          <img
            className="justify-center items-center self-center flex rounded-lg"
            src={image}
            alt={title}
          />
        ) : (
          <video
            autoPlay
            loop
            className="justify-center items-center self-center flex"
          >
            <source src={video} type="video/mp4" />
          </video>
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
          <Link
            className="flex justify-center items-center text-white/70 hover:text-white transition rounded-full self-end bg-white/10 border border-white/50 h-8 w-32 mt-auto"
            href={url}
            target="_blank"
          >
            Visit website
          </Link>
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
