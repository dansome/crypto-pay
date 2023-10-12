'use client'

import useAutoSlider from '@/app/lib/useAutoSlide';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Grid, GridCol, GridRow } from '../grid';
import Button from '../ui/button/button';
import { slides } from './data/slides';
import styles from './usecases-block.module.scss';


const UsecasesBlock = () => {
    const [navigate, setNavigate] = useState<number | undefined>(undefined);
    // const [intervalId, setIntervalId] = useState<number | null>(null);

    // const navigateTo = useCallback(
    //     (slide: number) => () => {
    //         if (!slides) return;
    //         slide = (slide + slides.length) % slides.length;
    //         setActiveItem(slide);

    //         if (intervalId !== null) {
    //             clearInterval(intervalId);
    //             setIntervalId(null);
    //         }
    //     }, [intervalId, setActiveItem]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setActiveItem(prev => prev < (slides.length - 1) ? prev + 1 : 0)
    //     }, 3000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, [setActiveItem])

    const { activeItem, startAutoSlider, stopAutoSlider } = useAutoSlider({ slides, intervalTime: 3000, shouldStart: true });

    return (
        <div className={styles.usecasesBlock} id='use-cases'>
            <Grid>
                <div className={styles.usecasesBlock__slider}>
                        {slides && slides.map((slide, index) => {
                            return (
                                <div key={slide.id} className={clsx(styles.usecasesBlock__slide)}>
                                    <GridRow className={styles.usecasesBlock__slideRow}>
                                        <GridCol className={styles.usecasesBlock__visual} width={{ lg: 5, md: 5 }}>
                                            <div className={clsx(styles.usecasesBlock__visualContent, styles[slide.imageBackground])}>
                                                <Image src={slide.image} width={394} height={0} style={{ width: '80%', height: 'auto' }} alt={''}></Image>
                                            </div>
                                        </GridCol>
                                        <GridCol className={styles.usecasesBlock__info} width={{ lg: 6, md: 6 }} offset={{ lg: 1, md: 1 }}>
                                            <h2 className={styles.usecasesBlock__infoText}>
                                                <div className={styles.usecasesBlock__infoAccent}>{slide.accentText}</div>
                                                {slide.text}
                                            </h2>
                                            <div className={styles.usecasesBlock__infoDesc}>{slide.desc}</div>
                                            <div className={styles.usecasesBlock__infoButton}>
                                                <Link href={slide.buttonLink} target='_blank'><Button title={slide.buttonTitle}></Button></Link>
                                            </div>
                                        </GridCol>
                                    </GridRow>
                                </div>
                            )
                        })}
                    <div className={styles.usecasesBlock__pagination}>
                        <div className={styles.usecasesBlock__paginationCount}>1</div>
                        {slides && slides.map((_, index) => {
                            return <div
                                className={clsx(styles.usecasesBlock__paginationMarker, activeItem === index && styles.active)}
                                key={index}
                                onClick={() => setNavigate(index)}></div>
                        })}
                        <div className={styles.usecasesBlock__paginationCount}>{slides && slides.length}</div>
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default UsecasesBlock;