import Button from '../ui/button/button';
import { Grid, GridCol, GridRow } from '../grid';
import styles from './community-block.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { libraries } from './data/libraries';

const CommunityBlock = () => {
    return (
        <div className={styles.communityBlock}>
            <Grid>
                <h2 className={styles.communityBlock__title}>Join dev community</h2>
                <div className={styles.communityBlock__text}>
                    Connect with bot developers and explore the possibilities <br />our crypto payments service unlocks.
                </div>
                <GridRow>
                    <GridCol width={{ lg: 10, md: 10 }} offset={{ lg: 1, md: 1 }}>
                        <div className={styles.communityBlock__libraries}>
                            {libraries && libraries.map((lib, index) => {
                                return (
                                    <div key={index} className={styles.communityBlock__librariesItem}>
                                        <Image className={styles.communityBlock__librariesImg} width={0} height={0} src={lib.src} alt={'crypto api lirabry'}></Image>
                                        <div className={styles.communityBlock__librariesItemText}>{lib.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </GridCol>
                </GridRow>
                <Link href={'https://t.me/CryptoPayDevRU'} target='_blank' className={styles.communityBlock__button}>
                    <Button title={'Open Devs chat'}></Button>
                </Link>
            </Grid>
        </div>
    );
}

export default CommunityBlock;