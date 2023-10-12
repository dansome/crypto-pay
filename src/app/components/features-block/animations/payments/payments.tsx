import Image from "next/image";
import styles from './payments.module.scss';
import { slides } from './data/slides';
import useAutoSlider from "@/app/lib/useAutoSlide";
import clsx from "clsx";
import { useEffect } from "react";

interface PaymentsProps {
    active: boolean
}

const Payments = ({ active }: PaymentsProps) => {
    const { activeItems, startAutoSlider, stopAutoSlider } = useAutoSlider({ slides, intervalTime: 1000, keepState: true, startIndex: 1 });
    const animationClasses = (index: number) => {
        return clsx(
            styles.payments__img,
            (activeItems.includes(index) && index === activeItems.length - 1 && index !== 0) && styles.slideIn,
            (activeItems.includes(index) && index !== activeItems[activeItems.length - 1]) && styles.slideOut
        )
    }

    useEffect(() => {
        active && startAutoSlider()

        return (() => {
            stopAutoSlider()
        })
    }, [active, startAutoSlider, stopAutoSlider])

    return (
        <div className={styles.payments}>
            {slides && slides.map((slide, index) => {
                return <Image
                    key={index}
                    className={animationClasses(index)}
                    width={398}
                    height={125}
                    style={{ height: 'auto' }}
                    src={slide}
                    alt={'payments im'}></Image>
            })}
        </div>
    );
}

export default Payments;