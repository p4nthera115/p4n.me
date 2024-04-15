export function generateMetadata({ pageVisibility }) {
  console.log(pageVisibility);
  return {
    icons: {
      icon: [
        pageVisibility
          ? {
              url: "/images/icon-on.svg",
              href: "/images/icon-on.svg",
            }
          : {
              url: "/images/icon-off.svg",
              href: "/images/icon-off.svg",
            },
      ],
    },
  };
}
