import { useEffect, useRef, useState } from "react";

export function useNearScreen() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      ref.current && observer.observe(ref.current);
    });

    return () => {};
  }, [ref]);

  return [show, ref];
}
