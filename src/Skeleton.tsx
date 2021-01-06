import { CSSProperties, FC } from "react";
import classNames from 'classnames';

import styles from './Skeleton.module.css';

type SkeletonLineProps = {
  w: number | string;
  h?: number | string;
};

type Props = {
  count?: number; // number of skeletons
  duration?: number; // animation duration
  width?: string | number; // if it's not set it equals to 100%
  height?: string | number; // if it's not set it equals to font-size of parent (or higher) element
  circle?: boolean; // set borderRadius to 50%
  style?: CSSProperties; // maybe it's not be used but...
  className?: string; // for applying styles for skeleton

  color?: string; // for changing main color
  highlightColor?: string; // for changing additional color

  animation?: 'pulse' | 'wave'; // type of Skeleton's animation

  skeletonSizes?: SkeletonLineProps[]; // if Skeleton is Array

  wrapperDirection?: 'column' | 'row';
  wrapperClassName?: string; // for applying styles for skeletonWrapper
  wrapperTag?: keyof JSX.IntrinsicElements; // sets a tag to skeletonWrapper
};

const defaultColor = '#eeeeee';
const defaultHighlightColor = '#f5f5f5';
const defaultAnimationDuration = 1.2;

const Skeleton: FC<Props> = ({
  animation = 'pulse',
  count = 1,
  duration = defaultAnimationDuration,
  color = defaultColor,
  highlightColor = defaultHighlightColor,
  circle = false,
  skeletonSizes,
  style: customStyle,
  className: customClassName,
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
  )

  const elements = [];

  for (let i = 0; i < count; i++) {
    let style = {} as CSSProperties;

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
      )`
    }

    if (duration && duration !== defaultAnimationDuration) {
      style.animationDuration = `${duration}s`;
    }

    const SkeletonSizes = skeletonSizes?.map(({ w, h }, index) => (
      <span
        key={index}
        className={_skeletonClassName}
        style={{
          ...customStyle,
          ...style,
          width: w,
          height: h,
          borderRadius: w && h && circle ? '50%' : 'none'
        }}
      >
      </span>
    ));

    const SkeletonElement = (
      <span
        key={i}
        className={_skeletonClassName}
        style={{
          ...customStyle,
          ...style,
        }}
      >
        &zwnj;
      </span>
    );

    elements.push(
      (skeletonSizes && skeletonSizes?.length > 0)
        ? SkeletonSizes
        : SkeletonElement
    );
  }

  return (
    <WrapperTag className={_wrapperClassName}>
      {elements}
    </WrapperTag>
  );
};

export default Skeleton;
