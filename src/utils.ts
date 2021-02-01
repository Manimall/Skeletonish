import { CSSProperties } from 'react';

import { SkeletonProps } from './types';

export const defaultColor = '#eeeeee';
export const defaultHighlightColor = '#f5f5f5';
export const defaultAnimationDuration = 1.2;

export const composeSkeletonElementStyle = (
  width?: SkeletonProps['width'],
  height?: SkeletonProps['height'],
  color?: SkeletonProps['color'],
  highlightColor?: SkeletonProps['highlightColor'],
  duration?: SkeletonProps['duration'],
  circle?: SkeletonProps['circle'],
): CSSProperties => {
  const style = {} as CSSProperties;

  if (width) {
    style.width = width;
  }

  if (height) {
    style.height = height;
  }

  if (width && height && circle) {
    style.borderRadius = '50%';
  }

  if (color && color!== defaultColor) {
    style.backgroundColor = color;
  }

  if ((color && color!== defaultColor)
    && (highlightColor && highlightColor !== defaultHighlightColor)
  ) {
    style.backgroundImage = `linear-gradient(
      90deg,
      ${color},
      ${highlightColor},
      ${color}
    )`;
  }

  if (duration && duration !== defaultAnimationDuration) {
    style.animationDuration = `${duration}s`;
  }

  return style;
};
