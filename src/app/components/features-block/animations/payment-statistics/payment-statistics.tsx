import clsx from 'clsx';
import styles from './payment-statistics.module.scss';
import Image from 'next/image';
import { slides } from './data/slides'
import useAutoSlider from '@/app/lib/useAutoSlide';
import { useEffect } from 'react';

interface PaymentStatisticProps {
    active: boolean
}

const PaymentStatistic = ({ active }: PaymentStatisticProps) => {
    const { activeItem, startAutoSlider, stopAutoSlider } = useAutoSlider({ slides, intervalTime: 700, startIndex: 1 });

    useEffect(() => {
        active && startAutoSlider()

        return (() => {
            stopAutoSlider()
        })
    }, [active, startAutoSlider, stopAutoSlider])

    return (
        <div className={styles.paymentStatistics}>
            <div className={styles.paymentStatistics__img}>
                {slides.map((slide, index) => {
                    return <Image key={index} src={slide} className={clsx(activeItem === index && styles.show)} fill alt='payment statistics'></Image>
                })}
            </div>
        </div>
    );
}

export default PaymentStatistic;