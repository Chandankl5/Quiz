import React from "react";

function CircleCheck({
  className
}) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM37.3137 14.3431L39.435 16.4645L25.2929 30.6066L22.4645 33.435L19.636 30.6066L12.565 23.5355L14.6863 21.4142L22.38 28.0821L37.3137 14.3431Z"
        fill="#44B77B"
      />
    </svg>
  );
}

export default CircleCheck;
