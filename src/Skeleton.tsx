import React from 'react';
import classNames from 'classnames';

import {
  composeSkeletonElementStyle,
  defaultColor,
  defaultHighlightColor,
  defaultAnimationDuration,
} from './utils';

import { SkeletonProps } from './types';

import styles from './Skeleton.module.css';


const Skeleton: React.FC<SkeletonProps> = ({
  animation = 'pulse',
  count = 1,
  duration = defaultAnimationDuration,
  color = defaultColor,
  highlightColor = defaultHighlightColor,
  circle = false,
  skeletonSizes,
  className: customClassName,
  style: customStyle,
  width,
  height,
  wrapperClassName,
  wrapperDirection = 'column',
  wrapperTag: WrapperTag = 'div',
}) => {
  const _skeletonClassName = classNames(
    styles.skeleton,
    {
      [styles.pulseSkeleton]: (animation === 'pulse'),
      [styles.waveSkeleton]: (animation === 'wave'),
      [styles.gradientSkeleton]: (animation === 'gradient'),
    },
    customClassName,
  );

  const _wrapperClassName = classNames(
    styles.skeletonWrapper,
    {
      [styles.skeletonArray]: (skeletonSizes && skeletonSizes?.length > 0),
      [styles.skeletonWrapperDirection]: (wrapperDirection === 'row'),
    },
    wrapperClassName,
  );

  const elements = Array.from({ length: count }).map((_el, i) => {
    const style = composeSkeletonElementStyle(
      width,
      height,
      color,
      highlightColor,
      duration,
      circle
    );

    const SkeletonElement = (
      <span
        key={i}
        className={_skeletonClassName}
        style={{ ...customStyle, ...style }} />
    );

    const SkeletonSizes = skeletonSizes?.map(({ w, h }, index): JSX.Element => (
      <span
        key={index}
        className={_skeletonClassName}
        style={{
          ...customStyle,
          ...style,
          width: w,
          height: h,
          borderRadius: w && h && circle ? '50%' : 'none',
        }} />
    ));

    return (skeletonSizes && skeletonSizes.length > 0)
      ? SkeletonSizes
      : SkeletonElement
  });

  return (
    <WrapperTag className={_wrapperClassName}>
      {elements}
    </WrapperTag>
  );
};

export default Skeleton;
