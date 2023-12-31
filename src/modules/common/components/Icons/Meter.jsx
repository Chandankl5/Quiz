import React from "react";

function Meter({
  className
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 260"
      fill="none"
      className={className}
    >
      <path
        d="M490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250"
        stroke="url(#paint0_linear_86_5)"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_86_5"
          x1="490"
          y1="10"
          x2="10"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44B77B" />
          <stop offset="0.479043" stopColor="#FFD033" />
          <stop offset="1" stopColor="#FF3B3F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Meter;
