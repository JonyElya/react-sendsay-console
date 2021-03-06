import React from 'react';

const DotsIcon = (props: any) => (
  <svg {...props} width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <circle cx="3" cy="2" r="2" fill="black" fillOpacity="0.2" />
      <circle cx="3" cy="9" r="2" fill="black" fillOpacity="0.2" />
      <circle cx="3" cy="16" r="2" fill="black" fillOpacity="0.2" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect x="0" width="6" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DotsIcon;
