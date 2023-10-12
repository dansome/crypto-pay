import styles from './exchange.module.scss';
import { Currencies } from './data/currencies';
import Image from 'next/image';
import clsx from 'clsx';

interface ExchangeProps {
    active: boolean
}

const Exchange = ({ active }: ExchangeProps) => {
    const slides = Currencies;

    return (
        <div className={styles.exchange}>
            <div className={styles.exchange__currRow}>
                {slides && slides.map((curr, index) => {
                    return <div className={styles.exchange__curr} key={curr.name}>
                        <div className={clsx(styles.exchange__currImg, styles[`exchange__currImg_${curr.name}`], active && styles.active )}
                            style={{ backgroundImage: `url('${curr.image}')` }}>
                                <div className={styles.exchange__currImgBg}></div>
                            </div>
                    </div>
                })}
                <div className={styles.exchange__icon}></div>
                <Image className={styles.exchange__usd} src={'/svg/tokens/USD.svg'} alt={'usd'} width={96} height={96}></Image>
            </div>
        </div>
    );
}

export default Exchange;