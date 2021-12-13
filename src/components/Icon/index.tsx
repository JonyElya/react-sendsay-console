import React from 'react';

import icons from './assets';

type IconName = keyof typeof icons;

interface IProps {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
}

const Icon = ({ name, width, height, color, ...rest }: IProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      style={{
        width: width || 'inherit',
        height: height || 'inherit',
        color: color || 'inherit',
        display: 'inline-block',
      }}
      {...rest}
    />
  );
};

export default Icon;
