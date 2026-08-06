import { useEffect, useState, useRef } from "react";

export const useDetectScrollStop = () => {
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const componentMounted = useRef(true);
  let handle = null;
  const handleScroll = () => {
    setUserHasScrolled(true);
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(() => {
      setUserHasScrolled(false);
    }, 300);
  };

  useEffect(() => {
    if (componentMounted.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      componentMounted.current = false;
      clearTimeout(handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userHasScrolled };
};
