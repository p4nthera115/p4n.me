"use client";

import { useState, useEffect } from "react";
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
import MobileProjectCard from "./MobileProjectCard";

export default function Projects({ width }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Chroma Corps",
      description: `A website for the annual "Chroma Corps" art competition, ran by SinixDesign on Youtube.`,
      url: "https://www.chroma-corps.com",
      image: "/images/cc/chromacorps.png",
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
          thumb: "/images/cc/cc-coming-soon.gif",
          link: "https://x.com/p4nthera_/status/1662181247504855040",
          date: "05/23",
          divider: true,
        },
        {
          thumb: "/images/cc/cc-loading.gif",
          link: "https://x.com/p4nthera_/status/1667183827192520705",
          date: "06/23",
          divider: true,
        },
        {
          thumb: "/images/cc/cc-cadet-select.gif",
          link: "https://x.com/p4nthera_/status/1667649236400320512",
          date: "06/23",
          divider: true,
        },
        {
          thumb: "/images/cc/cc-cadet-page.gif",
          link: "https://x.com/p4nthera_/status/1671534061985120258",
          date: "06/24",
          divider: true,
        },
        {
          thumb: "/images/cc/cc-assignments.gif",
          link: "https://x.com/p4nthera_/status/1674825898141401108",
          date: "06/24",
          divider: true,
        },
        {
          thumb: "/images/cc/cc-finished.gif",
          link: "https://x.com/p4nthera_/status/1703131936628109815",
          date: "09/24",
          divider: false,
        },
      ],
    },
    {
      id: 2,
      title: "Booknook",
      description:
        'A passion project similar to "Goodreads", Booknook is more social and has a focus on reading with others.',
      url: "WIP",
      image: "/images/bn/bn-thumb.png",
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
          thumb: "/images/bn/bn-thumb.png",
          link: "https://x.com/p4nthera_/status/1729168821804847184",
          date: "11/23",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-sidebar.png",
          link: "https://x.com/p4nthera_/status/1730260038055235613",
          date: "11/23",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-notifications-wip-1.gif",
          link: "https://x.com/p4nthera_/status/1731366098606448893",
          date: "12/23",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-notifications-wip-2.gif",
          link: "https://x.com/p4nthera_/status/1731821865310560533",
          date: "12/23",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-profile-page-wip.gif",
          link: "https://x.com/p4nthera_/status/1742131263547322868",
          date: "01/24",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-friends-wip.gif",
          link: "https://x.com/p4nthera_/status/1742541393036255517",
          date: "01/24",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-search-br.gif",
          link: "https://x.com/p4nthera_/status/1746202694862139616",
          date: "01/24",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-settings.gif",
          link: "https://x.com/p4nthera_/status/1751267242526777519",
          date: "01/24",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-shelves-wip.gif",
          link: "https://x.com/p4nthera_/status/1759687771415830840",
          date: "02/24",
          divider: true,
        },
        {
          thumb: "/images/bn/bn-shelves.gif",
          link: "https://x.com/p4nthera_/status/1764639269535002626",
          date: "03/24",
          divider: false,
        },
      ],
    },
    {
      id: 3,
      title: "p4n.me [v1.0]",
      description:
        "Version 1 of my website, a much more creative experience is in the works.",
      url: "",
      image: "/images/p4n/p4n-thumb.png",
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
          thumb: "/images/p4n/p4n-under-construction.gif",
          link: "https://x.com/p4nthera_/status/1771603324095082709",
          date: "03/24",
          divider: true,
        },
        {
          thumb: "/images/p4n/p4n-wip-1.gif",
          link: "https://x.com/p4nthera_/status/1774774850202063014",
          date: "04/24",
          divider: true,
        },
        {
          thumb: "/images/p4n/p4n-wip-2.gif",
          link: "https://x.com/p4nthera_/status/1775107436615020881",
          date: "04/24",
          divider: true,
        },
        {
          thumb: "/images/p4n/p4n-wip-3.gif",
          link: "https://x.com/p4nthera_/status/1775573759442714942",
          date: "04/24",
          divider: true,
        },
        {
          thumb: "/images/p4n/p4n-finished-card.gif",
          link: "https://x.com/p4nthera_/status/1780658857158533231",
          date: "04/24",
          divider: false,
        },
      ],
    },
  ]);

  console.log(width);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
        type: "tween",
        ease: "easeInOut",
        staggerChildren: 0.2,
        staggerDirection: 1,
      }}
      layout
      layoutRoot
      className="h-[90%] text-white md:h-full w-full relative flex flex-col gap-2 md:gap-6 justify-center items-center"
    >
      {projects.map((project, i) =>
        width > 768 ? (
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
        ) : (
          <MobileProjectCard
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
        )
      )}
    </motion.div>
  );
}
