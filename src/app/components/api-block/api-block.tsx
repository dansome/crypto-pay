import Link from 'next/link';
import Button from '../ui/button/button';
import { Grid, GridCol, GridRow } from '../grid';
import styles from './api-block.module.scss';

const ApiBlock = () => {
    return (
        <div className={styles.apiBlock}>
            <Grid>
                <GridRow>
                    <GridCol width={12}>
                        <div className={styles.apiBlock__block}>
                            <div className={styles.apiBlock__blockImg}></div>
                            <div className={styles.apiBlock__blockContent}>
                                <h2 className={styles.apiBlock__blockTitle}>Crypto Pay API</h2>
                                <div className={styles.apiBlock__blockText}>Explore available methods and types <br />and integrate them in any programming language.</div>
                                <Link className={styles.apiBlock__buttonLink} target='_blank' href={'https://help.crypt.bot/crypto-pay-api/'}>
                                    <Button className={styles.apiBlock__button} type={'transparent'} title='Open API Docs'></Button>
                                </Link>
                            </div>
                        </div>
                    </GridCol>
                </GridRow>
            </Grid>
        </div>
    );
}

export default ApiBlock;