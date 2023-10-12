import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Slides = () => {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme();
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const slides = theme === 'dark' ? [
        '/png/animations/send-coins/1_dark.png',
        '/png/animations/send-coins/2_dark.png',
        '/png/animations/send-coins/3_dark.png',
        '/png/animations/send-coins/4_dark.png'
    ] : [
        '/png/animations/send-coins/1.png',
        '/png/animations/send-coins/2.png',
        '/png/animations/send-coins/3.png',
        '/png/animations/send-coins/4.png'
    ]

    return slides;
}

export default Slides