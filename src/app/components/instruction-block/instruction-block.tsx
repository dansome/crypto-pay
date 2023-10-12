import Link from 'next/link';
import { Grid, GridCol, GridRow } from '../grid';
import styles from './instruction-block.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

const InstructionBlock = () => {
    return (
        <div className={styles.instructionBlock} id='how-to-start'>
            <Grid>
                <h2 className={styles.instructionBlock__title}>Quick start using <span className={styles.instructionBlock__titleAccent}>Crypto Pay</span></h2>
                <GridRow className={styles.instructionBlock__step}>
                    <GridCol width={{ lg: 6, md: 6 }} flex>
                        <div className={styles.instructionBlock__stepInfo}>
                            <div className={styles.instructionBlock__stepNumber}><h3>1</h3></div>
                            <h3>Authorizing your app</h3>
                            <div className={styles.instructionBlock__list}>
                                <div className={styles.instructionBlock__listItem}>
                                    1. Open <Link target='_blank' href={'https://t.me/CryptoBot'}>
                                        <span className={styles.instructionBlock__listItemAccent}>@CryptoBot</span></Link>
                                </div>
                                <div className={styles.instructionBlock__listItem}>
                                    2. Go to <span className={styles.instructionBlock__listItemAccent}>Crypto pay</span>
                                </div>
                                <div className={styles.instructionBlock__listItem}>
                                    3. Tap <span className={styles.instructionBlock__listItemAccent}>Create app</span>
                                </div>
                                <div className={styles.instructionBlock__listItem}>
                                    4. Get <span className={styles.instructionBlock__listItemAccent}>API Token</span>
                                </div>
                            </div>
                        </div>
                    </GridCol>
                    <GridCol width={{ lg: 6, md: 6 }} flex>
                        <div className={clsx(styles.instructionBlock__stepVisual, styles.instructionBlock__stepVisual_purple)}>
                            <Image className={styles.instructionBlock__stepVisualImg} src={'/png/steps/step-1-img.png'} width={390} height={0} style={{ height: 'auto' }} alt={''}></Image>
                        </div>
                    </GridCol>
                </GridRow>
                <GridRow className={styles.instructionBlock__step}>
                    <GridCol width={{ lg: 5, md: 5 }} offset={{ lg: 1, md: 1 }} flex>
                        <div className={styles.instructionBlock__stepInfo}>
                            <div className={styles.instructionBlock__stepNumber}><h3>2</h3></div>
                            <h3>Crypto Pay API Request</h3>
                            <div className={styles.instructionBlock__stepDescription}>
                                Requests are only served over HTTPS <br />To pass parameters use:
                            </div>
                            <div className={styles.instructionBlock__list}>
                                <div className={styles.instructionBlock__listItem}>
                                    <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#authorizing-your-app'}>URL query string</Link></div>
                                <div className={styles.instructionBlock__listItem}>
                                    <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#authorizing-your-app'}>application/json</Link></div>
                                <div className={styles.instructionBlock__listItem}>
                                    <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#authorizing-your-app'}>application/x-www-form-urlencoded</Link></div>
                                <div className={styles.instructionBlock__listItem}>
                                    <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#authorizing-your-app'}>multipart/form-data</Link></div>
                            </div>
                        </div>
                    </GridCol>
                    <GridCol width={{ lg: 6, md: 6 }} flex>
                        <div className={clsx(styles.instructionBlock__stepVisual, styles.instructionBlock__stepVisual_yellow)}>
                            <Image className={styles.instructionBlock__stepVisualImg} src={'/png/steps/step-2-img.png'} width={394} height={0} style={{ height: 'auto' }} alt={''}></Image>
                        </div>
                    </GridCol>
                </GridRow>
                <GridRow className={styles.instructionBlock__step}>
                    <GridCol width={{ lg: 6, md: 6 }} flex>
                        <div className={styles.instructionBlock__stepInfo}>
                            <div className={styles.instructionBlock__stepNumber}><h3>3</h3></div>
                            <h3>Getting updates</h3>
                            <div className={styles.instructionBlock__stepDescription}>
                                There are two ways of receiving <br />updates for your app:
                            </div>
                            <div className={styles.instructionBlock__list}>
                                <div className={styles.instructionBlock__listItem}>
                                    <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#getInvoices'}>getInvoices</Link> method to get a list of created invoices.</div>
                                <div className={styles.instructionBlock__listItem}>
                                    <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#webhooks'}>Webhooks</Link> to receive updates in realtime.</div>
                            </div>
                        </div>
                    </GridCol>
                    <GridCol width={{ lg: 6, md: 6 }} flex>
                        <div className={clsx(styles.instructionBlock__stepVisual, styles.instructionBlock__stepVisual_blue)}>
                            <Image className={styles.instructionBlock__stepVisualImg} src={'/png/steps/step-3-img.png'} width={390} height={0} style={{ height: 'auto' }} alt={''}></Image>
                        </div>
                    </GridCol>
                </GridRow>
            </Grid>
        </div>
    );
}

export default InstructionBlock;