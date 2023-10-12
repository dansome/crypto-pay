'use client'

import clsx from 'clsx';
import { Grid, GridCol, GridRow } from '../grid';
import styles from './features-block.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { Currencies } from './data/currencies';
import { CreateAppButton, Exchange, PaymentStatistic, Payments, SendCoins } from './animations';
import { useState } from 'react';

type animatedElements = 'createApp' | 'paymentsStatistics' | 'payments' | 'sendCoins' | 'exchange' | undefined

const FeaturesBlock = () => {
    const [active, setActive] = useState<animatedElements>(undefined)

    const handleMouseEnter = (element: animatedElements) => {
        setActive(element);
    };

    const handleMouseLeave = () => {
        setActive(undefined);
    };

    return (
        <div className={styles.features} id='features'>
            <Grid>
                <GridRow>
                    <GridCol width={12}>
                        <div className={clsx(styles.features__currencies, styles.features__plate, styles.features__plate_flex)}>
                            <h3 className={clsx(styles.features__title, styles.features__title_noMargin)}>Accept a wide range of cryptocurrencies</h3>
                            <div className={styles.features__subtitle}>Bill any supported cryptocurrencies with asset parameter in <Link className='link' href={'https://help.crypt.bot/crypto-pay-api#getInvoices'}>getInvoices method</Link></div>
                            <div className={styles.features__currenciesList}>
                                {Currencies && Currencies.map(curr => {
                                    return (
                                        <div key={curr.image} className={styles.features__currency}>
                                            <div className={styles.features__currencyImg}>
                                                <Image fill src={curr.image} alt={curr.name}></Image>
                                            </div>
                                            <div className={styles.features__currencyName}>{curr.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol width={{ lg: 5, md: 5 }} className={styles.features__col}>
                        <div className={styles.features__plate}
                            onMouseEnter={() => handleMouseEnter('createApp')} onMouseLeave={handleMouseLeave}>
                            <CreateAppButton active={active === 'createApp'}></CreateAppButton>
                            <h3 className={styles.features__title}>One click to start</h3>
                            <div className={styles.features__subtitle}>
                                Open <Link href={'https://t.me/CryptoBot'} target='_blank'>@CryptoBot</Link>, go to <Link href={''} target='_blank'>Crypto Pay</Link> and tap Create App to get API Token
                            </div>
                        </div>
                        <div className={clsx(styles.features__plate, styles.features__plate_mtop)}
                            onMouseEnter={() => handleMouseEnter('exchange')} onMouseLeave={handleMouseLeave}>
                            <Exchange active={active === 'exchange'}></Exchange>
                            <h3 className={styles.features__title}>Real-time <br />exchange rates</h3>
                            <div className={styles.features__subtitle}>
                                Request up to date currency rate with the <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#getExchangeRates'}>getExchangeRates</Link> API method
                            </div>
                        </div>
                    </GridCol>
                    <GridCol width={{ md: 7, lg: 7 }} className={styles.features__col} flex>
                        <div className={styles.features__plate}
                            onMouseEnter={() => handleMouseEnter('paymentsStatistics')} onMouseLeave={handleMouseLeave}>
                            <PaymentStatistic active={active === 'paymentsStatistics'}></PaymentStatistic>
                            <h3 className={styles.features__title}>Payment statistics</h3>
                            <div className={styles.features__subtitle}>
                                Open <Link href={'https://t.me/CryptoBot'} target='_blank'>@CryptoBot</Link>, go to <Link target='_blank' href={''}>Crypto Pay</Link> and <Link href={''} className='link'>My Apps</Link>, App Name to get Statistics
                            </div>
                        </div>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol width={{ md: 7, lg: 7 }} className={styles.features__col} flex>
                        <div className={clsx(styles.features__plate, styles.features__plate_noPadTop)}
                            onMouseEnter={() => handleMouseEnter('sendCoins')} onMouseLeave={handleMouseLeave}>
                            <SendCoins active={active === 'sendCoins'}></SendCoins>
                            <h3 className={styles.features__title}>Send coins to users</h3>
                            <div className={styles.features__subtitle}>
                                Automate payouts to users with <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#transfer'}>transfer</Link> API method
                            </div>
                        </div>
                    </GridCol>
                    <GridCol width={{ lg: 5, md: 5 }} className={styles.features__col} flex>
                        <div className={styles.features__plate}
                            onMouseEnter={() => handleMouseEnter('payments')} onMouseLeave={handleMouseLeave}>
                            <Payments active={active === 'payments'}></Payments>
                            <h3 className={styles.features__title}>Anonymous payments</h3>
                            <div className={styles.features__subtitle}>
                                Use allow_anonymous parameterin <Link target='_blank' href={'https://help.crypt.bot/crypto-pay-api#createInvoice'}>createInvoice</Link> method to give useran option to remain private
                            </div>
                        </div>
                    </GridCol>
                </GridRow>
            </Grid>
        </div>
    );
}

export default FeaturesBlock;