import Image from 'next/image';
import Link from "next/link";
import { Grid, GridCol, GridRow } from "../grid";
import Button from "../ui/button/button";
import styles from "./hero-block.module.scss";

export const HeroBlock = () => {
    return (
        <div className={styles.heroBlock}>
            <Grid>
                <GridRow>
                    <GridCol width={{ lg: 7, md: 7, sm: 12 }}>
                        <div className={styles.heroBlock__description}>
                            <div className={styles.heroBlock__title}>
                                <h1 className={styles.heroBlock__titleText}>
                                    Crypto payments<br />for
                                    <span className={styles.heroBlock__titleTextAccent}> telegram bots</span>
                                </h1>
                                <div className={styles.heroBlock__titleSubtext}>
                                    <p>
                                        Seamlessly accept crypto payments
                                        <br />
                                        in your Telegram bots and services.
                                    </p>
                                    <Link href={'#how-to-start'}><Button className={styles.heroBlock__titleButton} title="Get started" /></Link>
                                </div>
                            </div>
                            <div className={styles.bots}>
                                <div className={styles.heroBlock__botsPhotos}>
                                    <div className={styles.heroBlock__bot}>
                                        <Image width={96} height={96} alt="Ellipse" src="/png/bots/Ellipse 1.png" />
                                    </div>
                                    <div className={styles.heroBlock__bot}>
                                        <Image width={96} height={96} alt="Ellipse" src="/png/bots/Ellipse 2.png" />
                                    </div>
                                    <div className={styles.heroBlock__bot}>
                                        <Image width={96} height={96} alt="Ellipse" src="/png/bots/Ellipse 3.png" />
                                    </div>
                                    <div className={styles.heroBlock__bot}>
                                        <Image width={96} height={96} alt="Ellipse" src="/png/bots/Ellipse 4.png" />
                                    </div>
                                    <div className={styles.heroBlock__bot}>
                                        <Image width={96} height={96} alt="Ellipse" src="/png/bots/Ellipse 5.png" />
                                    </div>
                                </div>
                                <div>Popular bots use Crypto Pay</div>
                            </div>
                        </div>
                    </GridCol>
                    <GridCol width={{ lg: 5, md: 5, sm: 12 }} className={styles.heroBlock__imgPhone}></GridCol>
                </GridRow>
            </Grid>
        </div>
    );
};
