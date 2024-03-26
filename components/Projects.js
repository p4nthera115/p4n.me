"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Chroma Corps",
      description: "",
      url: "www.chroma-corps.com",
      image: "",
    },
    {
      id: 2,
      title: "Booknook",
      description: "",
      url: "www.booknook.app",
      image: "",
    },
    {
      id: 3,
      title: "Booknook",
      description: "",
      url: "www.booknook.app",
      image: "",
    },
  ]);

  return (
    <div className={`flex flex-col relative gap-4 mx-auto w-full`}>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          id={project.id}
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.image}
        />
      ))}
    </div>
  );
}
