"use client";
import React, { useState } from "react";

const Tooltip = ({ text, children }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="absolute top-full left-0 z-20 transform bg-gray-800 text-white px-2 py-1 rounded-md opacity-100 w-[100px]">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
