import React from "react";

function Arrow({
  className,
  style
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="292"
      viewBox="0 0 160 292"
      fill="none"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.6683 0C78.4606 0 77.375 0.73619 76.9281 1.85813L0 195H1.80997C0.624386 200.479 0 206.166 0 212C0 256.183 35.8172 292 80 292C124.183 292 160 256.183 160 212C160 206.166 159.376 200.479 158.19 195H159.356L154.771 183.49C154.494 182.764 154.206 182.043 153.909 181.327L82.4084 1.85789C81.9615 0.736075 80.8759 0 79.6683 0Z"
        fill="#1E1E28"
      />
    </svg>
  );
}

export default Arrow;
