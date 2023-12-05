import { useState } from "react";

const useCarrouselState = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (value, index) => {
    setTranslateValue(value);
    setActiveIndex(index);
  };

  return { translateValue, activeIndex, handleClick };
};

export default useCarrouselState;
