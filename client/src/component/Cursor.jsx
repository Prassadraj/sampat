import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef();

  // Mouse tracking and cursor animation
  const animateCursor = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animateEvent = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  // Hide default cursor and render custom cursor
  useEffect(() => {
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "auto"; // Restore default cursor
    };
  }, []);

  return (
    <div
      className="z-50 fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left: 0, top: 0 }}
      ref={cursorOutline}
    >
      <img style={{transform:"rotate(30deg)"}} width="50px" src="https://cdn2.iconfinder.com/data/icons/science-space-what-not/100/Erlenmeyer_flask-512.png" alt="" />
    </div>
  );
};
