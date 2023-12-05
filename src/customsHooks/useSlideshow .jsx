import { useCallback, useRef } from "react";

const useSlideshow = (transitionDuration, slideOffset) => {
  const slideshow = useRef(null);

  const handleTransition = useCallback((offset) => {
    slideshow.current.style.transition = `${transitionDuration}ms linear all`;
    slideshow.current.style.transform = `translateX(${offset}%)`;

    const transicion = () => {
      slideshow.current.style.transition = "none";
      slideshow.current.style.transform = "translateX(0)";

      const primerElemento = slideshow.current.children[0];
      slideshow.current.appendChild(primerElemento);

      slideshow.current.removeEventListener("transitionend", transicion);
    };

    slideshow.current.addEventListener("transitionend", transicion);
  }, [transitionDuration]);

  const siguiente = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      handleTransition(slideOffset);
    }
  }, [handleTransition, slideOffset]);

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      slideshow.current.style.transition = "none";
      slideshow.current.style.transform = `translateX(${slideOffset}%)`;

      requestAnimationFrame(() => {
        handleTransition(0);
      });
    }
  };

  return { slideshow, siguiente, anterior };
};

export default useSlideshow;
