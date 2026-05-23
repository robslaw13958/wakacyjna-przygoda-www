'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Carousel({ items, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className={styles.cardCarousel}>
      <div className={styles.cardCarouselTrack}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.cardCarouselSlide}
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? "auto" : "none",
              transition: "opacity 0.5s ease",
            }}
          >
            <img src={item.img} alt={item.alt} className={styles.cardCarouselImg} />
            <div className={styles.cardCarouselBody}>
              {item.title && <h4 className={styles.cardCarouselTitle}>{item.title}</h4>}
              <p className={styles.cardCarouselDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carouselDots}>
        {items.map((_, i) => (
          <button
            key={i}
            className={`${styles.carouselDot} ${i === current ? styles.carouselDotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}