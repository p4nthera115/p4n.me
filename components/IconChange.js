"use client";

import { usePageVisibility } from "react-page-visibility";
import { useEffect } from "react";

export default function IconChange() {
  const pageVisibility = usePageVisibility();

  useEffect(() => {
    if (pageVisibility) {
      link.setAttribute("href", "icon-on.svg");
    } else {
      link.setAttribute("href", "icon-off.svg");
    }
  }, [pageVisibility]);
  return <div>IconChange</div>;
}
