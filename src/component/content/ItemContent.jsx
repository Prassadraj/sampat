import React from "react";
import { useInView } from "react-intersection-observer";
import "./itemContent.css";

function ItemContent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className={`flex justify-center items-center p-7 ${
        inView ? "animate-fade-in" : ""
      }`}
      ref={ref}
      id="head"
    >
      <h1 className="text-3xl uppercase">
        Trending Now: Diagnostics Products Everyone's Talking About
      </h1>
    </div>
  );
}

export default ItemContent;
