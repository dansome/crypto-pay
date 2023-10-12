import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, GridCol, GridRow } from '../grid';
import Button from '../ui/button/button';
import { slides } from './data/slides';
import styles from './usecases-block.module.scss';
import { Carousel } from '../ui/carousel';
import { useState } from 'react';

const UsecasesBlock = () => {
    return (
        <div className={styles.usecasesBlock} id='use-cases'>
            <div className={styles.usecasesBlock__slider}>
                <Carousel>
                    {slides && slides.map((slide) => {
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
                </Carousel>
            </div>
        </div>
    );
}

export default UsecasesBlock;