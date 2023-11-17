import React from "react";

const Button = ({ className, color, hover, children }) => {
  return (
    <button
      className={`${color} text-white px-4 py-2 rounded-full ${hover} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
