"use client";

import { useState } from "react";

export default function ProjectCard({ title, url, image, description }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);

    console.log(active, title);
  };
  return (
    <div
      className="w-full h-[11rem] p-6 flex relative flex-row gap-10 rounded-2xl bg-[#181818] cursor-pointer hover:-translate-y-1 hover:shadow-md shadow-black transition"
      onClick={handleClick}
    >
      <div className="flex h-full w-full aspect-video bg-white rounded-lg"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          possimus consequuntur, distinctio, doloribus autem in veritatis ad.
        </p>
      </div>
    </div>
  );
}
