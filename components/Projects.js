"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Chroma Corps",
      description: "",
      url: "www.chroma-corps.com",
      image: "",
      stack: ["TypeScript, NextJs, Tailwindcss, Threejs, Cloudflare"],
    },
    {
      id: 2,
      title: "Booknook",
      description: "",
      url: "www.booknook.app",
      image: "",
      stack: ["TypeScript, NextJS, Tailwindcss, Supabase"],
    },
    {
      id: 3,
      title: "Booknook",
      description: "",
      url: "www.booknook.app",
      image: "",
      stack: [],
    },
  ]);

  return (
    <motion.div
      layout
      layoutRoot
      className="h-full w-full relative flex flex-col gap-6 justify-center  items-center"
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          id={project.id}
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.image}
          stack={project.stack}
        />
      ))}
    </motion.div>
  );
}
