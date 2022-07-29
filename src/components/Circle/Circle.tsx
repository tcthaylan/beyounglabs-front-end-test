import React from 'react';
import classes from './Circle.module.scss';
import { TCircle } from './types';

export function Circle({ isActive }: TCircle) {
  const getColor = () => {
    if (isActive) return classes.gray;
    return;
  };

  return <div className={`${classes.circle} ${getColor()}`} />;
}
