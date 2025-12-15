import styles from "../Slider/styles.module.css";

import { useRef } from "react";
import React from "react";

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= step;
    } else {
      return;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += step;
    } else {
      return;
    }
  };

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={scrollLeft}>{`<`}</button>

      {React.cloneElement(children, { ref: sliderRef })}

      <button className={styles.arrow} onClick={scrollRight}>{`>`}</button>
    </div>
  );
};

export default Slider;
