import { useEffect, useRef, useState } from "react";

export function useNearScreen() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.unobserve(ref.current);
      }
    });

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return [show, ref];
}
