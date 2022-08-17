import React from "react";

const Icon = ({ width = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 496 496"
      version="1.1"
      viewBox="0 0 496 496"
      xmlSpace="preserve"
      width={ width }
      { ...props }
    >
      <path fill="#EBF7F7" d="M160 80H336V416H160z"></path>
      <g fill="#589F58">
        <path
          d="M160 80H48C21.6 80 0 99.2 0 126.4v243.2C0 396.8 21.6 416 48 416h112V80zM448 80H336v336h112c26.4 0 48-19.2 48-46.4V126.4c0-27.2-21.6-46.4-48-46.4z"></path>
      </g>
      <path
        fill="#479347"
        d="M448 80H336v240.8L446.4 416c26.4 0 49.6-19.2 49.6-46.4V126.4c0-27.2-21.6-46.4-48-46.4z"
      ></path>
      <path fill="#E2F2F1" d="M336 320.8L336 80 160 80 160 175.2z"></path>
      <path fill="#479347" d="M160 80L48 80 160 175.2z"></path>
      <path fill="#398439" d="M336 416h112c26.4 0 48-16 48-48H336v48z"></path>
      <path fill="#D6EAE8" d="M160 368H336V416H160z"></path>
      <g fill="#398439">
        <path d="M0 368c0 32 21.6 48 48 48h112v-48H0zM448 80H336v84.8l160 49.6v-88c0-27.2-21.6-46.4-48-46.4z"></path>
      </g>
      <path fill="#D6EAE8" d="M336 164.8L336 80 160 80 160 112.8z"></path>
      <path fill="#398439" d="M160 80L48 80 160 112.8z"></path>
    </svg>
  );
};

export default Icon;
