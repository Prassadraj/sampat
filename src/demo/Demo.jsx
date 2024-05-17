import React, { useState } from "react";
import "./Demo.css";
import airpod from "../images/airpod.jpg";

function Demo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setMousePosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className="container"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleChange}
    >
      <img className="mainImg" src={airpod} alt="" />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div
            className="magnifierImg"
            style={{
              backgroundImage: `url(${airpod})`,
              backgroundPosition: `${-position.x}% ${-position.y}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Demo;