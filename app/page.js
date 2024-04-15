"use client";

import { usePageVisibility } from "react-page-visibility";

import IconChange from "@/components/IconChange";
import Projects from "@/components/Projects";

export default function Home() {
  const pageVisibility = usePageVisibility();

  // useEffect(() => {
  //   if (pageVisibility) {
  //     link.setAttribute("href", "icon-on.svg");
  //   } else {
  //     link.setAttribute("href", "icon-off.svg");
  //   }
  // }, [pageVisibility]);
  return (
    <div
      className={`bg-[#1e1e1e] h-screen w-screen relative p-6 overflow-hidden`}
    >
      <Projects>
        {/* <IconChange pageVisibility={pageVisibility} /> */}
      </Projects>
    </div>
  );
}
