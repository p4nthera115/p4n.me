import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Chroma Corps",
      description: "",
      url: "www.chroma-corps.com",
      image: "",
    },
    {
      title: "Booknook",
      description: "",
      url: "www.booknook.app",
      image: "",
    },
  ];

  return (
    <div className="flex flex-col relative gap-4 mx-auto w-full h-full overflow-auto">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.image}
        />
      ))}
    </div>
  );
}
