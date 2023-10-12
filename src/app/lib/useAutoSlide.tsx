import { useState, useEffect } from 'react';

interface AutoSliderProps {
    slides: any[],
    intervalTime?: number,
    shouldStart?: boolean,
    keepState?: boolean,
    startIndex?: number,
    onChange?: () => void
}

const useAutoSlider = ({
    slides,
    intervalTime,
    shouldStart = false,
    keepState = false,
    startIndex = 0,
    onChange
}: AutoSliderProps) => {
    const [activeItem, setActiveItem] = useState(startIndex);
    const [isRunning, setIsRunning] = useState(shouldStart);
    const [activeItems, setActiveItems] = useState<number[]>([startIndex]);

    useEffect(() => {
        let intervalId: any;
        if (isRunning) {
            intervalId = setInterval(() => {
                setActiveItem((prev) => {
                    const nextIndex = prev < slides.length - 1 ? prev + 1 : 0;
                    if (keepState) {
                        setActiveItems((prevItems) => {
                            if (nextIndex === 0) {
                                return [0];
                            }
                            if (!prevItems.includes(nextIndex)) {
                                return [...prevItems, nextIndex];
                            }
                            return prevItems;
                        });
                    }
                    return nextIndex;
                });
            }, intervalTime);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [slides, intervalTime, isRunning, keepState]);

    const startAutoSlider = () => {
        setIsRunning(true);
    };

    const stopAutoSlider = () => {
        setIsRunning(false);
    };

    return { activeItem, activeItems, isRunning, startAutoSlider, stopAutoSlider };
}

export default useAutoSlider;
