import { CSSProperties } from 'react';

type SkeletonLineProps = {
  w: number | string;
  h?: number;
};

export type SkeletonProps = {
  count?: number; // number of skeletons
  duration?: number; // animation duration
  width?: string | number; // if it's not set it equals to 100%
  height?: number; // if it's not set it equals to 16px - default height in styles
  circle?: boolean; // set borderRadius to 50%

  className?: string; // for applying styles for skeleton
  style?: CSSProperties; // maybe it's not be used but...

  color?: string; // for changing main color
  highlightColor?: string; // for changing additional color

  animation?: 'pulse' | 'wave' | 'gradient'; // type of Skeleton's animation

  skeletonSizes?: SkeletonLineProps[]; // if Skeleton is Array
  wrapperDirection?: 'column' | 'row'; // for defining the main axis for items in the flex container
  wrapperClassName?: string; // for applying styles for skeletonWrapper

  wrapperTag?: keyof JSX.IntrinsicElements; // sets a tag to skeletonWrapper
};
