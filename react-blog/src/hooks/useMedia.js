import { useLayoutEffect, useState } from "react";

const queries = [
  "(max-width: 929px) and (orientation: portrait)", // portrait mobile
  "(max-width: 929px) and (orientation: landscape)", // landscape mobile
  "(min-width: 930px) and (max-width: 1365px)", // tablet
  "(min-width: 1366px) and (max-width: 1919px)", // laptop
  "(min-width: 1920px)" // desktop or high-res laptop
];

export function useMedia() {
  const mediaQLists = queries.map((q) => matchMedia(q));

  const getMedias = () => mediaQLists.map((mql) => mql.matches);

  const [medias, setMedias] = useState(getMedias);

  useLayoutEffect(() => {
    const handler = () => setMedias(getMedias);

    mediaQLists.forEach((mql) => mql.addEventListener("change", handler));

    return () =>
      mediaQLists.forEach((mql) => mql.removeEventListener("change", handler));
  }, []);

  return ["isPortraitMobile", "isLandscapeMobile", "isTablet", "isLaptop", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: medias[index],
    }),
    {}
  );
}