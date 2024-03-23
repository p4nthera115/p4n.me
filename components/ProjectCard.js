export default function ProjectCard({ title, url, image, description }) {
  return (
    <div className="w-full h-[11rem] p-6 flex relative flex-row gap-10 rounded-2xl bg-[#181818] shadow-md shadow-black">
      <div className="flex h-full w-full aspect-video bg-white rounded-lg"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Title</h2>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          possimus consequuntur, distinctio, doloribus autem in veritatis ad.
        </p>
      </div>
    </div>
  );
}
