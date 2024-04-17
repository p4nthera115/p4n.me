"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiSupabase,
  SiCloudflare,
  SiPrisma,
} from "react-icons/si";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Chroma Corps",
      description: "",
      url: "https://www.chroma-corps.com",
      image: "/images/chromacorps.png",
      video: "/videos/chromacorps.mp4",
      stack: [
        {
          icon: (
            <SiTypescript className="hover:scale-105 transition hover:text-blue-500" />
          ),
          name: "Typescript",
        },
        {
          icon: <SiNextdotjs className="hover:scale-105 transition" />,
          name: "Next.js",
        },
        {
          icon: (
            <SiTailwindcss className="hover:scale-105 transition hover:text-sky-400" />
          ),
          name: "TailwindCSS",
        },
        {
          icon: <SiThreedotjs className="hover:scale-105 transition" />,
          name: "Three.js",
        },
        {
          icon: (
            <SiCloudflare className="hover:scale-105 transition hover:text-orange-400" />
          ),
          name: "Cloudflare",
        },
      ],
      timeline: [
        {
          thumb: "/images/cc-coming-soon.gif",
          link: "https://x.com/p4nthera_/status/1662181247504855040",
          date: "05/23",
          divider: true,
        },
        {
          thumb: "/images/cc-loading.gif",
          link: "https://x.com/p4nthera_/status/1667183827192520705",
          date: "06/23",
          divider: true,
        },
        {
          thumb: "/images/cc-cadet-select.gif",
          link: "https://x.com/p4nthera_/status/1667649236400320512",
          date: "06/23",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: false,
        },
      ],
    },
    {
      id: 2,
      title: "Booknook",
      description: "",
      url: "WIP",
      image: "",
      video: "",
      stack: [
        {
          icon: (
            <SiTypescript className="hover:scale-105 transition hover:text-blue-500" />
          ),
          name: "Typescript",
        },
        {
          icon: <SiNextdotjs className="hover:scale-105 transition" />,
          name: "Next.js",
        },
        {
          icon: (
            <SiTailwindcss className="hover:scale-105 transition hover:text-sky-400" />
          ),
          name: "TailwindCSS",
        },
        {
          icon: (
            <SiSupabase className="hover:scale-105 transition hover:text-green-400" />
          ),
          name: "Supabase",
        },
        {
          icon: (
            <SiPrisma className="hover:scale-105 transition hover:text-sky-900" />
          ),
          name: "Prisma",
        },
      ],
      timeline: [
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: false,
        },
      ],
    },
    {
      id: 3,
      title: "p4n.me",
      description: "",
      url: "WIP",
      image: "",
      video: "",
      stack: [
        {
          icon: <SiNextdotjs className="hover:scale-105 transition" />,
          name: "Next.js",
        },
        {
          icon: (
            <SiTailwindcss className="hover:scale-105 transition hover:text-sky-400" />
          ),
          name: "TailwindCSS",
        },
        {
          icon: <SiThreedotjs className="hover:scale-105 transition" />,
          name: "Three.js",
        },
      ],
      timeline: [
        {
          thumb: "/images/p4n-under-construction.gif",
          link: "https://x.com/p4nthera_/status/1771603324095082709",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "",
          link: "",
          date: "03/24",
          divider: false,
        },
      ],
    },
  ]);

  return (
    <motion.div
      layout
      layoutRoot
      className="h-full w-full relative flex flex-col gap-6 justify-center items-center"
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          id={project.id}
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.image}
          video={project.video}
          stack={project.stack}
          timeline={project.timeline}
        />
      ))}
    </motion.div>
  );
}
