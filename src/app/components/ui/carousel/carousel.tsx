'use client'

import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { isClient } from '@/app/lib/is-client';
import clsx from 'clsx';
import styles from './carousel.module.scss'

export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
  indicators?: boolean;
  slide?: boolean;
  slideInterval?: number;
  onSlideChange?: (slide: number) => void;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  indicators = true,
  slide = true,
  slideInterval,
  className,
  onSlideChange = null,
  ...props
}) => {

  const isDeviceMobile = isClient() && navigator.userAgent.indexOf('IEMobile') !== -1;
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const didMountRef = useRef(false);

  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: clsx(styles.carousel__item, child.props.className),
        }),
      ),
    [children],
  );

  const navigateTo = useCallback(
    (item: number) => () => {
      if (!items) return;
      item = (item + items.length) % items.length;
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
      }
      setActiveItem(item);
    },
    [items],
  );

  useEffect(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
    }
  }, [isDragging]);

  useEffect(() => {
    if (slide) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000);

      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval]);

  useEffect(() => {
    if (didMountRef.current) {
      onSlideChange && onSlideChange(activeItem);
    } else {
      didMountRef.current = true;
    }
  }, [onSlideChange, activeItem]);

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging);

  return (
    <div className={clsx(styles.carousel, className)} data-testid="carousel" {...props}>
      <ScrollContainer
        className={clsx(styles.carousel__container, (isDeviceMobile || !isDragging) && styles.carousel__container_snap)}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(true)}
        vertical={false}
      >
        {items?.map((item, index) => (
          <div
            key={index}
            className={styles.carousel__itemWrapper}
            data-active={activeItem === index}
          >
            {item}
          </div>
        ))}
      </ScrollContainer>
      {indicators && (
        <>
          <div className={styles.carousel__indicators}>
            <div className={styles.carousel__counter}>{(activeItem + 1).toString().padStart(2,'0')}</div>
            {items?.map((_, index) => (
              <div
                key={index}
                className={clsx(styles.carousel__indicator, activeItem === index && styles.carousel__indicator_active)}
                onClick={navigateTo(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
            <div className={styles.carousel__counter}>{items.length.toString().padStart(2,'0')}</div>
          </div>
        </>
      )}
    </div>
  );
};


Carousel.displayName = 'Carousel';
