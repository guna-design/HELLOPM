import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [highlight, setHighlight] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;

      if (target.tagName === "BUTTON" || target.tagName === "A") {
        setHighlight(true);
        setTooltipText(
          target.getAttribute("data-tooltip") || "Click to interact"
        );
      } else if (target.getAttribute("data-tooltip")) {
        setHighlight(false);
        setTooltipText(target.getAttribute("data-tooltip"));
      } else {
        setHighlight(false);
        setTooltipText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none">
      {highlight && (
        <div
          className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-t from-pink-200 to-black  opacity-50 pointer-events-none transform transition-transform duration-150"
          style={{
            transform: `translate(${position.x - 16}px, ${
              position.y - 16
            }px) scale(1.2)`,
          }}
        ></div>
      )}

      {tooltipText && (
        <div
          className="fixed top-0 left-0 p-1 text-xs text-white bg-black bg-opacity-70 rounded-md pointer-events-none whitespace-nowrap transition-transform duration-150"
          style={{
            transform: `translate(${position.x + 20}px, ${position.y + 20}px)`,
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
