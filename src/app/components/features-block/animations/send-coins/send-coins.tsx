import Image from "next/image";
import styles from './send-coins.module.scss';
import Slides from './data/slides';
import useAutoSlider from "@/app/lib/useAutoSlide";
import clsx from "clsx";
import { useEffect } from "react";

interface SendCoinsProps {
    active: boolean
}

const SendCoins = ({ active }: SendCoinsProps) => {
    const slides = Slides() as any[];
    const { activeItems, startAutoSlider, stopAutoSlider } = useAutoSlider({ slides, intervalTime: 1000, keepState: true, startIndex: 1 });
    const animationClasses = (index: number) => {
        return clsx(
            styles.sendCoins__img,
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
        <div className={styles.sendCoins}>
            {slides && slides.map((slide, index) => {
                return <Image key={index} className={animationClasses(index)} width={398} height={125} src={slide} alt={''}></Image>
            })}
        </div>
    );
}

export default SendCoins;