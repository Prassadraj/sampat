import React from "react";
import { motion } from "framer-motion";

function ItemContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-500px", once: true }}
      className="flex justify-center items-center p-7"
      style={{ backgroundColor: "black", color: "white" }}
      id="head"
      onViewportEnter={() => console.log("enter")}
    >
      <h1 className="text-3xl uppercase">
        Trending Now: Diagnostics Products Everyone's Talking About
      </h1>
    </motion.div>
  );
}

export default ItemContent;
